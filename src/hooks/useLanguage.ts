import { useState, useEffect } from 'react';
import { Language } from '../types';

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' }
];

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language['code']>('en');

  useEffect(() => {
    const saved = localStorage.getItem('regal-kitchen-language') as Language['code'];
    if (saved && languages.find(l => l.code === saved)) {
      setCurrentLanguage(saved);
    }
  }, []);

  const switchLanguage = (lang: Language['code']) => {
    setCurrentLanguage(lang);
    localStorage.setItem('regal-kitchen-language', lang);
  };

  return {
    currentLanguage,
    switchLanguage,
    languages,
    isHindi: currentLanguage === 'hi'
  };
};