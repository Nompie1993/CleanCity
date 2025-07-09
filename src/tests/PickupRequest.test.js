import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../components/Home';

describe('Critical User Flow: Waste Pickup Request', () => {
  test('user can submit a valid pickup request', () => {
    render(<Home />);
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'Jane Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'jane@example.com' } });
    fireEvent.change(screen.getByLabelText(/pickup location/i), { target: { value: 'Nairobi' } });
    fireEvent.change(screen.getByLabelText(/waste type/i), { target: { value: 'General Waste' } });
    fireEvent.change(screen.getByLabelText(/preferred pickup date/i), { target: { value: '2025-07-10' } });

    const submitButton = screen.getByRole('button', { name: /submit request/i });
    fireEvent.click(submitButton);

    // Expect no error message after successful submission
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    // Optionally, check for a success message if your app shows one
    // expect(screen.getByText(/thank you/i)).toBeInTheDocument();
  });
});