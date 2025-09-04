import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { kitchenTypes } from '../../data/content';
import { KitchenType } from '../../types';

interface KitchenTypesProps {
  onContactClick: () => void;
}

const KitchenTypes: React.FC<KitchenTypesProps> = ({ onContactClick }) => {
  const { isVisible, elementRef } = useIntersectionObserver(0.1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kitchen Solutions for Every Home
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From compact apartments to luxury homes, we create kitchens that perfectly fit your lifestyle and space.
          </p>
        </motion.div>

        <motion.div
          ref={elementRef}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {kitchenTypes.map((kitchen) => (
            <KitchenCard key={kitchen.id} kitchen={kitchen} onContactClick={onContactClick} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const KitchenCard: React.FC<{ kitchen: KitchenType; onContactClick: () => void }> = ({ 
  kitchen, 
  onContactClick 
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.2, ease: [0.2, 0.9, 0.3, 1] }
      }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      <div className="relative overflow-hidden">
        <img
          src={kitchen.image}
          alt={kitchen.title}
          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {kitchen.priceRange}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{kitchen.title}</h3>
        <p className="text-gray-600 mb-4">{kitchen.description}</p>
        
        <div className="space-y-2 mb-6">
          {kitchen.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
              <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
              {feature}
            </div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onContactClick}
          className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-orange-700 hover:to-amber-700 transition-all duration-200"
        >
          Get Quote
          <ArrowRight size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default KitchenTypes;