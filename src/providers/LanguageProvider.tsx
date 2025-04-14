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
    "home.title": "SECGPT - AI-Powered SEC Document Analysis",
    "home.subtitle": "Transforming Complex Financial Documents into Actionable Insights",
    "home.description": "Leverage cutting-edge AI technology to instantly analyze and extract critical information from SEC filings, saving you time and providing deep financial intelligence.",
    "home.cta": "Start Analyzing",
    "home.how_it_works.title": "How SECGPT Works",
    "home.how_it_works.step1.title": "Upload Documents",
    "home.how_it_works.step1.description": "Easily upload SEC documents from various sources and formats.",
    "home.how_it_works.step2.title": "AI Analysis",
    "home.how_it_works.step2.description": "Our advanced AI agent processes and understands complex financial text.",
    "home.how_it_works.step3.title": "Instant Insights",
    "home.how_it_works.step3.description": "Receive clear, concise summaries and actionable intelligence.",
    "home.features": "Key Features",
    "home.feature1.title": "Comprehensive Document Analysis",
    "home.feature1.description": "Analyze various SEC documents including 10-K, 10-Q, 8-K, and more with precision.",
    "home.feature2.title": "Natural Language Queries",
    "home.feature2.description": "Ask complex questions about financial filings and get accurate, contextual responses.",
    "home.feature3.title": "Advanced Data Extraction",
    "home.feature3.description": "Extract specific financial data points and insights from complex documents quickly.",
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
    "analysis.secapi.hint": "Get your SEC API key at {secApiLink}",
    "analysis.secapi.linkText": "https://sec-api.io",
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
    "analysis.upload.choosefile": "Choose File",
    "analysis.upload.dragdrop": "Drag and drop files here or click to upload",
    "analysis.upload.supports": "Supports PDF, DOC, DOCX, TXT, HTML, XBRL, and XML files",
    "analysis.upload.fileselected": "File Selected",
    "analysis.upload.label": "Upload SEC Document",
    "analysis.fetch.api": "Fetch via API",
    "analysis.upload.document": "Upload Document",
    "analysis.footer.note": "All API keys are securely stored in your browser's session storage and will never be sent to our servers."
  },
  zh: {
    "home.title": "SECGPT - AI驅動的SEC文件分析",
    "home.subtitle": "將複雜的財務文件轉化為可操作的洞察",
    "home.description": "利用尖端AI技術即時分析和提取SEC文件中的關鍵資訊，為您節省時間並提供深入的財務智能。",
    "home.cta": "開始分析",
    "home.how_it_works.title": "SECGPT工作原理",
    "home.how_it_works.step1.title": "上傳文件",
    "home.how_it_works.step1.description": "輕鬆上傳來自各種來源和格式的SEC文件。",
    "home.how_it_works.step2.title": "AI分析",
    "home.how_it_works.step2.description": "我們先進的AI代理處理並理解複雜的財務文本。",
    "home.how_it_works.step3.title": "即時洞察",
    "home.how_it_works.step3.description": "接收清晰、簡潔的摘要和可操作的智能。",
    "home.features": "關鍵功能",
    "home.feature1.title": "全面的文件分析",
    "home.feature1.description": "精確分析各種SEC文件，包括10-K、10-Q、8-K等。",
    "home.feature2.title": "自然語言查詢",
    "home.feature2.description": "就財務申報提出複雜問題，獲得準確的上下文回應。",
    "home.feature3.title": "高級數據提取",
    "home.feature3.description": "快速從複雜文件中提取具體的財務數據點和洞察。",
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
    "analysis.baseurl.label": "基礎URL",
    "analysis.baseurl.placeholder": "輸入自定義基礎URL（可選）",
    "analysis.secapi.label": "SEC API密鑰",
    "analysis.secapi.placeholder": "輸入您的SEC API密鑰",
    "analysis.secapi.hint": "在{secApiLink}獲取您的SEC API密鑰",
    "analysis.secapi.linkText": "https://sec-api.io",
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
    "analysis.upload.choosefile": "選擇文件",
    "analysis.upload.dragdrop": "將文件拖放到此處或點擊上傳",
    "analysis.upload.supports": "支持PDF、DOC、DOCX、TXT、HTML、XBRL和XML文件",
    "analysis.upload.fileselected": "已選擇文件",
    "analysis.upload.label": "上傳SEC文檔",
    "analysis.fetch.api": "通過API獲取",
    "analysis.upload.document": "上傳文檔",
    "analysis.footer.note": "所有API密鑰都安全地存儲在您瀏覽器的會話存儲中，絕不會發送到我們的服務器。"
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
