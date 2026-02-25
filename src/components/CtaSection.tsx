import { motion, useScroll, useTransform } from "framer-motion";
import { Github, ArrowRight } from "lucide-react";
import { useRef } from "react";

const CtaSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          style={{ scale, opacity }}
          className="glass-strong glow-primary rounded-3xl p-10 sm:p-14 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          >
            Ready to take control of your metadata?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-muted-foreground mb-8 max-w-lg mx-auto"
          >
            Star the repo, contribute, or just start using it. It's free and open source forever.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="https://github.com/AHJ32/LeoSetter"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glow-primary rounded-2xl px-8 py-4 font-semibold text-foreground flex items-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: "0 0 60px hsl(350 85% 62% / 0.35)" }}
              whileTap={{ scale: 0.97 }}
            >
              <Github className="w-5 h-5" />
              View on GitHub
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
