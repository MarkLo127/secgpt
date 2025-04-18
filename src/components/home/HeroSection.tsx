
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secgpt-accent/20 via-background to-background"></div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="inline-block p-2 px-3 bg-secgpt-blue/10 rounded-full mb-4 animate-fade-in">
            <span className="text-secgpt-blue font-medium text-sm">{t("home.title")}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tech-text-gradient animate-fade-in text-center lg:text-5xl">
            SECGPT - {t("home.subtitle")}
          </h1>
          <p className="text-xl text-muted-foreground md:text-2xl max-w-[800px] animate-fade-in text-center">
            {t("home.description")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 animate-slide-in">
            <Link to="/analysis">
              <Button size="lg" className="bg-gradient-to-r from-secgpt-blue to-secgpt-accent hover:from-secgpt-accent hover:to-secgpt-blue transition-all duration-300 text-center">
                {t("home.cta")}
              </Button>
            </Link>
            <Link to="/chat">
              
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
