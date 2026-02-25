import { motion } from "framer-motion";
import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0, filter: "blur(10px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl"
    >
      <div className="glass-strong rounded-2xl px-6 py-3 flex items-center justify-between">
        <a href="#" className="text-lg font-bold tracking-tight text-foreground">
          Meta<span className="text-gradient">Edit</span>
        </a>

        <div className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
          <motion.a href="#features" className="hover:text-foreground transition-colors" whileHover={{ y: -1 }}>Features</motion.a>
          <motion.a href="#how-it-works" className="hover:text-foreground transition-colors" whileHover={{ y: -1 }}>How it works</motion.a>
        </div>

        <motion.a
          href="https://github.com/your-username/metaedit"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <Github className="w-4 h-4" />
          <span className="hidden sm:inline">GitHub</span>
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
