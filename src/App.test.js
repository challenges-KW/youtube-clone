import { render, screen } from '@testing-library/react';
import App from './App';
import { Video } from './videoFolder/Video'
import { VideoList } from './videoList/VideoList'
import { videoPlaylist } from './data'

test('renders Header', () => {
  render(<App />);
  const YoutubeElement = screen.getByTestId('header');
  expect(YoutubeElement).toBeInTheDocument();
});

test('renders Video component', () => {
  render(<Video vid={videoPlaylist[0]} />);
  const videoComponent = screen.getByTestId('videoComp');
  expect(videoComponent).toBeInTheDocument();
});

xtest('renders VideoList component', () => {
  render(<VideoList />);
  const videoListComponent = screen.getByTestId('videoListWrapper');
  expect(videoListComponent).toBeInTheDocument();
});