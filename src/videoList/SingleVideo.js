import React from 'react'
import './VideoList.css';
import MusicIcon from '@material-ui/icons/MusicNote'

export const SingleVideo = ( props ) => {
  return (
    <div className='singleVideoSnippet'>
      <div className='videoImage' data-testid='videoClip'>
        {props.video.image}
      </div>
      <div className='videolistText'>
        <p className='videoName' data-testid='videoName'>
          {props.video.name}
        </p>
        <p className='videoPublisher' data-testid='videoName'>
          {props.video.publisher} <MusicIcon className='icons'/>
        </p>
        <p className='videoViews' data-testid='videoViews'>
              {props.video.views} views • {props.video.relativeDate} years ago
            </p>
        </div>
    </div>
  );
}