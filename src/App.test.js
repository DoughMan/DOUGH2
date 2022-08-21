import { render, screen } from '@testing-library/react';
import App from './App';

test('App link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Open App/i);
  expect(linkElement).toBeInTheDocument();
});
