import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

describe('App', () => {
  it('renders the home page by default', () => {
    render(<App />);
    expect(screen.getByText(/Welcome to our page!/i)).toBeInTheDocument();
  });

  it('renders the calculator page when the calculator link is clicked', () => {
    render(<App />);
    userEvent.click(screen.getByRole('link', { name: /calculator/i }));
    expect(screen.getByText(/Let’s do some math!/i)).toBeInTheDocument();
  });

  it('renders the quotes page when the quotes link is clicked', () => {
    render(<App />);
    userEvent.click(screen.getByRole('link', { name: /quotes/i }));
    expect(screen.getByText(/Mathematics is not about numbers/i)).toBeInTheDocument();
  });
});
