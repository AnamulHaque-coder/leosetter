import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { Github } from "lucide-react";
import { useState, useEffect } from "react";

const spring = { type: "spring" as const, stiffness: 400, damping: 30 };

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setCollapsed(latest > 80);
  });

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0, filter: "blur(10px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      className="fixed top-3 left-1/2 -translate-x-1/2 z-50"
    >
      <motion.div
        layout
        transition={spring}
        className="relative flex items-center bg-[hsl(0_0%_0%/0.85)] backdrop-blur-2xl shadow-[0_0_0_0.5px_hsl(0_0%_100%/0.08),0_4px_24px_hsl(0_0%_0%/0.4),0_1px_3px_hsl(0_0%_0%/0.3)] overflow-hidden"
        style={{ borderRadius: 22 }}
        animate={{
          paddingLeft: collapsed ? 6 : 6,
          paddingRight: collapsed ? 6 : 6,
          paddingTop: collapsed ? 4 : 6,
          paddingBottom: collapsed ? 4 : 6,
          gap: collapsed ? 2 : 4,
        }}
      >
        {/* Logo — always visible */}
        <motion.a
          layout="position"
          href="#"
          className="flex items-center rounded-[16px] font-semibold tracking-tight text-foreground hover:bg-[hsl(0_0%_100%/0.08)] transition-colors whitespace-nowrap"
          animate={{
            fontSize: collapsed ? 12 : 13,
            paddingLeft: collapsed ? 10 : 16,
            paddingRight: collapsed ? 10 : 16,
            paddingTop: collapsed ? 4 : 6,
            paddingBottom: collapsed ? 4 : 6,
          }}
          transition={spring}
        >
          Leo<span className="text-gradient">Setter</span>
        </motion.a>

        {/* Expanded content */}
        <AnimatePresence mode="popLayout">
          {!collapsed && (
            <>
              {/* Separator dot */}
              <motion.div
                key="dot1"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={spring}
                className="w-[3px] h-[3px] rounded-full bg-[hsl(0_0%_100%/0.2)] hidden sm:block flex-shrink-0"
              />

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
                  className="px-3 py-1.5 rounded-[16px] text-[13px] text-[hsl(0_0%_100%/0.55)] hover:text-foreground hover:bg-[hsl(0_0%_100%/0.08)] transition-all whitespace-nowrap"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Features
                </motion.a>
                <motion.a
                  href="#how-it-works"
                  className="px-3 py-1.5 rounded-[16px] text-[13px] text-[hsl(0_0%_100%/0.55)] hover:text-foreground hover:bg-[hsl(0_0%_100%/0.08)] transition-all whitespace-nowrap"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  How it works
                </motion.a>
              </motion.div>

              {/* Separator dot */}
              <motion.div
                key="dot2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={spring}
                className="w-[3px] h-[3px] rounded-full bg-[hsl(0_0%_100%/0.2)] flex-shrink-0"
              />
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
            fontSize: collapsed ? 12 : 13,
            paddingLeft: collapsed ? 8 : 14,
            paddingRight: collapsed ? 8 : 14,
            paddingTop: collapsed ? 4 : 6,
            paddingBottom: collapsed ? 4 : 6,
            gap: collapsed ? 4 : 6,
          }}
          transition={spring}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          <Github className="w-3.5 h-3.5 flex-shrink-0" />
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
