declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const trackEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackLeadGeneration = (leadData: any) => {
  trackEvent('generate_lead', {
    event_category: 'lead_generation',
    event_label: 'kitchen_consultation',
    value: 1,
    custom_parameters: {
      city: leadData.city,
      project_stage: leadData.projectStage
    }
  });
};

export const trackWhatsAppClick = (source: string) => {
  trackEvent('whatsapp_click', {
    event_category: 'engagement',
    event_label: source,
    value: 1
  });
};

export const trackCallClick = (source: string) => {
  trackEvent('call_click', {
    event_category: 'engagement',
    event_label: source,
    value: 1
  });
};