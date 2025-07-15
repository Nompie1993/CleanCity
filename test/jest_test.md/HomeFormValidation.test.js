import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../components/Home';

describe('Home Form Validation', () => {
  test('shows error message when required fields are empty', () => {
    render(<Home />);
    const submitButton = screen.getByRole('button', { name: /submit request/i });
    fireEvent.click(submitButton);

    expect(screen.getByRole('alert')).toHaveTextContent(/please fill in all required fields/i);
  });

  test('does not show error when required fields are filled', () => {
    render(<Home />);
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'Jane Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'jane@example.com' } });
    fireEvent.change(screen.getByLabelText(/pickup location/i), { target: { value: 'Nairobi' } });
    fireEvent.change(screen.getByLabelText(/waste type/i), { target: { value: 'General Waste' } });
    fireEvent.change(screen.getByLabelText(/preferred pickup date/i), { target: { value: '2025-07-10' } });

    const submitButton = screen.getByRole('button', { name: /submit request/i });
    fireEvent.click(submitButton);

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});