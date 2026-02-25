import { motion } from "framer-motion";
import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl"
    >
      <div className="glass-strong rounded-2xl px-6 py-3 flex items-center justify-between">
        <a href="#" className="text-lg font-bold tracking-tight text-foreground">
          Meta<span className="text-gradient">Edit</span>
        </a>

        <div className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-foreground transition-colors">How it works</a>
        </div>

        <a
          href="https://github.com/your-username/metaedit"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-xl"
        >
          <Github className="w-4 h-4" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
