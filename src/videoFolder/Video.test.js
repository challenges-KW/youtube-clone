import { render, screen } from '@testing-library/react';
import { Video } from './Video'
import { videoPlaylist } from '../data'

beforeEach(() => {
  render(<Video vid={selectedVideo} />
    )
});

test('renders container', () => {
  const videoContainer = screen.getByTestId('videoComp');
  expect(videoContainer).toBeInTheDocument();
});

xtest('renders video', () => {
    const videoClip = screen.getByTestId('videoClip');
    expect(videoClip).toBeInTheDocument();
  });

xtest('renders video name', () => {
    const videoName = screen.getByTestId('videoName');
    expect(videoName).toBeInTheDocument();
  });

xtest('renders video views and date', () => {
    const videoViewsDate = screen.getByTestId('videoViewsDate');
    expect(videoViewsDate).toBeInTheDocument();
  });