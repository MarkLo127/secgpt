import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/providers/LanguageProvider";

const CallToActionSection = () => {
  const { t, language } = useLanguage();

  return <section className="py-20 text-center">
    <div className="container px-4 md:px-6">
      <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tech-text-gradient mb-6">
          {t("home.title")}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t("home.description")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/analysis">
            <Button size="lg" className="bg-gradient-to-r from-secgpt-blue to-secgpt-accent hover:from-secgpt-accent hover:to-secgpt-blue transition-all duration-300">
              {t("home.cta")}
            </Button>
          </Link>
          <Link to="/chat">
          </Link>
        </div>
      </div>
    </div>
  </section>;
};

export default CallToActionSection;
