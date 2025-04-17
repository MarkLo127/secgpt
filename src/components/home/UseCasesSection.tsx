
import { Users, Building, CheckCircle } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";

const UseCasesSection = () => {
  const { t, language } = useLanguage();
  
  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/95">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tech-text-gradient mb-4">
            {t("home.use_cases.title")}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {t("home.use_cases.description")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Investment Firms */}
          <div className="glass-card p-8 flex flex-col items-center text-center space-y-4 hover:shadow-md transition-all duration-300 h-full">
            <div className="h-12 w-12 rounded-full bg-secgpt-blue/10 flex items-center justify-center mb-4">
              <Building className="h-6 w-6 text-secgpt-blue" />
            </div>
            <h3 className="text-xl font-semibold">{t("home.use_cases.case1.title")}</h3>
            <p className="text-muted-foreground">
              {t("home.use_cases.case1.description")}
            </p>
            <ul className="text-left w-full space-y-2 mt-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-secgpt-blue mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{t("home.use_cases.case1.point1")}</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-secgpt-blue mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{t("home.use_cases.case1.point2")}</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-secgpt-blue mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{t("home.use_cases.case1.point3")}</span>
              </li>
            </ul>
          </div>
          
          {/* Financial Analysts */}
          <div className="glass-card p-8 flex flex-col items-center text-center space-y-4 hover:shadow-md transition-all duration-300 h-full">
            <div className="h-12 w-12 rounded-full bg-secgpt-blue/10 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-secgpt-blue" />
            </div>
            <h3 className="text-xl font-semibold">{t("home.use_cases.case2.title")}</h3>
            <p className="text-muted-foreground">
              {t("home.use_cases.case2.description")}
            </p>
            <ul className="text-left w-full space-y-2 mt-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-secgpt-blue mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{t("home.use_cases.case2.point1")}</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-secgpt-blue mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{t("home.use_cases.case2.point2")}</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-secgpt-blue mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{t("home.use_cases.case2.point3")}</span>
              </li>
            </ul>
          </div>
          
          {/* Compliance Teams */}
          <div className="glass-card p-8 flex flex-col items-center text-center space-y-4 hover:shadow-md transition-all duration-300 h-full">
            <div className="h-12 w-12 rounded-full bg-secgpt-blue/10 flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-secgpt-blue" />
            </div>
            <h3 className="text-xl font-semibold">{t("home.use_cases.case3.title")}</h3>
            <p className="text-muted-foreground">
              {t("home.use_cases.case3.description")}
            </p>
            <ul className="text-left w-full space-y-2 mt-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-secgpt-blue mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{t("home.use_cases.case3.point1")}</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-secgpt-blue mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{t("home.use_cases.case3.point2")}</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-secgpt-blue mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{t("home.use_cases.case3.point3")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
