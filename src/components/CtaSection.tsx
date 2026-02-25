import { motion } from "framer-motion";
import { Github, ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong glow-primary rounded-3xl p-10 sm:p-14 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Ready to take control of your metadata?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Star the repo, contribute, or just start using it. It's free and open source forever.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/your-username/metaedit"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glow-primary rounded-2xl px-8 py-4 font-semibold text-foreground flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <Github className="w-5 h-5" />
              View on GitHub
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
