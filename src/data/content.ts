import { KitchenType, Testimonial, FAQ, TrustMetric } from '../types';

export const trustMetrics: TrustMetric[] = [
  { id: '1', value: 25000, suffix: '+', label: 'Happy Customers' },
  { id: '2', value: 15, suffix: '+', label: 'Years Experience' },
  { id: '3', value: 50, suffix: '+', label: 'Expert Designers' },
  { id: '4', value: 99, suffix: '%', label: 'Satisfaction Rate' }
];

export const kitchenTypes: KitchenType[] = [
  {
    id: 'modular',
    title: 'Modular Kitchens',
    image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg',
    description: 'Contemporary designs with smart storage solutions',
    features: ['Soft-close drawers', 'Premium hardware', 'Custom layouts'],
    priceRange: '₹1.5L - ₹4L'
  },
  {
    id: 'luxury',
    title: 'Luxury Kitchens',
    image: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg',
    description: 'Premium finishes with bespoke designs',
    features: ['Italian hardware', 'Natural stone', 'Custom lighting'],
    priceRange: '₹4L - ₹10L'
  },
  {
    id: 'compact',
    title: 'Compact Kitchens',
    image: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg',
    description: 'Space-optimized for modern apartments',
    features: ['Multi-functional units', 'Space saving', 'Smart storage'],
    priceRange: '₹80K - ₹2L'
  },
  {
    id: 'traditional',
    title: 'Traditional Kitchens',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
    description: 'Classic designs with modern functionality',
    features: ['Solid wood', 'Traditional crafts', 'Timeless appeal'],
    priceRange: '₹2L - ₹6L'
  },
  {
    id: 'island',
    title: 'Island Kitchens',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
    description: 'Open layouts with central workspace',
    features: ['Central island', 'Open concept', 'Entertainment ready'],
    priceRange: '₹3L - ₹8L'
  },
  {
    id: 'parallel',
    title: 'Parallel Kitchens',
    image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg',
    description: 'Efficient galley-style layouts',
    features: ['Dual workspace', 'Efficient flow', 'Maximum storage'],
    priceRange: '₹1L - ₹3.5L'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'Exceptional quality and design. Our kitchen has become the heart of our home.',
    beforeImage: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg',
    afterImage: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg'
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    location: 'Delhi',
    rating: 5,
    text: 'Professional service from design to installation. Highly recommended!',
    beforeImage: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
    afterImage: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg'
  },
  {
    id: '3',
    name: 'Meera Patel',
    location: 'Bangalore',
    rating: 5,
    text: 'Amazing transformation! The team understood our vision perfectly.',
    beforeImage: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg',
    afterImage: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg'
  }
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What is the typical timeline for kitchen installation?',
    answer: 'Most kitchen installations take 15-20 working days from design approval to completion.'
  },
  {
    id: '2',
    question: 'Do you provide warranty on your kitchens?',
    answer: 'Yes, we provide a comprehensive 10-year warranty on all our modular kitchen products.'
  },
  {
    id: '3',
    question: 'Can I customize the design according to my space?',
    answer: 'Absolutely! All our kitchens are fully customizable to fit your specific space and requirements.'
  },
  {
    id: '4',
    question: 'What materials do you use for kitchen cabinets?',
    answer: 'We use premium materials including marine-grade plywood, solid wood, and high-quality laminates.'
  },
  {
    id: '5',
    question: 'Do you offer free design consultation?',
    answer: 'Yes, we provide free home visits and 3D design consultations for all our customers.'
  }
];

export const content = {
  en: {
    hero: {
      title: 'Transform Your Kitchen Into a Culinary Paradise',
      subtitle: 'Premium modular kitchens designed to perfection with 15+ years of expertise',
      cta: 'Get Free Design Consultation',
      trustText: 'Trusted by 25,000+ happy families'
    },
    nav: {
      home: 'Home',
      about: 'About',
      gallery: 'Gallery',
      contact: 'Contact'
    },
    process: {
      title: 'Our 4-Step Process',
      steps: [
        { title: 'Consultation', description: 'Free home visit and requirement analysis' },
        { title: 'Design', description: '3D visualization and material selection' },
        { title: 'Manufacturing', description: 'Precision crafting in our factory' },
        { title: 'Installation', description: 'Professional setup and handover' }
      ]
    },
    faq: {
      title: 'Frequently Asked Questions'
    },
    contact: {
      title: 'Get Your Dream Kitchen Quote',
      name: 'Full Name',
      phone: 'Phone Number',
      city: 'City',
      projectStage: 'Project Stage',
      upload: 'Upload Kitchen Photo (Optional)',
      submit: 'Get Free Quote'
    }
  },
  hi: {
    hero: {
      title: 'अपनी रसोई को एक पाक स्वर्ग में बदलें',
      subtitle: '15+ वर्षों की विशेषज्ञता के साथ परफेक्शन के लिए डिज़ाइन किए गए प्रीमियम मॉड्यूलर किचन',
      cta: 'मुफ्त डिज़ाइन परामर्श प्राप्त करें',
      trustText: '25,000+ खुश परिवारों द्वारा भरोसा'
    },
    nav: {
      home: 'होम',
      about: 'हमारे बारे में',
      gallery: 'गैलरी',
      contact: 'संपर्क'
    },
    process: {
      title: 'हमारी 4-चरणीय प्रक्रिया',
      steps: [
        { title: 'परामर्श', description: 'मुफ्त घर की यात्रा और आवश्यकता विश्लेषण' },
        { title: 'डिज़ाइन', description: '3D विज़ुअलाइज़ेशन और सामग्री चयन' },
        { title: 'विनिर्माण', description: 'हमारी फैक्ट्री में सटीक शिल्प कौशल' },
        { title: 'स्थापना', description: 'व्यावसायिक सेटअप और हैंडओवर' }
      ]
    },
    faq: {
      title: 'अक्सर पूछे जाने वाले प्रश्न'
    },
    contact: {
      title: 'अपने सपनों की रसोई का कोटेशन प्राप्त करें',
      name: 'पूरा नाम',
      phone: 'फोन नंबर',
      city: 'शहर',
      projectStage: 'प्रोजेक्ट चरण',
      upload: 'रसोई की फोटो अपलोड करें (वैकल्पिक)',
      submit: 'मुफ्त कोटेशन प्राप्त करें'
    }
  }
};