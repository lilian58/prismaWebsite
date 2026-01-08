import React, { createContext } from 'react';
import { type Language } from './translations';

export interface TranslationContextType {
  t: (key: string) => string;
  currentLanguage: Language;
  setCurrentLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

export const TranslationContext = createContext<TranslationContextType | null>(null);