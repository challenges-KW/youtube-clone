import React from 'react'
import './VideoList.css';
import MusicIcon from '@material-ui/icons/MusicNote'

export const SingleVideo = ( { video } ) => {
  return (
    <div className='singleVideoSnippet'>
      <div className='videoImage' data-testid='videoClip'>
        {video.image}
      </div>
      <div className='videolistText'>
        <p className='videoName' data-testid='videoName'>
          {video.name}
        </p>
        <p className='videoPublisher' data-testid='videoName'>
          {video.publisher} <MusicIcon className='icons'/>
        </p>
        <p className='videoViews' data-testid='videoViews'>
              {video.views} views • {video.relativeDate} years ago
            </p>
        </div>
    </div>
  );
}