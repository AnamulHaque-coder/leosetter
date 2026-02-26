import { motion, useScroll, useTransform } from "framer-motion";

const AnimatedBackground = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <motion.div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ y, height: "130vh", willChange: "transform" }}
    >
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background: [
            "radial-gradient(ellipse 80% 60% at 20% 30%, hsl(350 80% 50% / 0.18) 0%, transparent 60%)",
            "radial-gradient(ellipse 70% 50% at 75% 15%, hsl(280 70% 50% / 0.14) 0%, transparent 55%)",
            "radial-gradient(ellipse 60% 70% at 60% 75%, hsl(30 90% 55% / 0.12) 0%, transparent 55%)",
            "radial-gradient(ellipse 50% 40% at 40% 60%, hsl(320 75% 55% / 0.1) 0%, transparent 50%)",
          ].join(", "),
          animation: "meshShift 20s ease-in-out infinite alternate",
          willChange: "transform, opacity",
        }}
      />
    </motion.div>
  );
};

export default AnimatedBackground;
