import React from 'react'
import './Video.css'

export const Video = ({ vid }) => {
  return (
    <div  
      className='videoWrapper' data-testid='videoComp'>
      <div className='theVideo' data-testid='videoClip'>
      <iframe width="560" height="315" src={`https://www.youtube.com/embed/${vid.videoSource}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className='videoText'>
        <p className='name' data-testid='videoName'>
          {vid.name}
        </p>
        <p className='viewsDate' data-testid='videoViewsDate'>
              {vid.views} views • {vid.date}
            </p>
        </div>
      <hr></hr>
    </div>
  );
}