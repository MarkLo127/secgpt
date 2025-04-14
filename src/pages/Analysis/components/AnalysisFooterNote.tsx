
import React from "react";
import { useLanguage } from "@/providers/LanguageProvider";

const AnalysisFooterNote = () => {
  const { t, language } = useLanguage();
  
  return (
    <div className="mt-6 text-center text-sm text-muted-foreground animate-fade-in">
      <p>
        {language === "zh" 
          ? "所有API密钥都安全地存储在您浏览器的会话存储中，绝不会发送到我们的服务器。"
          : "All API keys are securely stored in your browser's session storage and will never be sent to our servers."
        }
      </p>
    </div>
  );
};

export default AnalysisFooterNote;
