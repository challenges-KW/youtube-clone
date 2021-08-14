import React, { useState, useEffect } from 'react'
import './Video.css'
import '../theme.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

export const Video = ({ vid }) => {

  const [ likes, setLikes ] = useState((vid.likes));
  const [ dislikes, setDislikes ] = useState((vid.dislikes));

//reset likes when vid.likes changes
  useEffect(() => {
    setLikes(vid.likes);
  }, [vid.likes])

//reset dislikes when vid.dislikes changes
  useEffect(() => {
    setDislikes(vid.dislikes)
  }, [vid.dislikes])


  
  const updateLikes = async(vid) => {
    return await fetch(`/api/${vid.videoid}`)
    .then(response => {
      return response.json()
    }).then(data => {
      setLikes(data[0].likes+1);
    }
    );
  }

  const handleLikeClick = () => {
  vid.likes = likes;
  updateLikes(vid).then(setLikes(likes +1))
  }

  const updateDislikes = async(vid) => {
    return await fetch(`/api/${vid.videoid}/${vid.dislikes}`)
    .then(response => {
      return response.json()
    }).then(data => {
      setLikes(data[0].dislikes+1);
    }
    );
  }

  const handleDislikeClick = () => {
  vid.dislikes = dislikes;
  updateDislikes(vid).then(setDislikes(dislikes +1))
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
                <ThumbUpIcon id="likeButton" 
                  onClick={handleLikeClick}
                /> <span>{vid.likes}</span>
              </div>
            <div className="likes-thumbsDown">
              <ThumbDownIcon id="dislikeButton" onClick={handleDislikeClick} />
              <span>{vid.dislikes}</span>
            </div>
          </div>
        </div>
      <hr></hr>
      </div>
    </div>
   );
}