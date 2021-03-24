import { render, screen } from '@testing-library/react';
import App from './App';
import { Video } from './videoFolder/Video'

test('renders youtube clone message', () => {
  render(<App />);
  const YoutubeElement = screen.getByText(/This will be a YouTube clone/i);
  expect(YoutubeElement).toBeInTheDocument();
});

test('renders Video component', () => {
  render(<Video />);
  const videoComponent = screen.getByTestId('videoComp');
  expect(videoComponent).toBeInTheDocument();
});