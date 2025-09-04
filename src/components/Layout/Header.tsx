import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { content } from '../../data/content';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { currentLanguage } = useLanguage();
  const t = content[currentLanguage];

  const handleCallClick = () => {
    window.location.href = 'tel:+91 9310430282';
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-orange-100"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <div className="text-2xl font-bold text-orange-600">
              Dreamz Interior
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors duration-200">
              {t.nav.home}
            </a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors duration-200">
              {t.nav.about}
            </a>
            <a href="#gallery" className="text-gray-700 hover:text-orange-600 transition-colors duration-200">
              {t.nav.gallery}
            </a>
            <button
              onClick={onContactClick}
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200"
            >
              {t.nav.contact}
            </button>
            <LanguageSwitcher />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCallClick}
              className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition-all duration-200"
            >
              <Phone size={16} />
              Call Now
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 py-4"
          >
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors duration-200">
                {t.nav.home}
              </a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors duration-200">
                {t.nav.about}
              </a>
              <a href="#gallery" className="text-gray-700 hover:text-orange-600 transition-colors duration-200">
                {t.nav.gallery}
              </a>
              <button
                onClick={onContactClick}
                className="text-left text-gray-700 hover:text-orange-600 transition-colors duration-200"
              >
                {t.nav.contact}
              </button>
              <button
                onClick={handleCallClick}
                className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition-all duration-200 w-fit"
              >
                <Phone size={16} />
                Call Now
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;