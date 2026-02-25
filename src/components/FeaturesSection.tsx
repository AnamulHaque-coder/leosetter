import { motion } from "framer-motion";
import { Eye, Pencil, Trash2, Lock, Cpu, FileImage } from "lucide-react";

const features = [
  {
    icon: <Eye className="w-6 h-6" />,
    title: "View Metadata",
    description: "Inspect all EXIF, IPTC, and XMP data embedded in your images at a glance.",
  },
  {
    icon: <Pencil className="w-6 h-6" />,
    title: "Edit Fields",
    description: "Modify any metadata field — from GPS coordinates to copyright info — with precision.",
  },
  {
    icon: <Trash2 className="w-6 h-6" />,
    title: "Strip All Data",
    description: "Remove all metadata in one click to protect your privacy before sharing.",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Privacy First",
    description: "Everything runs locally. Your images never leave your machine.",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Blazing Fast",
    description: "Optimized processing engine handles large batches without breaking a sweat.",
  },
  {
    icon: <FileImage className="w-6 h-6" />,
    title: "Multi-Format",
    description: "Supports JPEG, PNG, TIFF, WebP, and more popular image formats.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Everything you <span className="text-gradient">need.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A complete toolkit for managing image metadata, built with simplicity in mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 group"
            >
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-primary mb-4 group-hover:glow-primary transition-all">
                {feature.icon}
              </div>
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
