import { render, screen } from '@testing-library/react';
import App from './App';

test('renders summer bingo app', () => {
  render(<App />);
  const linkElement = screen.getByText(/best summer bingo!/i);
  expect(linkElement).toBeInTheDocument();
});
