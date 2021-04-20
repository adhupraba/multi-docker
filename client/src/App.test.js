import { render, screen } from '@testing-library/react';
import App from './App';

test('renders enter your index text from Fib', () => {
  render(<App />);
  const linkElement = screen.getByText(/enter your index/i);
  expect(linkElement).toBeInTheDocument();
});
