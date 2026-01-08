import React, { useState } from 'react';
import { translations, type Language, type TranslationValue } from './translations';
import { TranslationContext } from './TranslationContextValue';

export const TranslationProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('fr');

  const t = (key: string) => {
    const keys = key.split('.');
    let value: TranslationValue = translations[currentLanguage];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && !Array.isArray(value) && value[k]) {
        value = value[k] as TranslationValue;
      } else {
        return key; // Return the key if translation not found
      }
    }
    
    if (typeof value === 'string') {
      return value;
    } else {
      return key;
    }
  };

  return (
    <TranslationContext.Provider value={{ t, currentLanguage, setCurrentLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};
