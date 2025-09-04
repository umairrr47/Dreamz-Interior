import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { trackWhatsAppClick, trackCallClick } from '../../utils/analytics';

const StickyActions: React.FC = () => {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick('sticky_button');
    const message = encodeURIComponent('Hi! I am interested in your kitchen solutions. Please share more details.');
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    trackCallClick('sticky_button');
    window.location.href = 'tel:+919876543210';
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsAppClick}
        className="w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-200 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Call Button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleCallClick}
        className="w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-200 flex items-center justify-center"
        aria-label="Call us"
      >
        <Phone size={24} />
      </motion.button>
    </div>
  );
};

export default StickyActions;