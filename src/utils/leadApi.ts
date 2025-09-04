import { LeadFormData } from '../types';
import { trackLeadGeneration } from './analytics';

export const submitLead = async (formData: LeadFormData) => {
  try {
    const response = await fetch('/api/lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error('Failed to submit lead');
    }

    const result = await response.json();
    
    // Track analytics
    trackLeadGeneration(formData);
    
    return result;
  } catch (error) {
    console.error('Lead submission error:', error);
    throw error;
  }
};

export const generateWhatsAppMessage = (leadId: string, formData: LeadFormData) => {
  const message = `LeadId: ${leadId} | Name: ${formData.name} | Phone: ${formData.phone} | City: ${formData.city}`;
  return encodeURIComponent(message);
};

export const openWhatsApp = (message: string) => {
  const whatsappNumber = '919876543210'; // Replace with actual number
  const url = `https://wa.me/${whatsappNumber}?text=${message}`;
  window.open(url, '_blank');
};