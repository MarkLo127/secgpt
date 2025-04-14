
import React from "react";
import { useLanguage } from "@/providers/LanguageProvider";

const AnalysisFooterNote = () => {
  const { t, language } = useLanguage();
  
  return (
    <div className="mt-6 text-center text-sm text-muted-foreground animate-fade-in">
      <p>
        {language === "zh" 
          ? "所有API密鑰都安全地存儲在您瀏覽器的會話存儲中，絕不會發送到我們的服務器。"
          : "All API keys are securely stored in your browser's session storage and will never be sent to our servers."
        }
      </p>
    </div>
  );
};

export default AnalysisFooterNote;
