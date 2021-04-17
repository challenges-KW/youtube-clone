import React from 'react'
import './Video.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'

export const Video = ({ vid }) => {
  
  return (
    <div  
      className='videoWrapper'>
      <div className='theVideo' data-testid='videoClip'>
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${vid.videoid}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className='videoText'>
        <p className='name' data-testid='videoName'>
          {vid.name}
        </p>
        <div className='viewsDate' data-testid='videoViewsDate'>
            {vid.views} views • {vid.date}
            <ThumbUpIcon />
        </div>
        </div>
      <hr></hr>
    </div>
  );
}