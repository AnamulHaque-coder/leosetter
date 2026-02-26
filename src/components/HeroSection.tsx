import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Image, FileText, Zap } from "lucide-react";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const orbOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Parallax mesh gradient background */}
      <motion.div className="absolute inset-0 mesh-gradient" style={{ y: bgY }} />

      {/* Parallax floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-[100px] animate-float"
        style={{ scale: orbScale, opacity: orbOpacity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-accent/10 blur-[80px] animate-float"
        style={{ scale: orbScale, opacity: orbOpacity, animationDelay: '2s' }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-primary/5 blur-[60px] animate-float"
        style={{ scale: orbScale, opacity: orbOpacity, animationDelay: '4s' }}
      />

      <motion.div className="relative z-10 max-w-5xl mx-auto text-center" style={{ y: contentY }}>
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glass-card inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm text-muted-foreground">
            <Zap className="w-3.5 h-3.5 text-primary" />
            Open Source Image Metadata Tool
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
        >
          Edit image metadata
          <br />
          <motion.span
            className="text-gradient inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            effortlessly.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          View, edit, and strip EXIF, IPTC, and XMP metadata from your images. 
          Fast, private, and completely open source.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="https://github.com/AHJ32/LeoSetter"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-strong glow-primary rounded-2xl px-8 py-4 text-base font-semibold text-foreground flex items-center gap-2 transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 0 60px hsl(350 85% 62% / 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            Download
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="#features"
            className="glass-card rounded-2xl px-8 py-4 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn more
          </motion.a>
        </motion.div>

        {/* Glass demo card with parallax */}
        <motion.div
          initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ y: cardY }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="glass-strong rounded-3xl p-1">
            <div className="glass rounded-[1.25rem] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <motion.div className="w-3 h-3 rounded-full bg-destructive/60" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }} />
                <motion.div className="w-3 h-3 rounded-full bg-primary/40" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 0.2 }} />
                <motion.div className="w-3 h-3 rounded-full bg-accent/40" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 0.4 }} />
                <span className="ml-2 text-xs text-muted-foreground font-mono">metadata-editor</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: <Image className="w-5 h-5 text-primary" />, label: "Format", value: "JPEG / TIFF", delay: 1 },
                  { icon: <FileText className="w-5 h-5 text-accent" />, label: "EXIF Data", value: "10 fields found", delay: 1.15 },
                  { icon: <Zap className="w-5 h-5 text-primary" />, label: "Status", value: "Ready to edit", delay: 1.3 },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: item.delay }}
                  >
                    <MetaItem icon={item.icon} label={item.label} value={item.value} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const MetaItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <motion.div
    className="glass-card rounded-xl p-4 text-left"
    whileHover={{ scale: 1.03, borderColor: "hsl(220 20% 100% / 0.25)" }}
    transition={{ type: "spring", stiffness: 400, damping: 25 }}
  >
    <div className="mb-2">{icon}</div>
    <p className="text-xs text-muted-foreground mb-1">{label}</p>
    <p className="text-sm font-medium text-foreground">{value}</p>
  </motion.div>
);

export default HeroSection;
