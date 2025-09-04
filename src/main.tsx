import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Add Inter font family to Tailwind
document.documentElement.style.fontFamily = 'Inter, system-ui, -apple-system, sans-serif';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);