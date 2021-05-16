import React, {useState} from 'react'
import './VideoList.css'
import '../theme.css'
import MusicIcon from '@material-ui/icons/MusicNote';

export const SingleVideo = ( { video, onSingleVideoSelect } ) => {

  return (
    <div 
      className={`singleVideoSnippet`} 
      onClick={() => onSingleVideoSelect(video) }
    >
      <div className='videoImage' data-testid='videoClip'>
        <img src={`https://raw.githubusercontent.com/challenges-KW/youtube-clone/main/public/${video.imageid}`} alt='video screenshot' />
      </div>
      <div className='videolistText'>
        <p className='videoName' data-testid='videoName'>
          {video.name}
        </p>
        <p className='videoPublisher' data-testid='videoName'>
          {video.publisher} <MusicIcon className='icons'/>
        </p>
        <p className='videoViews' data-testid='videoViews'>
              {video.views} views • {video.relativedate} years ago
            </p>
        </div>
    </div>
  );
}