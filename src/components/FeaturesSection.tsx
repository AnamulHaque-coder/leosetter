import { motion, useScroll, useTransform } from "framer-motion";
import { Eye, Pencil, Trash2, Lock, Cpu, FileImage } from "lucide-react";
import { useRef } from "react";

const features = [
  { icon: <Eye className="w-6 h-6" />, title: "View Metadata", description: "Inspect all EXIF, IPTC, and XMP data embedded in your images at a glance." },
  { icon: <Pencil className="w-6 h-6" />, title: "Edit Fields", description: "Modify any metadata field — from GPS coordinates to copyright info — with precision." },
  { icon: <Trash2 className="w-6 h-6" />, title: "Strip All Data", description: "Remove all metadata in one click to protect your privacy before sharing." },
  { icon: <Lock className="w-6 h-6" />, title: "Privacy First", description: "Everything runs locally. Your images never leave your machine." },
  { icon: <Cpu className="w-6 h-6" />, title: "Blazing Fast", description: "Optimized processing engine handles large batches without breaking a sweat." },
  { icon: <FileImage className="w-6 h-6" />, title: "Multi-Format", description: "Supports JPEG, TIFF, WebP, and more popular image formats." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  }),
};

const FeaturesSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const headingY = useTransform(scrollYProgress, [0, 1], ["20px", "-20px"]);

  return (
    <section id="features" ref={ref} className="relative pt-24 pb-32 px-6 snap-section">
      <div className="max-w-5xl mx-auto">
        <motion.div
          style={{ y: headingY }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-3xl sm:text-5xl font-bold tracking-tight mb-4"
          >
            Everything you <span className="text-gradient">need.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto"
          >
            A complete toolkit for managing image metadata, built with simplicity in mind.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03, 
                y: -4,
                transition: { type: "spring", stiffness: 400, damping: 25 } 
              }}
              className="glass-card rounded-2xl p-6 group cursor-default"
            >
              <motion.div
                className="w-12 h-12 rounded-xl glass flex items-center justify-center text-primary mb-4 group-hover:glow-primary transition-all"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
