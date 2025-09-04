# Regal Kitchens Website

A production-ready, pixel-perfect replica and enhancement of the Regal Kitchens website built with React, TypeScript, Framer Motion, and Tailwind CSS.

## Features

- 🎨 **Premium Design**: Apple-level aesthetics with sophisticated animations
- 📱 **Fully Responsive**: Mobile-first design with optimized breakpoints
- 🌐 **Bilingual Support**: English and Hindi with smooth language switching
- 🚀 **Performance Optimized**: Code splitting, lazy loading, <100KB initial JS
- ♿ **Accessibility Compliant**: WCAG AA+ standards, keyboard navigation, ARIA support
- 📊 **Analytics Ready**: GA4 + GTM integration with event tracking
- 🎯 **Lead Generation**: Complete form-to-WhatsApp flow with serverless API
- 💰 **Price Estimator**: Interactive widget with real-time calculations
- 🔍 **SEO Optimized**: Meta tags, JSON-LD schema, sitemap, robots.txt

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Yup validation
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **SEO**: React Helmet Async
- **Analytics**: Google Analytics 4 + Google Tag Manager

## Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   └── StickyActions.tsx
│   ├── Sections/
│   │   ├── Hero.tsx
│   │   ├── TrustCounters.tsx
│   │   ├── KitchenTypes.tsx
│   │   ├── ProcessTimeline.tsx
│   │   ├── PricingEstimator.tsx
│   │   ├── TestimonialCarousel.tsx
│   │   └── FAQAccordion.tsx
│   ├── Modals/
│   │   └── ContactModal.tsx
│   └── SEO/
│       └── MetaTags.tsx
├── hooks/
│   ├── useLanguage.ts
│   ├── useIntersectionObserver.ts
│   └── useCountUp.ts
├── utils/
│   ├── analytics.ts
│   └── leadApi.ts
├── data/
│   └── content.ts
├── types/
│   └── index.ts
└── api/
    └── lead.js
```

## Quick Start

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Import the project
3. Deploy automatically with zero configuration

### Netlify
1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `dist`

## Configuration

### Analytics Setup
1. Replace `GTM-XXXXXXX` in `index.html` with your GTM container ID
2. Replace `GA_MEASUREMENT_ID` in `App.tsx` with your GA4 measurement ID

### WhatsApp Integration
1. Update the phone number in `utils/leadApi.ts`
2. Customize the WhatsApp message template

### API Configuration
- The lead API is set up for Vercel serverless functions
- For other platforms, adapt the API endpoint in `api/lead.js`

## Testing

```bash
# Run tests
npm test

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

## Performance Features

- **Code Splitting**: Automatic chunking for optimal loading
- **Lazy Loading**: Below-the-fold images load on demand
- **Image Optimization**: WebP/AVIF support with PNG fallback
- **Bundle Analysis**: Optimized vendor and UI library chunks
- **Preloading**: Critical resources preloaded for faster LCP

## SEO Features

- **Meta Tags**: Dynamic title, description, keywords per language
- **JSON-LD Schema**: FAQ and Business schema markup
- **Open Graph**: Social media sharing optimization
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawling instructions

## Accessibility Features

- **Keyboard Navigation**: Full keyboard support throughout
- **Focus Management**: Proper focus trapping in modals
- **ARIA Labels**: Comprehensive ARIA implementation
- **Color Contrast**: AA+ compliance across all elements
- **Reduced Motion**: Respects prefers-reduced-motion setting

## Browser Support

- Chrome 90+
- Firefox 90+
- Safari 14+
- Edge 90+

## License

This project is proprietary and confidential. All rights reserved.