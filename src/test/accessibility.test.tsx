import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import FAQAccordion from '../components/Sections/FAQAccordion';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => children,
}));

// Mock hooks
vi.mock('../hooks/useIntersectionObserver', () => ({
  useIntersectionObserver: () => ({
    isVisible: true,
    elementRef: { current: null }
  })
}));

vi.mock('../hooks/useLanguage', () => ({
  useLanguage: () => ({
    currentLanguage: 'en'
  })
}));

describe('FAQ Accessibility', () => {
  it('has proper ARIA attributes', () => {
    render(<FAQAccordion />);
    
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      expect(button).toHaveAttribute('aria-expanded');
      expect(button).toHaveAttribute('aria-controls');
    });
  });

  it('supports keyboard navigation', async () => {
    const user = userEvent.setup();
    render(<FAQAccordion />);
    
    const firstButton = screen.getAllByRole('button')[0];
    await user.tab();
    expect(firstButton).toHaveFocus();
    
    await user.keyboard('[Enter]');
    expect(firstButton).toHaveAttribute('aria-expanded', 'true');
  });

  it('maintains focus management', async () => {
    const user = userEvent.setup();
    render(<FAQAccordion />);
    
    const buttons = screen.getAllByRole('button');
    
    // Tab through all buttons
    for (let i = 0; i < buttons.length; i++) {
      await user.tab();
      expect(buttons[i]).toHaveFocus();
    }
  });
});