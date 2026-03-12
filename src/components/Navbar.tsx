import { motion, AnimatePresence } from "framer-motion";
import { Github, User, Heart } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [scrolledPast, setScrolledPast] = useState(false);
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const rafRef = useRef<number>(0);

  const handleScroll = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      setScrolledPast(window.scrollY > 80);
      rafRef.current = 0;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  const collapsed = scrolledPast && !hovered;

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0, filter: "blur(10px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      className="fixed top-3 left-0 right-0 z-50 flex justify-center"
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex items-center bg-[hsl(220_20%_12%/0.55)] backdrop-blur-[40px] border border-[hsl(0_0%_100%/0.12)] shadow-[0_0_0_0.5px_hsl(0_0%_100%/0.06),0_8px_32px_hsl(0_0%_0%/0.3),0_2px_8px_hsl(0_0%_0%/0.2),inset_0_1px_0_hsl(0_0%_100%/0.08)] overflow-hidden rounded-[24px] will-change-[padding,gap]"
        style={{
          padding: collapsed ? "6px 8px" : "10px 14px",
          gap: collapsed ? 6 : 12,
          transition: "padding 0.25s cubic-bezier(0.4, 0, 0.2, 1), gap 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Logo — always visible */}
        <a
          href="#"
          className="flex items-center rounded-[16px] font-semibold tracking-tight text-foreground hover:bg-[hsl(0_0%_100%/0.08)] whitespace-nowrap will-change-[font-size,padding]"
          style={{
            fontSize: collapsed ? 13 : 14,
            padding: collapsed ? "6px 12px" : "8px 18px",
            transition: "font-size 0.25s cubic-bezier(0.4, 0, 0.2, 1), padding 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          Leo<span className="text-gradient">Setter</span>
        </a>

        {/* Expanded content */}
        <AnimatePresence mode="popLayout">
          {!collapsed && (
            <motion.div
              key="links"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="hidden sm:flex items-center overflow-hidden"
            >
              <a
                href="#features"
                className="px-4 py-2 rounded-[16px] text-sm text-[hsl(0_0%_100%/0.55)] hover:text-foreground hover:bg-[hsl(0_0%_100%/0.08)] transition-all whitespace-nowrap"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="px-4 py-2 rounded-[16px] text-sm text-[hsl(0_0%_100%/0.55)] hover:text-foreground hover:bg-[hsl(0_0%_100%/0.08)] transition-all whitespace-nowrap"
              >
                How it works
              </a>
              <button
                onClick={() => navigate('/about')}
                className="flex items-center gap-1.5 px-4 py-2 rounded-[16px] text-sm text-[hsl(0_0%_100%/0.55)] hover:text-foreground hover:bg-[hsl(0_0%_100%/0.08)] transition-all whitespace-nowrap"
              >
                <User className="w-3.5 h-3.5" />
                About
              </button>
              <button
                onClick={() => navigate('/support')}
                className="flex items-center gap-1.5 px-4 py-2 rounded-[16px] text-sm text-[hsl(0_0%_100%/0.55)] hover:text-foreground hover:bg-[hsl(0_0%_100%/0.08)] transition-all whitespace-nowrap"
              >
                <Heart className="w-3.5 h-3.5" />
                Support
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Collapsed icon buttons */}
        <AnimatePresence mode="popLayout">
          {collapsed && (
            <motion.div
              key="icons"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-center gap-1 overflow-hidden"
            >
              <button
                onClick={() => navigate('/about')}
                className="p-2 rounded-[12px] text-[hsl(0_0%_100%/0.55)] hover:text-foreground hover:bg-[hsl(0_0%_100%/0.08)] transition-all"
                title="About"
              >
                <User className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('/support')}
                className="p-2 rounded-[12px] text-[hsl(0_0%_100%/0.55)] hover:text-foreground hover:bg-[hsl(0_0%_100%/0.08)] transition-all"
                title="Support"
              >
                <Heart className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* GitHub button */}
        <a
          href="https://github.com/AHJ32/LeoSetter"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center rounded-[16px] font-medium text-foreground bg-[hsl(0_0%_100%/0.1)] hover:bg-[hsl(0_0%_100%/0.16)] transition-colors whitespace-nowrap will-change-[font-size,padding]"
          style={{
            fontSize: collapsed ? 13 : 14,
            padding: collapsed ? "6px 12px" : "8px 16px",
            gap: 6,
            transition: "font-size 0.25s cubic-bezier(0.4, 0, 0.2, 1), padding 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <Github className="w-4 h-4 flex-shrink-0" />
          <AnimatePresence mode="popLayout">
            {!collapsed && (
              <motion.span
                key="gh-text"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                className="hidden sm:inline overflow-hidden"
              >
                GitHub
              </motion.span>
            )}
          </AnimatePresence>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
