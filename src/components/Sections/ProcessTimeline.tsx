import React from 'react';
import { motion } from 'framer-motion';
import { Users, PenTool, Hammer, Home } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useLanguage } from '../../hooks/useLanguage';
import { content } from '../../data/content';

const ProcessTimeline: React.FC = () => {
  const { isVisible, elementRef } = useIntersectionObserver(0.2);
  const { currentLanguage } = useLanguage();
  const t = content[currentLanguage];

  const icons = [Users, PenTool, Hammer, Home];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45 }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.process.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to final installation, we ensure a seamless experience at every step.
          </p>
        </motion.div>

        <motion.div
          ref={elementRef}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {t.process.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                  >
                    <Icon size={32} className="text-white" />
                  </motion.div>
                  
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center text-sm font-bold text-orange-700">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < t.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-orange-300 to-transparent"></div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTimeline;