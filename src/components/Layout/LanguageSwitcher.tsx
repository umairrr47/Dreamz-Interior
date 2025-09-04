import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';

const LanguageSwitcher: React.FC = () => {
  const { currentLanguage, switchLanguage, languages } = useLanguage();

  return (
    <div className="flex items-center bg-gray-100 rounded-full p-1">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => switchLanguage(lang.code)}
          className={`px-3 py-1 rounded-full text-sm transition-all duration-200 ${
            currentLanguage === lang.code
              ? 'bg-orange-600 text-white shadow-md'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          {lang.flag} {lang.code.toUpperCase()}
        </motion.button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;