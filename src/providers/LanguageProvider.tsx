
import { createContext, useContext, useEffect, useState } from "react";

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
    "home.title": "SECGPT - AI Analysis for SEC Documents",
    "home.subtitle": "Advanced AI analysis of SEC filings for financial insights",
    "home.description": "SECGPT utilizes advanced AI technologies to analyze SEC documents, providing you with valuable insights and information extraction capabilities.",
    "home.features": "Features",
    "home.feature1.title": "Document Analysis",
    "home.feature1.description": "Analyze various SEC documents including 10-K, 10-Q, 8-K, and more.",
    "home.feature2.title": "Natural Language Queries",
    "home.feature2.description": "Ask questions about financial filings in plain language and get accurate responses.",
    "home.feature3.title": "Data Extraction",
    "home.feature3.description": "Extract specific financial data points from complex documents quickly.",
    "home.cta": "Get Started",
    "nav.home": "Home",
    "nav.analysis": "Analysis",
    "nav.language": "Language",
    "nav.theme": "Theme",
    "theme.light": "Light",
    "theme.dark": "Dark",
    "theme.system": "System",
    "language.english": "English",
    "language.chinese": "中文",
    "analysis.title": "SEC Document Analysis",
    "analysis.subtitle": "Analyze SEC documents for a specific company",
    "analysis.openai.label": "OpenAI API Key",
    "analysis.openai.placeholder": "Enter your OpenAI API key",
    "analysis.baseurl.label": "Base URL (Optional)",
    "analysis.baseurl.placeholder": "Enter custom base URL (optional)",
    "analysis.secapi.label": "SEC API Key",
    "analysis.secapi.placeholder": "Enter your SEC API key",
    "analysis.secapi.hint": "Get your SEC API key at https://sec-api.io",
    "analysis.ticker.label": "Stock Ticker",
    "analysis.ticker.placeholder": "E.g., AAPL, MSFT, GOOGL",
    "analysis.document.label": "Document Type",
    "analysis.document.placeholder": "Select document type",
    "analysis.document.category1": "Periodic Reports & Announcements",
    "analysis.document.category2": "Securities Issuance & Fundraising",
    "analysis.document.category3": "Other Listed Company Documents",
    "analysis.submit": "Analyze",
    "chat.placeholder": "Ask a question about the document...",
    "chat.start": "Start a conversation with SECGPT",
    "chat.send": "Send",
    "chat.loading": "Analyzing...",
    "chat.error": "Error processing your request",
    "chat.back": "Back to Home",
    "footer.rights": "All Rights Reserved",
  },
  zh: {
    "home.title": "SECGPT - SEC文件的AI分析",
    "home.subtitle": "為財務洞察提供SEC文件的高級AI分析",
    "home.description": "SECGPT利用先進的AI技術分析SEC文件，為您提供有價值的見解和信息提取能力。",
    "home.features": "功能特點",
    "home.feature1.title": "文件分析",
    "home.feature1.description": "分析各種SEC文件，包括10-K、10-Q、8-K等。",
    "home.feature2.title": "自然語言查詢",
    "home.feature2.description": "用普通語言詢問有關財務申報的問題，並獲得準確的回應。",
    "home.feature3.title": "數據提取",
    "home.feature3.description": "快速從複雜文件中提取特定財務數據點。",
    "home.cta": "開始使用",
    "nav.home": "首頁",
    "nav.analysis": "分析",
    "nav.language": "語言",
    "nav.theme": "主題",
    "theme.light": "亮色",
    "theme.dark": "暗色",
    "theme.system": "系統",
    "language.english": "English",
    "language.chinese": "中文",
    "analysis.title": "SEC文件分析",
    "analysis.subtitle": "為特定公司分析SEC文件",
    "analysis.openai.label": "OpenAI API密鑰",
    "analysis.openai.placeholder": "輸入您的OpenAI API密鑰",
    "analysis.baseurl.label": "基礎URL（可選）",
    "analysis.baseurl.placeholder": "輸入自定義基礎URL（可選）",
    "analysis.secapi.label": "SEC API密鑰",
    "analysis.secapi.placeholder": "輸入您的SEC API密鑰",
    "analysis.secapi.hint": "在https://sec-api.io獲取您的SEC API密鑰",
    "analysis.ticker.label": "股票代碼",
    "analysis.ticker.placeholder": "例如：AAPL、MSFT、GOOGL",
    "analysis.document.label": "文件類型",
    "analysis.document.placeholder": "選擇文件類型",
    "analysis.document.category1": "定期報告與公告文件",
    "analysis.document.category2": "證券發行與募集文件",
    "analysis.document.category3": "其他上市公司相關文件",
    "analysis.submit": "分析",
    "chat.placeholder": "詢問有關文件的問題...",
    "chat.start": "開始與SECGPT對話",
    "chat.send": "發送",
    "chat.loading": "分析中...",
    "chat.error": "處理您的請求時出錯",
    "chat.back": "返回首頁",
    "footer.rights": "版權所有",
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
