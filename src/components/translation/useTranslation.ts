import { useContext } from 'react';
import { TranslationContext, type TranslationContextType } from './TranslationContextValue';

export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }
  return context;
};