import React, { useState } from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import { Video } from './videoFolder/Video'
import { VideoList } from './videoList/VideoList'
// import { videoPlaylist } from '../server/index'
import HourglassIcon from '@material-ui/icons/HourglassEmpty'
import './App.css';


function App() {

  const [videos, setVideos] =useState([]);
  const [selectedVideo, setSelectedVideo] =useState();

  const getVideos = async() => {
    return await fetch('/videos')
    .then(res => {
      return res.json()
    })
    .then((fulfill) => {
      return fulfill
      })
}

const setVideo = () => {
  getVideos()
  .then(response => {
    setVideos(response)
    setSelectedVideo(videos[0])
    console.log('selectedVideo: ', selectedVideo)

  })
}

// console.log('this is videos after setVideo onClick: ', videos)

  return (
    <div className='app'>
      <Header />
      <div className='app-body'>
        <Sidebar />
        <div className='app-content'>
          <button variant='contained' color='primary' onClick={setVideo}>click here for a video</button>
          {
            (selectedVideo !== undefined)
            ? <Video vid={selectedVideo} />
            : <div className='app-loading'><HourglassIcon/> Video is loading...</div>
          }
          <VideoList vidList={videos} onClick={setVideos} onVideoSelect={setSelectedVideo}/>
        </div>
        
      </div>
    </div>
  );
}

export default App; 