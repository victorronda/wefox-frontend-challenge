import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Travel with us header', () => {
  render(<App />);
  const h1Element = screen.getByRole('heading', { name: /travel with us/i });
  expect(h1Element).toBeInTheDocument();
});
