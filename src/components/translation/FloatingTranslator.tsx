import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Languages, ChevronUp, ChevronDown } from 'lucide-react';
import { useTranslation } from './useTranslation';
import type { Language } from './translations';

const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'rn', name: 'Kirundi / Kinyarwanda', flag: '🇧🇮' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱'},
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
];

export default function FloatingTranslator() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, setCurrentLanguage } = useTranslation();

  const getCurrentLanguageInfo = () => {
    return languages.find(lang => lang.code === currentLanguage) || languages[0];
  };

  const handleLanguageChange = (language: { code: Language; name: string; flag: string }) => {
    setCurrentLanguage(language.code);
    setIsOpen(false);
  };

  const currentLangInfo = getCurrentLanguageInfo();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Menu déroulant des langues */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[150px]"
            >
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language)}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-100 flex items-center space-x-3 transition-colors ${
                    currentLanguage === language.code ? 'bg-blue-50 text-[#1E22AA]' : 'text-gray-700'
                  }`}
                >
                  <span className="text-lg">{language.flag}</span>
                  <span className="font-medium">{language.name}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bouton principal */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="bg-[#1E22AA] hover:bg-[#161a88] text-white rounded-full p-4 shadow-lg border-2 border-white"
          >
            <div className="flex items-center space-x-2">
              <Languages className="w-5 h-5" />
              <span className="text-lg">{currentLangInfo.flag}</span>
              {isOpen ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronUp className="w-4 h-4" />
              )}
            </div>
          </button>
        </motion.div>
      </div>
    </div>
  );
}