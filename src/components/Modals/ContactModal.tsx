import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { LeadFormData } from '../../types';
import { submitLead, generateWhatsAppMessage, openWhatsApp } from '../../utils/leadApi';
import { useLanguage } from '../../hooks/useLanguage';
import { content } from '../../data/content';
import { trackEvent } from '../../utils/analytics';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [leadId, setLeadId] = useState('');
  const { currentLanguage } = useLanguage();
  const t = content[currentLanguage];

  const { register, handleSubmit, formState: { errors }, reset } = useForm<LeadFormData>();

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    try {
      const result = await submitLead(data);
      setLeadId(result.leadId);
      setShowThanks(true);
      
      // Open WhatsApp after short delay
      setTimeout(() => {
        const whatsappMessage = generateWhatsAppMessage(result.leadId, data);
        openWhatsApp(whatsappMessage);
        trackEvent('lead_whatsapp_redirect', { leadId: result.leadId });
      }, 2000);

      reset();
    } catch (error) {
      console.error('Error submitting lead:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setShowThanks(false);
    setLeadId('');
    onClose();
  };

  const downloadBrochure = () => {
    trackEvent('brochure_download', { leadId });
    // In real implementation, this would trigger actual download
    alert('Brochure download started!');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 500 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 id="contact-modal-title" className="text-2xl font-bold text-gray-900">
                {showThanks ? 'Thank You!' : t.contact.title}
              </h2>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-full p-1"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {showThanks ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center space-y-6"
                >
                  <CheckCircle size={64} className="text-green-500 mx-auto" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Your request has been submitted!
                    </h3>
                    <p className="text-gray-600">
                      We're redirecting you to WhatsApp to continue the conversation.
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Lead ID: {leadId}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={downloadBrochure}
                    className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors duration-200"
                  >
                    Download Brochure
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.contact.name} *
                    </label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.contact.phone} *
                    </label>
                    <input
                      {...register('phone', { 
                        required: 'Phone number is required',
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: 'Please enter a valid 10-digit phone number'
                        }
                      })}
                      type="tel"
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* City Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.contact.city} *
                    </label>
                    <input
                      {...register('city', { required: 'City is required' })}
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your city"
                    />
                    {errors.city && (
                      <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
                    )}
                  </div>

                  {/* Project Stage */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.contact.projectStage}
                    </label>
                    <select
                      {...register('projectStage')}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="planning">Planning Stage</option>
                      <option value="construction">Under Construction</option>
                      <option value="renovation">Renovation</option>
                      <option value="immediate">Ready to Start</option>
                    </select>
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Upload size={16} className="inline mr-2" />
                      {t.contact.upload}
                    </label>
                    <input
                      {...register('file')}
                      type="file"
                      accept="image/*"
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white py-4 rounded-xl font-bold text-lg hover:from-orange-700 hover:to-amber-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : t.contact.submit}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;