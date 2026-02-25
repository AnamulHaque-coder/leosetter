import { motion } from "framer-motion";

const steps = [
  { step: "01", title: "Open your image", description: "Drag & drop or select any supported image file." },
  { step: "02", title: "Inspect & edit", description: "Browse all metadata fields and modify what you need." },
  { step: "03", title: "Export", description: "Save the updated image with your changes applied instantly." },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="relative py-24 px-6">
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <span className="text-4xl font-extrabold text-gradient">{s.step}</span>
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
