import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import IPadCursor from "@/components/IPadCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden animated-bg">
      <AnimatedBackground />
      <IPadCursor />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
