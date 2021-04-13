import { render, screen } from '@testing-library/react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar'
import App from './App'
import { Video } from './videoFolder/Video'
import { VideoList } from './videoList/VideoList'


//hard code any data from the server -- pass in actual data

test('renders Header', () => {
  render(<Header />);
  const YoutubeElement = screen.getByTestId('header');
  expect(YoutubeElement).toBeInTheDocument();
});

xtest('renders Sidebar', () => {
  render(<Sidebar />);
  const YoutubeElement = screen.getByTestId('sidebar');
  expect(YoutubeElement).toBeInTheDocument();
});

xtest('renders Video component', () => {
  render(<Video vid={selectedVideo} />);
  const videoComponent = screen.getByText('Hold Up');
  expect(videoComponent).toBeInTheDocument();
});

xtest('renders VideoList component', () => {
  render(<VideoList />);
  const videoListComponent = screen.getByTestId('videoListWrapper');
  expect(videoListComponent).toBeInTheDocument();
});