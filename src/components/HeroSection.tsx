import { motion } from "framer-motion";
import { ArrowRight, Image, FileText, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-accent/10 blur-[80px] animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glass-card inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm text-muted-foreground">
            <Zap className="w-3.5 h-3.5 text-primary" />
            Open Source Image Metadata Tool
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
        >
          Edit image metadata
          <br />
          <span className="text-gradient">effortlessly.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          View, edit, and strip EXIF, IPTC, and XMP metadata from your images. 
          Fast, private, and completely open source.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://github.com/your-username/metaedit"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-strong glow-primary rounded-2xl px-8 py-4 text-base font-semibold text-foreground flex items-center gap-2 transition-all hover:scale-105"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#features"
            className="glass-card rounded-2xl px-8 py-4 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Learn more
          </a>
        </motion.div>

        {/* Glass demo card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="glass-strong rounded-3xl p-1">
            <div className="glass rounded-[1.25rem] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-primary/40" />
                <div className="w-3 h-3 rounded-full bg-accent/40" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">metadata-editor</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <MetaItem icon={<Image className="w-5 h-5 text-primary" />} label="Format" value="JPEG / PNG / TIFF" />
                <MetaItem icon={<FileText className="w-5 h-5 text-accent" />} label="EXIF Data" value="42 fields found" />
                <MetaItem icon={<Zap className="w-5 h-5 text-primary" />} label="Status" value="Ready to edit" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const MetaItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="glass-card rounded-xl p-4 text-left">
    <div className="mb-2">{icon}</div>
    <p className="text-xs text-muted-foreground mb-1">{label}</p>
    <p className="text-sm font-medium text-foreground">{value}</p>
  </div>
);

export default HeroSection;
