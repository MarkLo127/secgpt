
import { useLanguage } from "@/providers/LanguageProvider";

interface AnalysisHeaderProps {
  className?: string;
}

const AnalysisHeader = ({ className }: AnalysisHeaderProps) => {
  const { t } = useLanguage();
  
  return (
    <div className={`mb-8 text-center ${className}`}>
      <h1 className="text-3xl md:text-4xl font-bold mb-3 tech-text-gradient animate-fade-in">
        {t("analysis.title")}
      </h1>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in">
        {t("analysis.subtitle")}
      </p>
    </div>
  );
};

export default AnalysisHeader;
