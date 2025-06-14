
import { Upload, Cpu, Layers } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";
const HowItWorksSection = () => {
  const {
    t
  } = useLanguage();
  return <section className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/70 to-background"></div>
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tech-text-gradient mb-4">
            {t("home.how_it_works.title")}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {t("home.how_it_works.desc_short")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-secgpt-blue via-secgpt-accent to-secgpt-blue transform -translate-y-1/2 z-0"></div>
          
          {/* Step 1 */}
          <div className="glass-card p-8 flex flex-col items-center text-center space-y-4 relative z-10 hover:scale-105 transition-transform duration-300 group">
            <div className="h-16 w-16 rounded-full bg-secgpt-blue/20 flex items-center justify-center mb-4 relative animate-bounce-in">
              <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-secgpt-blue text-white flex items-center justify-center text-sm font-bold text-center">1</span>
              <Upload className="h-8 w-8 text-secgpt-blue transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <h3 className="text-xl font-semibold text-center">{t("home.how_it_works.step1.title")}</h3>
            <p className="text-muted-foreground text-center">{t("home.how_it_works.step1.description")}</p>
            
          </div>

          {/* Step 2 */}
          <div className="glass-card p-8 flex flex-col items-center text-center space-y-4 relative z-10 hover:scale-105 transition-transform duration-300 group">
            <div className="h-16 w-16 rounded-full bg-secgpt-blue/20 flex items-center justify-center mb-4 relative animate-bounce-in [animation-delay:0.2s]">
              <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-secgpt-blue text-white flex items-center justify-center text-sm font-bold text-center">2</span>
              <Cpu className="h-8 w-8 text-secgpt-blue transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <h3 className="text-xl font-semibold text-center">{t("home.how_it_works.step2.title")}</h3>
            <p className="text-muted-foreground text-center">{t("home.how_it_works.step2.description")}</p>
            
          </div>

          {/* Step 3 */}
          <div className="glass-card p-8 flex flex-col items-center text-center space-y-4 relative z-10 hover:scale-105 transition-transform duration-300 group">
            <div className="h-16 w-16 rounded-full bg-secgpt-blue/20 flex items-center justify-center mb-4 relative animate-bounce-in [animation-delay:0.4s]">
              <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-secgpt-blue text-white flex items-center justify-center text-sm font-bold text-center">3</span>
              <Layers className="h-8 w-8 text-secgpt-blue transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <h3 className="text-xl font-semibold text-center">{t("home.how_it_works.step3.title")}</h3>
            <p className="text-muted-foreground text-center">{t("home.how_it_works.step3.description")}</p>
            
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorksSection;
