import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 text-center">
      <div className="glass-card rounded-2xl max-w-4xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} LeoSetter. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <Link
            to="/support"
            className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Heart className="w-3.5 h-3.5" />
            Support Me
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
