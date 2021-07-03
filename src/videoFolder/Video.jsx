import React, { useState, useEffect } from 'react'
import './Video.css'
import '../theme.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

export const Video = ({ vid }) => {

  const [ likes, setLikes ] = useState((vid.likes));
  let [ newLikes, setNewLikes ] = useState(0)

  vid.likes = likes

  //causes endless rerendering and eventual crash
  // useEffect(() => {
  //   setLikes(vid.likes);
  // }, [vid.likes])
  
  // console.log(`THESE ARE VID LIKES ${vid.likes}`)
  // console.log(`THESE ARE LIKES ${likes}`)
  // console.log("vid id and vid likes after state declaration", vid.videoid, "'s like are ", vid.likes)

  
  // const [ likes, setLikes ] = useState(vid.likes)
  // const [ dislikes, setDislikes ] = useState([]);

  // useEffect(() => {
  //   //if you want something to change after initial render in frontend -- refresh page
  //     updateLikes(vid)
  //     .then(response => {
  //       setLikes(response[0].likes)
  //     })
  //   }
  // , [])

  const updateLikes = async(vid) => {
    return await fetch(`/api/${vid.videoid}`)
    .then(res => {
      // console.log("res from api/vidvideoid: ", res)
      return res.json()
    })
}

// useEffect (() => {
//   //change to vid.likes of currently selected video
//   setLikes(vid.likes);
//   console.log(`effect vid likes - ${vid.likes} and likes - ${likes}`)
//   //combine into newLikes
//   newLikes =+likes
//   console.log(`effect newLikes - ${newLikes}`)
// }, [vid])

const handleClick = () => {
  console.log("handleClick: ", vid.videoid, "'s likes are ", likes);
  updateLikes(vid).then(setLikes(likes +1))
  }

// useEffect(() => {
//   // console.log("vid id and vid likes in use effect", vid.videoid, "'s like are ", vid.likes)
//   setLikes(vid.likes)    
//   // vid.likes = likes;
//   // console.log("updatedlikes only: ", updatedLikes)
// }, [count]);

  // const handleClick = () => {
  //   console.log("vid in handleClick: ", vid)
  //   updateLikes(vid).then(setLikes(likes + 1))
  // }

  // const handleDislikes = () => {
  //   setDislikes(prevDislikes => prevDislikes + 1)
  // }

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
                  onClick={handleClick}
                /> <span>{vid.likes}</span>
              </div>

            {/* <div className='likes-thumbsUp'>
              <ThumbUpIcon id="likeButton" 
                onClick={() => {
                  updateLikes(vid).then(setLikes(likes + 1))}
                }
              /> <span>{vid.likes}</span>
            </div> */}

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