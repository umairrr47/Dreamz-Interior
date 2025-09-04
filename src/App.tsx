import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { motion, useScroll, useSpring } from 'framer-motion';
import Header from './components/Layout/Header';
import Hero from './components/Sections/Hero';
// import TrustCounters from './components/Sections/TrustCounters';
// import KitchenTypes from './components/Sections/KitchenTypes';
// import ProcessTimeline from './components/Sections/ProcessTimeline';
// import PricingEstimator from './components/Sections/PricingEstimator';
// import TestimonialCarousel from './components/Sections/TestimonialCarousel';
// import FAQAccordion from './components/Sections/FAQAccordion';
import ContactModal from './components/Modals/ContactModal';
// import StickyActions from './components/Layout/StickyActions';
import Footer from './components/Layout/Footer';
import MetaTags from './components/SEO/MetaTags';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Initialize analytics
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // GTM initialization
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer!.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: 'Regal Kitchens - Home',
        page_location: window.location.href
      });
    }
  }, []);

  // Accessibility: Trap focus in modal
  useEffect(() => {
    if (isContactModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isContactModalOpen]);

  // Prefers reduced motion support
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      document.documentElement.style.setProperty('--animation-duration', '0.01s');
    }
  }, []);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <MetaTags />
        
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 to-amber-600 origin-left z-50"
          style={{ scaleX }}
        />

        <Header onContactClick={() => setIsContactModalOpen(true)} />
        
        <main>
          <Hero onContactClick={() => setIsContactModalOpen(true)} />
          {/* <TrustCounters />
          <KitchenTypes onContactClick={() => setIsContactModalOpen(true)} />
          <ProcessTimeline />
          <PricingEstimator />
          <TestimonialCarousel />
          <FAQAccordion /> */}
        </main>

        <Footer />
        {/* <StickyActions /> */}
        
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        />
      </div>
    </HelmetProvider>
  );
}

export default App;