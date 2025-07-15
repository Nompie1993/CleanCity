import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../components/Dashboard';

describe('Critical User Flow: Dashboard View', () => {
  test('user sees analytics and stats', () => {
    render(<Dashboard />);
    expect(screen.getByRole('heading', { name: /dashboard analytics/i })).toBeInTheDocument();
    expect(screen.getByText(/total requests/i)).toBeInTheDocument();
    expect(screen.getByText(/missed pickups/i)).toBeInTheDocument();
    expect(screen.getByText(/blog posts/i)).toBeInTheDocument();
    expect(screen.getByText(/community posts/i)).toBeInTheDocument();
    expect(screen.getByText(/requests per month/i)).toBeInTheDocument();
    expect(screen.getByText(/top users \(activity\)/i)).toBeInTheDocument();
  });
});