
import { createContext, useContext, useState } from "react";
import { translations, Language, TranslationKey } from "../translations";

type LanguageProviderProps = {
  children: React.ReactNode;
  defaultLanguage?: Language;
};

type LanguageProviderState = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
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
    // Check if the key exists in the current language translations
    if (translations[language] && key in translations[language]) {
      return translations[language][key as TranslationKey];
    }
    
    // If not found in the current language, try English
    if (language !== "en" && translations["en"] && key in translations["en"]) {
      return translations["en"][key as TranslationKey];
    }
    
    // If still not found, return the key itself
    return key;
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
