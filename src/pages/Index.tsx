
import { useLanguage } from "@/providers/LanguageProvider";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { FileText, Search, BarChart, Brain } from "lucide-react";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secgpt-accent/20 via-background to-background"></div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h1 className="text-4xl md:text-6xl font-bold tech-text-gradient animate-fade-in">
                {t("home.title")}
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl max-w-[800px] animate-fade-in">
                {t("home.subtitle")}
              </p>
              <p className="text-lg text-muted-foreground max-w-[600px] animate-fade-in">
                {t("home.description")}
              </p>
              <div className="animate-slide-in">
                <Link to="/analysis">
                  <Button size="lg" className="mt-6 bg-gradient-to-r from-secgpt-blue to-secgpt-accent hover:from-secgpt-accent hover:to-secgpt-blue">
                    {t("home.cta")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-background/50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tech-text-gradient">
              {t("home.features")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1: AI-Powered Analysis */}
              <div className="glass-card p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t("home.feature1.title")}</h3>
                <p className="text-muted-foreground">{t("home.feature1.description")}</p>
              </div>

              {/* Feature 2: Comprehensive Document Scanning */}
              <div className="glass-card p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t("home.feature2.title")}</h3>
                <p className="text-muted-foreground">{t("home.feature2.description")}</p>
              </div>

              {/* Feature 3: Intelligent Insights */}
              <div className="glass-card p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t("home.feature3.title")}</h3>
                <p className="text-muted-foreground">{t("home.feature3.description")}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
