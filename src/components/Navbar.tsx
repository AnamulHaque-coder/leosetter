import { motion } from "framer-motion";
import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0, filter: "blur(10px)", scaleX: 0.8 }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)", scaleX: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      className="fixed top-3 left-1/2 -translate-x-1/2 z-50"
    >
      {/* Dynamic Island-style notch */}
      <div className="relative flex items-center gap-1 bg-[hsl(0_0%_0%/0.85)] backdrop-blur-2xl rounded-[22px] px-1.5 py-1.5 shadow-[0_0_0_0.5px_hsl(0_0%_100%/0.08),0_4px_24px_hsl(0_0%_0%/0.4),0_1px_3px_hsl(0_0%_0%/0.3)]">
        {/* Logo pill */}
        <a
          href="#"
          className="flex items-center px-4 py-1.5 rounded-[16px] text-[13px] font-semibold tracking-tight text-foreground hover:bg-[hsl(0_0%_100%/0.08)] transition-colors"
        >
          Leo<span className="text-gradient">Setter</span>
        </a>

        {/* Separator dot */}
        <div className="w-[3px] h-[3px] rounded-full bg-[hsl(0_0%_100%/0.2)] hidden sm:block" />

        {/* Nav links */}
        <div className="hidden sm:flex items-center">
          <motion.a
            href="#features"
            className="px-3 py-1.5 rounded-[16px] text-[13px] text-[hsl(0_0%_100%/0.55)] hover:text-foreground hover:bg-[hsl(0_0%_100%/0.08)] transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Features
          </motion.a>
          <motion.a
            href="#how-it-works"
            className="px-3 py-1.5 rounded-[16px] text-[13px] text-[hsl(0_0%_100%/0.55)] hover:text-foreground hover:bg-[hsl(0_0%_100%/0.08)] transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            How it works
          </motion.a>
        </div>

        {/* Separator dot */}
        <div className="w-[3px] h-[3px] rounded-full bg-[hsl(0_0%_100%/0.2)]" />

        {/* GitHub button */}
        <motion.a
          href="https://github.com/AHJ32/LeoSetter"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-[16px] text-[13px] font-medium text-foreground bg-[hsl(0_0%_100%/0.1)] hover:bg-[hsl(0_0%_100%/0.16)] transition-colors"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          <Github className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">GitHub</span>
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
