import React, { useState, useEffect } from 'react'
import './Video.css'
import '../theme.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

export const Video = ({ vid }) => {
  

  const [ likes, setLikes ] = useState(0);
  const [ dislikes, setDislikes ] = useState(0);

  useEffect(() => {
    const parsedLikes = Number(localStorage.getItem('likes') || 0)
    setLikes(parsedLikes)
  }, [])

  useEffect(() => {
    localStorage.setItem('likes', likes) 
  }, [likes])

  const handleLikes = () => {
    setLikes(prevLikes => prevLikes + 1);
  };

  const handleDislikes = () => {
    setDislikes(prevDislikes => prevDislikes + 1)
  }

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
        <div className='videoDetails'>
          <div className='viewsDate' data-testid='videoViewsDate'>
            {vid.views} views • {vid.date}
          </div>
          <div className='likes'>
            <div className='likes-thumbsUp'>
              <ThumbUpIcon 
                onClick={handleLikes}
              /> <span>{likes}</span>
            </div>
            <div className="likes-thumbsDown">
              <ThumbDownIcon 
                onClick={handleDislikes}
              /> <span>{dislikes}</span>
            </div>
          </div>
        </div>
      <hr></hr>
      </div>
    </div>
  );
}