
import en from './en.json';
import zh from './zh.json';

export type TranslationKey = keyof typeof en;

export const translations = {
  en,
  zh
};

export type Language = keyof typeof translations;
