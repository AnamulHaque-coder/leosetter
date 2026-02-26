import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { Github } from "lucide-react";
import { useState, useEffect } from "react";

const spring = { type: "spring" as const, stiffness: 400, damping: 30 };

const Navbar = () => {
  const [scrolledPast, setScrolledPast] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolledPast(latest > 80);
  });

  const collapsed = scrolledPast && !hovered;

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0, filter: "blur(10px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      className="fixed top-3 left-0 right-0 z-50 flex justify-center"
    >
      <motion.div
        layout
        transition={spring}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex items-center bg-[hsl(220_20%_12%/0.55)] backdrop-blur-[40px] border border-[hsl(0_0%_100%/0.12)] shadow-[0_0_0_0.5px_hsl(0_0%_100%/0.06),0_8px_32px_hsl(0_0%_0%/0.3),0_2px_8px_hsl(0_0%_0%/0.2),inset_0_1px_0_hsl(0_0%_100%/0.08)] overflow-hidden"
        style={{ borderRadius: 24 }}
        animate={{
          paddingLeft: collapsed ? 10 : 14,
          paddingRight: collapsed ? 10 : 14,
          paddingTop: collapsed ? 7 : 10,
          paddingBottom: collapsed ? 7 : 10,
          gap: collapsed ? 8 : 12,
        }}
      >
        {/* Logo — always visible */}
        <motion.a
          layout="position"
          href="#"
          className="flex items-center rounded-[16px] font-semibold tracking-tight text-foreground hover:bg-[hsl(0_0%_100%/0.08)] transition-colors whitespace-nowrap"
          animate={{
            fontSize: collapsed ? 13 : 14,
            paddingLeft: collapsed ? 12 : 18,
            paddingRight: collapsed ? 12 : 18,
            paddingTop: collapsed ? 6 : 8,
            paddingBottom: collapsed ? 6 : 8,
          }}
          transition={spring}
        >
          Leo<span className="text-gradient">Setter</span>
        </motion.a>

        {/* Expanded content */}
        <AnimatePresence mode="popLayout">
          {!collapsed && (
             <>
              {/* Nav links */}
              <motion.div
                key="links"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={spring}
                className="hidden sm:flex items-center overflow-hidden"
              >
                <motion.a
                  href="#features"
                  className="px-4 py-2 rounded-[16px] text-sm text-[hsl(0_0%_100%/0.55)] hover:text-foreground hover:bg-[hsl(0_0%_100%/0.08)] transition-all whitespace-nowrap"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Features
                </motion.a>
                <motion.a
                  href="#how-it-works"
                  className="px-4 py-2 rounded-[16px] text-sm text-[hsl(0_0%_100%/0.55)] hover:text-foreground hover:bg-[hsl(0_0%_100%/0.08)] transition-all whitespace-nowrap"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  How it works
                </motion.a>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* GitHub button — always visible, shrinks when collapsed */}
        <motion.a
          layout="position"
          href="https://github.com/AHJ32/LeoSetter"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center rounded-[16px] font-medium text-foreground bg-[hsl(0_0%_100%/0.1)] hover:bg-[hsl(0_0%_100%/0.16)] transition-colors whitespace-nowrap"
          animate={{
            fontSize: collapsed ? 13 : 14,
            paddingLeft: collapsed ? 10 : 16,
            paddingRight: collapsed ? 10 : 16,
            paddingTop: collapsed ? 6 : 8,
            paddingBottom: collapsed ? 6 : 8,
            gap: collapsed ? 5 : 6,
          }}
          transition={spring}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          <Github className="w-4 h-4 flex-shrink-0" />
          <AnimatePresence mode="popLayout">
            {!collapsed && (
              <motion.span
                key="gh-text"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={spring}
                className="hidden sm:inline overflow-hidden"
              >
                GitHub
              </motion.span>
            )}
          </AnimatePresence>
        </motion.a>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
