import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../hooks/useLanguage';

const MetaTags: React.FC = () => {
  const { currentLanguage } = useLanguage();

  const seoData = {
    en: {
      title: 'Regal Kitchens - Premium Modular Kitchen Solutions | 15+ Years Experience',
      description: 'Transform your kitchen with Regal Kitchens premium modular solutions. 25,000+ happy customers, 10-year warranty, free home consultation. Call +91-98765-43210',
      keywords: 'modular kitchens, kitchen design, luxury kitchens, kitchen renovation, Mumbai kitchens, Delhi kitchens'
    },
    hi: {
      title: 'रीगल किचन्स - प्रीमियम मॉड्यूलर किचन समाधान | 15+ वर्ष का अनुभव',
      description: 'रीगल किचन्स के प्रीमियम मॉड्यूलर समाधानों के साथ अपनी रसोई को बदलें। 25,000+ खुश ग्राहक, 10 साल की वारंटी, मुफ्त घर परामर्श।',
      keywords: 'मॉड्यूलर किचन, किचन डिज़ाइन, लक्जरी किचन, किचन नवीनीकरण, मुंबई किचन'
    }
  };

  const seo = seoData[currentLanguage];

  // JSON-LD Schema for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the typical timeline for kitchen installation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most kitchen installations take 15-20 working days from design approval to completion."
        }
      },
      {
        "@type": "Question", 
        "name": "Do you provide warranty on your kitchens?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide a comprehensive 10-year warranty on all our modular kitchen products."
        }
      }
    ]
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Regal Kitchens",
    "image": "https://www.regalokitchens.com/logo.jpg",
    "telephone": "+91-98765-43210",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.facebook.com/regalokitchens",
      "https://www.instagram.com/regalokitchens"
    ]
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.regalokitchens.com" />
      
      {/* Open Graph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.regalokitchens.com" />
      <meta property="og:image" content="https://www.regalokitchens.com/og-image.jpg" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content="https://www.regalokitchens.com/og-image.jpg" />
      
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>
      
      {/* Language alternatives */}
      <link rel="alternate" hrefLang="en" href="https://www.regalokitchens.com?lang=en" />
      <link rel="alternate" hrefLang="hi" href="https://www.regalokitchens.com?lang=hi" />
    </Helmet>
  );
};

export default MetaTags;