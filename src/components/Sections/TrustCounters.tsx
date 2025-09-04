import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useCountUp } from '../../hooks/useCountUp';
import { trustMetrics } from '../../data/content';

const TrustCounters: React.FC = () => {
  const { isVisible, elementRef } = useIntersectionObserver(0.3);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45 }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={elementRef}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {trustMetrics.map((metric) => (
            <motion.div
              key={metric.id}
              variants={itemVariants}
              className="text-center"
            >
              <CounterCard metric={metric} isVisible={isVisible} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const CounterCard: React.FC<{ metric: any; isVisible: boolean }> = ({ metric, isVisible }) => {
  const count = useCountUp(metric.value, 1200, isVisible);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100"
    >
      <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
        {count.toLocaleString()}{metric.suffix}
      </div>
      <div className="text-gray-600 font-medium">{metric.label}</div>
    </motion.div>
  );
};

export default TrustCounters;