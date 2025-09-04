import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, Award } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { content } from '../../data/content';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const { currentLanguage } = useLanguage();
  const t = content[currentLanguage];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg"
          alt="Modern Kitchen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm font-medium">{t.hero.trustText}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xl mb-8 text-gray-200 max-w-lg"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={onContactClick}
                className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-orange-700 transition-all duration-200 shadow-lg"
              >
                {t.hero.cta}
                <ArrowRight size={20} />
              </motion.button>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 text-sm"
              >
                <div className="flex items-center gap-2">
                  <Shield size={16} className="text-green-400" />
                  <span>10 Year Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-blue-400" />
                  <span>Certified Quality</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Hero Image/Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6 text-center text-white">
                <div>
                  <div className="text-3xl font-bold text-orange-400">25K+</div>
                  <div className="text-sm text-gray-300">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400">15+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400">50+</div>
                  <div className="text-sm text-gray-300">Expert Designers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400">99%</div>
                  <div className="text-sm text-gray-300">Satisfaction</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1 h-8 bg-white/60 rounded-full"
        />
      </motion.div>
    </section>
  );
};

export default Hero;