import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Home, Users, Palette } from 'lucide-react';

const PricingEstimator: React.FC = () => {
  const [kitchenSize, setKitchenSize] = useState(100);
  const [kitchenType, setKitchenType] = useState('modular');
  const [finishLevel, setFinishLevel] = useState('standard');

  const calculatePrice = () => {
    let basePrice = kitchenSize * 1000; // Base price per sq ft
    
    const typeMultiplier = {
      'compact': 0.8,
      'modular': 1.0,
      'luxury': 1.8,
      'island': 1.5
    };

    const finishMultiplier = {
      'basic': 0.8,
      'standard': 1.0,
      'premium': 1.4,
      'luxury': 2.0
    };

    basePrice *= typeMultiplier[kitchenType as keyof typeof typeMultiplier] || 1;
    basePrice *= finishMultiplier[finishLevel as keyof typeof finishMultiplier] || 1;

    return Math.round(basePrice);
  };

  const estimatedPrice = calculatePrice();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calculator className="text-orange-600" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">Kitchen Price Estimator</h2>
          </div>
          <p className="text-xl text-gray-600">
            Get a rough estimate for your dream kitchen project
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border border-orange-100"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {/* Kitchen Size */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  <Home size={16} className="inline mr-2" />
                  Kitchen Size: {kitchenSize} sq ft
                </label>
                <input
                  type="range"
                  min="50"
                  max="500"
                  value={kitchenSize}
                  onChange={(e) => setKitchenSize(Number(e.target.value))}
                  className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>50 sq ft</span>
                  <span>500 sq ft</span>
                </div>
              </div>

              {/* Kitchen Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  <Users size={16} className="inline mr-2" />
                  Kitchen Type
                </label>
                <select
                  value={kitchenType}
                  onChange={(e) => setKitchenType(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="compact">Compact Kitchen</option>
                  <option value="modular">Modular Kitchen</option>
                  <option value="luxury">Luxury Kitchen</option>
                  <option value="island">Island Kitchen</option>
                </select>
              </div>

              {/* Finish Level */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  <Palette size={16} className="inline mr-2" />
                  Finish Level
                </label>
                <select
                  value={finishLevel}
                  onChange={(e) => setFinishLevel(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="basic">Basic Finish</option>
                  <option value="standard">Standard Finish</option>
                  <option value="premium">Premium Finish</option>
                  <option value="luxury">Luxury Finish</option>
                </select>
              </div>
            </div>

            {/* Price Display */}
            <div className="flex items-center justify-center">
              <motion.div
                key={estimatedPrice}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-8 shadow-xl text-center border-2 border-orange-200"
              >
                <div className="text-sm font-semibold text-gray-600 mb-2">Estimated Cost</div>
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  ₹{estimatedPrice.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500 mb-4">*Approximate pricing</div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors duration-200"
                >
                  Get Accurate Quote
                </motion.button>
              </motion.div>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-600">
            * This is a rough estimate. Final pricing may vary based on specific requirements, materials, and customizations.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingEstimator;