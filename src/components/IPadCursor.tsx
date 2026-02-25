import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, select, textarea, summary, label[for], [data-cursor-hover]";

interface HoverTarget {
  x: number;
  y: number;
  width: number;
  height: number;
  borderRadius: number;
}

const springConfig = { stiffness: 500, damping: 35, mass: 0.4 };

const IPadCursor = () => {
  const [hovering, setHovering] = useState<HoverTarget | null>(null);
  const [visible, setVisible] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const animX = useSpring(cursorX, springConfig);
  const animY = useSpring(cursorY, springConfig);
  const width = useSpring(20, springConfig);
  const height = useSpring(20, springConfig);
  const radius = useSpring(10, springConfig);
  const opacity = useSpring(0, { stiffness: 300, damping: 30 });
  const scale = useSpring(1, springConfig);
  const rafRef = useRef<number>(0);
  const mousePos = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (!visible) setVisible(true);

      // Find hovered interactive element
      const target = (e.target as HTMLElement)?.closest?.(INTERACTIVE_SELECTOR) as HTMLElement | null;

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
      } else {
        setHovering(null);
      }
    },
    [visible]
  );

  useEffect(() => {
    const update = () => {
      if (hovering) {
        cursorX.set(hovering.x);
        cursorY.set(hovering.y);
        width.set(hovering.width);
        height.set(hovering.height);
        radius.set(hovering.borderRadius);
        opacity.set(0.12);
        scale.set(1);
      } else {
        cursorX.set(mousePos.current.x);
        cursorY.set(mousePos.current.y);
        width.set(20);
        height.set(20);
        radius.set(10);
        opacity.set(0.6);
        scale.set(1);
      }
      rafRef.current = requestAnimationFrame(update);
    };
    rafRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafRef.current);
  }, [hovering, cursorX, cursorY, width, height, radius, opacity, scale]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [handleMouseMove]);

  // Hide on touch devices
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isTouch) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-normal"
      style={{
        x: animX,
        y: animY,
        width,
        height,
        borderRadius: radius,
        opacity: visible ? 1 : 0,
        translateX: "-50%",
        translateY: "-50%",
        scale,
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
