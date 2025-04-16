
import { useLanguage } from "@/providers/LanguageProvider";
import { TranslationKey } from "@/translations";

export function useTranslation() {
  const { language, setLanguage, t } = useLanguage();
  
  const translate = (key: TranslationKey): string => {
    return t(key);
  };
  
  return {
    language,
    setLanguage,
    t: translate
  };
}
