import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-background overflow-x-hidden w-full max-w-[100vw] animated-bg">
        <AnimatedBackground />
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CtaSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
