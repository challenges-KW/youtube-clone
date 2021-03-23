import { render, screen } from '@testing-library/react';
import App from './App';

test('renders youtube clone message', () => {
  render(<App />);
  const YoutubeElement = screen.getByText(/This will be a YouTube clone/i);
  expect(YoutubeElement).toBeInTheDocument();
});
