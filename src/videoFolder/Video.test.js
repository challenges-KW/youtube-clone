import { render, screen } from '@testing-library/react';
import { Video } from './Video'

beforeEach(() => {
  render(<Video vid={selectedVideo} />
    )
});

test('renders video', () => {
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