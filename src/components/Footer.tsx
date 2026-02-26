import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 text-center">
      <div className="glass-card rounded-2xl max-w-4xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} LeoSetter. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/AHJ32/LeoSetter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <Link
            to="/support"
            className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Heart className="w-3.5 h-3.5" />
            Support Me
          </Link>
        </div>
      </div>
      <p className="text-xs text-muted-foreground/50 mt-4">
        Special thanks to{" "}
        <a href="https://ready.bd/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/70 font-medium underline hover:text-muted-foreground transition-colors">ready.bd</a>
      </p>
    </footer>
  );
};

export default Footer;
