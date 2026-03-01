import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  useEffect(() => {
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
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
