import React, { useState, useEffect } from 'react'
import './Video.css'
import '../theme.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

export const Video = ({ vid }) => {

  const [ likes, setLikes ] = useState(vid.likes)
  const [ dislikes, setDislikes ] = useState([]);


  // useEffect(() => {
  //   //if you want something to change after initial render in frontend -- refresh page
  //     updateLikes(vid)
  //     // console.log("vid.likes: ", vid.likes)
  //     .then(response => {
  //       console.log("vid.likes: ", vid.likes)
  //       setLikes(response[0].likes)
  //       console.log("vid.likes 2: ", vid.likes)
  //     })
  //   }
  // , [])

  const updateLikes = async(vid) => {
    return await fetch(`/api/${vid.videoid}`)
    .then(res => {
      return res.json()
    })
}

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
              <ThumbUpIcon id="likeButton"
                onClick={() => updateLikes(vid).then(setLikes(likes + 1))}
              /> <span>{vid.likes}</span>

            </div>
            <div className="likes-thumbsDown">
              <ThumbDownIcon /> 
              <span>{vid.dislikes}</span>
            </div>
          </div>
        </div>
      <hr></hr>
      </div>
    </div>
  );
}