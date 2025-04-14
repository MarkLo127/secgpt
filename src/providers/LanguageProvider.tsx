import React, { createContext, useState, useContext, useEffect } from 'react';

type Language = "en" | "zh";

type LanguageProviderProps = {
  children: React.ReactNode;
  defaultLanguage?: Language;
};

type LanguageProviderState = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    "home.title": "AI-Powered SEC Document Analysis",
    "home.subtitle": "Transforming Complex Financial Reporting with Advanced AI Technology",
    "home.description": "SECGPT leverages cutting-edge AI agents to simplify and accelerate the analysis of SEC documents, saving you valuable time and providing deep insights.",
    "home.cta": "Start Analyzing Documents",
    "home.features": "How SECGPT Works",
    "home.feature1.title": "AI-Powered Analysis",
    "home.feature1.description": "Our advanced AI agents intelligently parse and interpret complex SEC documents with unprecedented accuracy.",
    "home.feature2.title": "Comprehensive Scanning",
    "home.feature2.description": "Scan through multiple document types, from annual reports to insider trading forms, with ease and precision.",
    "home.feature3.title": "Intelligent Insights",
    "home.feature3.description": "Extract critical financial insights, trends, and potential risks in seconds, not hours.",
  },
  zh: {
    "home.title": "人工智能驱动的SEC文件分析",
    "home.subtitle": "利用先进AI技术转化复杂的财务报告",
    "home.description": "SECGPT运用尖端AI代理技术，简化并加速SEC文件分析，为您节省宝贵时间并提供深入洞察。",
    "home.cta": "开始分析文件",
    "home.features": "SECGPT工作原理",
    "home.feature1.title": "AI智能分析",
    "home.feature1.description": "我们先进的AI代理智能解析并准确解读复杂的SEC文件。",
    "home.feature2.title": "全面扫描",
    "home.feature2.description": "轻松精准地扫描多种文件类型，从年度报告到内部交易表格。",
    "home.feature3.title": "智能洞察",
    "home.feature3.description": "在几秒钟内提取关键财务见解、趋势和潜在风险。",
  }
};

const initialState: LanguageProviderState = {
  language: "en",
  setLanguage: () => null,
  t: (key: string) => key,
};

const LanguageProviderContext = createContext<LanguageProviderState>(initialState);

export function LanguageProvider({
  children,
  defaultLanguage = "en",
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem("language") as Language) || defaultLanguage
  );

  // Translator function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const value = {
    language,
    setLanguage: (language: Language) => {
      localStorage.setItem("language", language);
      setLanguage(language);
    },
    t,
  };

  return (
    <LanguageProviderContext.Provider value={value}>
      {children}
    </LanguageProviderContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext);
  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
