import { render, screen } from '@testing-library/react';
import { Video } from './Video'
import { videoPlaylist } from '../data'

beforeEach(() => {
  render(<Video vid={videoPlaylist[0]} />
    )
});

test('renders container', () => {
  const videoContainer = screen.getByTestId('videoComp');
  expect(videoContainer).toBeInTheDocument();
});

test('renders video', () => {
    const videoClip = screen.getByTestId('videoClip');
    expect(videoClip).toBeInTheDocument();
  });

  test('renders video name', () => {
    const videoName = screen.getByTestId('videoName');
    expect(videoName).toBeInTheDocument();
  });

  test('renders video publisher', () => {
    const videoPublisher = screen.getByTestId('videoPublisher');
    expect(videoPublisher).toBeInTheDocument();
  });

  test('renders video views and date', () => {
    const videoViewsDate = screen.getByTestId('videoViewsDate');
    expect(videoViewsDate).toBeInTheDocument();
  });