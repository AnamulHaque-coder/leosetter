import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { step: "01", title: "Open your image", description: "Drag & drop or select any supported image file." },
  { step: "02", title: "Inspect & edit", description: "Browse all metadata fields and modify what you need." },
  { step: "03", title: "Export", description: "Save the updated image with your changes applied instantly." },
];

const HowItWorksSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const meshY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="how-it-works" ref={ref} className="relative py-24 px-6 overflow-hidden">
      <motion.div className="absolute inset-0 mesh-gradient opacity-50" style={{ y: meshY }} />
      
      {/* Parallax decorative orb */}
      <motion.div
        className="absolute -left-20 top-1/2 w-40 h-40 rounded-full bg-accent/8 blur-[80px]"
        style={{ y: useTransform(scrollYProgress, [0, 1], [40, -40]) }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Simple as <span className="text-gradient">1-2-3.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.7, delay: i * 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 400, damping: 25 } }}
              className="glass-card rounded-2xl p-6 text-center cursor-default"
            >
              <motion.span
                className="text-4xl font-extrabold text-gradient inline-block"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.2, type: "spring", stiffness: 200 }}
              >
                {s.step}
              </motion.span>
              <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
