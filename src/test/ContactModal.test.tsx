import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import ContactModal from '../components/Modals/ContactModal';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
  AnimatePresence: ({ children }: any) => children,
}));

// Mock hooks
vi.mock('../hooks/useLanguage', () => ({
  useLanguage: () => ({
    currentLanguage: 'en'
  })
}));

vi.mock('../utils/leadApi', () => ({
  submitLead: vi.fn().mockResolvedValue({ leadId: 'TEST123' }),
  generateWhatsAppMessage: vi.fn().mockReturnValue('test-message'),
  openWhatsApp: vi.fn()
}));

describe('ContactModal', () => {
  const mockOnClose = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders contact form when open', () => {
    render(<ContactModal isOpen={true} onClose={mockOnClose} />);
    
    expect(screen.getByText('Get Your Dream Kitchen Quote')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your full name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your phone number')).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    const user = userEvent.setup();
    render(<ContactModal isOpen={true} onClose={mockOnClose} />);
    
    const submitButton = screen.getByText('Get Free Quote');
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument();
      expect(screen.getByText('Phone number is required')).toBeInTheDocument();
      expect(screen.getByText('City is required')).toBeInTheDocument();
    });
  });

  it('validates phone number format', async () => {
    const user = userEvent.setup();
    render(<ContactModal isOpen={true} onClose={mockOnClose} />);
    
    const phoneInput = screen.getByPlaceholderText('Enter your phone number');
    await user.type(phoneInput, '123');
    
    const submitButton = screen.getByText('Get Free Quote');
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Please enter a valid 10-digit phone number')).toBeInTheDocument();
    });
  });

  it('submits form successfully', async () => {
    const user = userEvent.setup();
    render(<ContactModal isOpen={true} onClose={mockOnClose} />);
    
    await user.type(screen.getByPlaceholderText('Enter your full name'), 'John Doe');
    await user.type(screen.getByPlaceholderText('Enter your phone number'), '9876543210');
    await user.type(screen.getByPlaceholderText('Enter your city'), 'Mumbai');
    
    const submitButton = screen.getByText('Get Free Quote');
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Your request has been submitted!')).toBeInTheDocument();
    });
  });
});