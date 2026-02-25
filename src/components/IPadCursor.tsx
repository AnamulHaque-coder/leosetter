import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, select, textarea, summary, label[for], [data-cursor-hover]";

const MAGNETIC_RANGE = 80; // px distance to start attracting
const MAGNETIC_STRENGTH = 0.35; // 0-1, how strongly it pulls

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
  const [visible, setVisible] = useState(false);
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

  const findNearestInteractive = useCallback((x: number, y: number) => {
    const elements = document.querySelectorAll(INTERACTIVE_SELECTOR);
    let nearest: { el: HTMLElement; dist: number; rect: DOMRect } | null = null;

    elements.forEach((el) => {
      const rect = (el as HTMLElement).getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
      // Account for element size — measure from edge, not center
      const edgeDist = Math.max(
        0,
        dist - Math.max(rect.width, rect.height) / 2
      );
      if (edgeDist < MAGNETIC_RANGE && (!nearest || edgeDist < nearest.dist)) {
        nearest = { el: el as HTMLElement, dist: edgeDist, rect };
      }
    });
    return nearest;
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const mx = e.clientX;
      const my = e.clientY;
      mousePos.current = { x: mx, y: my };

      if (!visible) setVisible(true);

      // Check if directly hovering
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

        cursorX.set(rect.left + rect.width / 2);
        cursorY.set(rect.top + rect.height / 2);
        width.set(rect.width + padding * 2);
        height.set(rect.height + padding * 2);
        radius.set(br + 4);
        opacity.set(0.12);
        scale.set(1);
      } else {
        setHovering(null);

        // Check for nearby magnetic targets
        const nearest = findNearestInteractive(mx, my);

        if (nearest) {
          const { rect, dist } = nearest;
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          // Stronger pull as we get closer
          const proximity = 1 - dist / MAGNETIC_RANGE;
          const pull = proximity * MAGNETIC_STRENGTH;

          const pullX = mx + (cx - mx) * pull;
          const pullY = my + (cy - my) * pull;

          cursorX.set(pullX);
          cursorY.set(pullY);

          // Scale up slightly as we approach
          const cursorScale = 1 + proximity * 0.4;
          width.set(20 * cursorScale);
          height.set(20 * cursorScale);
          radius.set(10 * cursorScale);
          opacity.set(0.6 + proximity * 0.15);
          scale.set(1);
        } else {
          cursorX.set(mx);
          cursorY.set(my);
          width.set(20);
          height.set(20);
          radius.set(10);
          opacity.set(0.6);
          scale.set(1);
        }
      }
    },
    [visible, findNearestInteractive, cursorX, cursorY, width, height, radius, opacity, scale]
  );

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
