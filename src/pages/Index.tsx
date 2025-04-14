
import { useLanguage } from "@/providers/LanguageProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import KeyBenefitsSection from "@/components/home/KeyBenefitsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import KeyFeaturesSection from "@/components/home/KeyFeaturesSection";
import UseCasesSection from "@/components/home/UseCasesSection";
import CallToActionSection from "@/components/home/CallToActionSection";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        <KeyBenefitsSection />
        <HowItWorksSection />
        <KeyFeaturesSection />
        <UseCasesSection />
        <CallToActionSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
