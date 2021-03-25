import { render, screen } from '@testing-library/react';
import App from './App';
import { Video } from './videoFolder/Video'
import { VideoList } from './videoList/VideoList'


test('renders youtube clone message', () => {
  render(<App />);
  const YoutubeElement = screen.getByTestId('header');
  expect(YoutubeElement).toBeInTheDocument();
});

test('renders Video component', () => {
  render(<Video />);
  const videoComponent = screen.getByTestId('videoComp');
  expect(videoComponent).toBeInTheDocument();
});

// test('renders VideoList component', () => {
//   render(<VideoList />);
//   const videoListComponent = screen.getByTestId('videoListWrapper');
//   expect(videoListComponent).toBeInTheDocument();
// });