
import { Users, Building, CheckCircle } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";

const UseCasesSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-gradient-to-b from-background to-secgpt-blue/5">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tech-text-gradient mb-4">
            {t("home.features")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {t("home.description")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="glass-card p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-secgpt-blue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">{t("home.feature1.title")}</h3>
                <p className="text-muted-foreground mb-4">
                  {t("home.feature1.description")}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secgpt-success" />
                    <span>{t("home.feature1.title")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secgpt-success" />
                    <span>{t("home.feature2.title")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secgpt-success" />
                    <span>{t("home.feature3.title")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Building className="h-6 w-6 text-secgpt-blue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">{t("home.feature2.title")}</h3>
                <p className="text-muted-foreground mb-4">
                  {t("home.feature2.description")}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secgpt-success" />
                    <span>{t("home.feature1.title")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secgpt-success" />
                    <span>{t("home.feature2.title")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secgpt-success" />
                    <span>{t("home.feature3.title")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
