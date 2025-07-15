import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../components/Dashboard';

// Mock the data functions used in Dashboard.js
jest.mock('../components/Dashboard', () => {
  const originalModule = jest.requireActual('../components/Dashboard');
  return {
    __esModule: true,
    ...originalModule,
    getRequests: () => [{ id: 1 }, { id: 2 }],
    getBlogPosts: () => [{ id: 1 }],
    getCommunityPosts: () => [{ id: 1 }],
    getRequestsPerMonth: () => ({ '2024-06': 3 }),
    getMissedPickups: () => 1,
    getUserActivity: () => ({ Alice: 2 }),
  };
});

describe('Dashboard Accessibility', () => {
  test('main dashboard card has role and aria-label', () => {
    render(<Dashboard />);
    const main = screen.getByRole('main', { name: /dashboard analytics/i });
    expect(main).toBeInTheDocument();
  });

  test('has accessible headings', () => {
    render(<Dashboard />);
    expect(screen.getByRole('heading', { name: /dashboard analytics/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /requests per month/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /top users \(activity\)/i, level: 3 })).toBeInTheDocument();
  });

  test('stat labels are readable', () => {
    render(<Dashboard />);
    expect(screen.getByText(/total requests/i)).toBeInTheDocument();
    expect(screen.getByText(/missed pickups/i)).toBeInTheDocument();
    expect(screen.getByText(/blog posts/i)).toBeInTheDocument();
    expect(screen.getByText(/community posts/i)).toBeInTheDocument();
  });
});