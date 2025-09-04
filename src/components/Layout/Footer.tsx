import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const branches = [
    { city: 'Noida', address: 'A-31, sector 9 - 201301' },
    { city: 'Delhi', address: 'Lajpat Nagar, New Delhi - 110024' },
    // { city: 'Bangalore', address: 'Koramangala, Bangalore - 560095' },
    // { city: 'Chennai', address: 'T. Nagar, Chennai - 600017' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-orange-400 mb-4">Dreamz Interior</h3>
            <p className="text-gray-300 mb-6">
              Transforming kitchens across India with premium modular solutions since 2009.
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <Clock size={16} />
              <span className="text-sm">Mon-Sat: 9AM - 7PM</span>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={16} />
                <span>+91 93104 30282</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={16} />
                <span>dreamz2interior@gmail.com</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Modular Kitchens</li>
              <li>Luxury Kitchen Design</li>
              <li>Kitchen Renovation</li>
              <li>3D Kitchen Planning</li>
              <li>Installation & Warranty</li>
            </ul>
          </motion.div>

          {/* Branches */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">
              <MapPin size={16} className="inline mr-2" />
              Our Branches
            </h4>
            <div className="space-y-3">
              {branches.map((branch, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="block text-left text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm"
                >
                  <div className="font-medium">{branch.city}</div>
                  <div className="text-xs text-gray-400">{branch.address}</div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>&copy; 2025 Regal Kitchens. All rights reserved. | Privacy Policy | Terms of Service</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;