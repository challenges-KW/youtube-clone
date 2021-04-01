import React from 'react'
import './VideoList.css';

export const SingleVideo = ( props ) => {
  console.log('this is vid: ', props)
  return (
    <div  
      className='videoWrapper' data-testid='videoComp'>
      <div className='videoImage' data-testid='videoClip'>
        {props.video.image}
      </div>
      <div className='videoText'>
        <p className='name' data-testid='videoName'>
          {props.video.name}
        </p>
        <p className='viewsDate' data-testid='videoViewsDate'>
              {props.video.views} views • {props.video.date}
            </p>
        </div>
      <hr></hr>
    </div>
  );
}