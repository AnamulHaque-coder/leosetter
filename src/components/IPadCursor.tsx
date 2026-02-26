import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, select, textarea, summary, label[for], [data-cursor-hover]";

const MAGNETIC_RANGE = 80;
const MAGNETIC_STRENGTH = 0.35;

interface HoverTarget {
  x: number;
  y: number;
  width: number;
  height: number;
  borderRadius: number;
}

const springConfig = { stiffness: 500, damping: 35, mass: 0.4 };
const magneticSpring = { stiffness: 350, damping: 30, mass: 0.5 };

const IPadCursor = () => {
  const [hovering, setHovering] = useState<HoverTarget | null>(null);
  const visibleRef = useRef(false);
  const [, forceRender] = useState(0);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const animX = useSpring(cursorX, springConfig);
  const animY = useSpring(cursorY, springConfig);
  const width = useSpring(20, springConfig);
  const height = useSpring(20, springConfig);
  const radius = useSpring(10, springConfig);
  const opacity = useSpring(0, { stiffness: 300, damping: 30 });
  const scale = useSpring(1, magneticSpring);
  const mousePos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);
  const pendingMove = useRef<{ x: number; y: number; target: EventTarget | null } | null>(null);

  const setVisible = useCallback((v: boolean) => {
    if (visibleRef.current !== v) {
      visibleRef.current = v;
      forceRender((n) => n + 1);
    }
  }, []);

  const processMove = useCallback(
    (mx: number, my: number, eventTarget: EventTarget | null) => {
      mousePos.current = { x: mx, y: my };
      setVisible(true);

      const target = (eventTarget as HTMLElement)?.closest?.(INTERACTIVE_SELECTOR) as HTMLElement | null;

      if (target) {
        const rect = target.getBoundingClientRect();
        const computedStyle = getComputedStyle(target);
        const br = parseFloat(computedStyle.borderRadius) || 12;
        const padding = 6;

        setHovering({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          width: rect.width + padding * 2,
          height: rect.height + padding * 2,
          borderRadius: br + 4,
        });

        cursorX.set(rect.left + rect.width / 2);
        cursorY.set(rect.top + rect.height / 2);
        width.set(rect.width + padding * 2);
        height.set(rect.height + padding * 2);
        radius.set(br + 4);
        opacity.set(0.12);
        scale.set(1);
      } else {
        setHovering(null);
        cursorX.set(mx);
        cursorY.set(my);
        width.set(20);
        height.set(20);
        radius.set(10);
        opacity.set(0.6);
        scale.set(1);
      }
    },
    [setVisible, cursorX, cursorY, width, height, radius, opacity, scale]
  );

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      pendingMove.current = { x: e.clientX, y: e.clientY, target: e.target };
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(() => {
          rafId.current = 0;
          const p = pendingMove.current;
          if (p) processMove(p.x, p.y, p.target);
        });
      }
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = (e: MouseEvent) => {
      // Immediately update position on re-enter so cursor appears at the right spot
      pendingMove.current = { x: e.clientX, y: e.clientY, target: e.target };
      processMove(e.clientX, e.clientY, e.target);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter as EventListener);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter as EventListener);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [processMove, setVisible]);

  // Hide on touch devices
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isTouch) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        x: animX,
        y: animY,
        width,
        height,
        borderRadius: radius,
        opacity: visibleRef.current ? 1 : 0,
        translateX: "-50%",
        translateY: "-50%",
        scale,
        willChange: "transform",
      }}
    >
      <motion.div
        className="w-full h-full"
        style={{
          borderRadius: radius,
          opacity,
          background:
            "linear-gradient(135deg, hsl(350 80% 65% / 0.9), hsl(300 70% 60% / 0.9))",
        }}
      />
      {/* Small dot in center when not hovering */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 8,
          height: 8,
          background: "linear-gradient(135deg, hsl(350 85% 70%), hsl(310 70% 65%))",
          opacity: hovering ? 0 : 1,
          transition: "opacity 0.15s ease",
        }}
      />
    </motion.div>
  );
};

export default IPadCursor;
