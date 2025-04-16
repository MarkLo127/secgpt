
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/providers/LanguageProvider";
import { SparklesIcon, BrainCogIcon, RocketIcon } from "lucide-react";

const CallToActionSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secgpt-blue/5 to-background -z-10"></div>
      
      {/* Animated shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-secgpt-blue/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secgpt-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container px-4 md:px-6">
        <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto border border-secgpt-blue/20 hover:border-secgpt-blue/30 transition-all duration-300 hover:shadow-lg">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <BrainCogIcon className="h-16 w-16 text-secgpt-blue animate-pulse" />
              <SparklesIcon className="h-6 w-6 text-secgpt-accent absolute -top-2 -right-2 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold tech-text-gradient mb-6 animate-fade-in">
            {t("home.title")}
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t("home.description")}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/analysis" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-secgpt-blue to-secgpt-accent hover:from-secgpt-accent hover:to-secgpt-blue transition-all duration-300 group"
              >
                <RocketIcon className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                {t("home.cta")}
              </Button>
            </Link>
            <Link to="/chat">
            </Link>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 text-sm">
            <div className="flex items-center space-x-2 p-3 rounded-lg bg-secgpt-blue/10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="h-8 w-8 rounded-full bg-secgpt-blue/20 flex items-center justify-center">
                <SparklesIcon className="h-4 w-4 text-secgpt-blue" />
              </div>
              <span className="text-secgpt-blue font-medium">{t("home.how_it_works.step1.title")}</span>
            </div>
            <div className="flex items-center space-x-2 p-3 rounded-lg bg-secgpt-blue/10 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="h-8 w-8 rounded-full bg-secgpt-blue/20 flex items-center justify-center">
                <BrainCogIcon className="h-4 w-4 text-secgpt-blue" />
              </div>
              <span className="text-secgpt-blue font-medium">{t("home.how_it_works.step2.title")}</span>
            </div>
            <div className="flex items-center space-x-2 p-3 rounded-lg bg-secgpt-blue/10 animate-fade-in" style={{ animationDelay: '1s' }}>
              <div className="h-8 w-8 rounded-full bg-secgpt-blue/20 flex items-center justify-center">
                <RocketIcon className="h-4 w-4 text-secgpt-blue" />
              </div>
              <span className="text-secgpt-blue font-medium">{t("home.how_it_works.step3.title")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
