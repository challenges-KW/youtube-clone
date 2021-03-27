import { render, screen } from '@testing-library/react';
import { VideoList } from './VideoList';



test('renders wrapper', () => {
  render(<VideoList/>);

  const videoListWrapper = screen.getByTestId('videoListWrapper');
  expect(videoListWrapper).toBeInTheDocument();
});

// test('renders video', () => {
//     render(<Video />);
//     const videoClip = screen.getByTestId('videoClip');
//     expect(videoClip).toBeInTheDocument();
//   });

//   test('renders video name', () => {
//     render(<Video />);
//     const videoName = screen.getByTestId('videoName');
//     expect(videoName).toBeInTheDocument();
//   });

//   test('renders video publisher', () => {
//     render(<Video />);
//     const videoPublisher = screen.getByTestId('videoPublisher');
//     expect(videoPublisher).toBeInTheDocument();
//   });

//   test('renders video views and date', () => {
//     render(<Video />);
//     const videoViewsDate = screen.getByTestId('videoViewsDate');
//     expect(videoViewsDate).toBeInTheDocument();
//   });