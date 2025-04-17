
import { Clock, Shield, Award } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";

const KeyBenefitsSection = () => {
  const {
    t
  } = useLanguage();
  
  return (
    <section className="py-16 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-secgpt-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t("home.benefit1.title") || "Time Efficiency"}</h3>
            <p className="text-muted-foreground">{t("home.benefit1.description") || "Save hours of manual analysis with instant AI-powered insights from complex financial documents."}</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-secgpt-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t("home.benefit2.title") || "Risk Reduction"}</h3>
            <p className="text-muted-foreground">{t("home.benefit2.description") || "Identify potential red flags and compliance issues that might be missed in traditional analysis."}</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-secgpt-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t("home.benefit3.title") || "Competitive Edge"}</h3>
            <p className="text-muted-foreground">{t("home.benefit3.description") || "Make better-informed investment decisions with deeper insights than traditional analysis tools provide."}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefitsSection;
