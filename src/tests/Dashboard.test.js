import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../components/Dashboard';

describe('Dashboard', () => {
  test('renders dashboard analytics heading', () => {
    render(<Dashboard />);
    expect(screen.getByRole('heading', { name: /dashboard analytics/i })).toBeInTheDocument();
  });

  test('shows correct stats', () => {
    render(<Dashboard />);
    expect(screen.getByText(/total requests/i)).toBeInTheDocument();
    expect(screen.getByText(/missed pickups/i)).toBeInTheDocument();
    expect(screen.getByText(/blog posts/i)).toBeInTheDocument();
    expect(screen.getByText(/community posts/i)).toBeInTheDocument();
  });

  test('renders charts and leaderboard', () => {
    render(<Dashboard />);
    expect(screen.getByText(/requests per month/i)).toBeInTheDocument();
    expect(screen.getByText(/top users \(activity\)/i)).toBeInTheDocument();
  });
});