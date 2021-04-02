import React from 'react'
import './VideoList.css';
import MusicIcon from '@material-ui/icons/MusicNote'

export const SingleVideo = ( { video, onSingleVideoSelect } ) => {
  // console.log('this is inside the single video component:',video.name)
  return (
    <div className='singleVideoSnippet' onClick={() => onSingleVideoSelect(video) }>
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