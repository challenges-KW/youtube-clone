import React, { useState } from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import { Video } from './videoFolder/Video'
// import { VideoList } from './videoList/VideoList'
// import { videoPlaylist } from './data'
import './App.css';
import Button from '@material-ui/core/Button';


function App() {

  const [videos, setVideos] =useState([]);
  const [selectedVideo, setSelectedVideo] =useState();

  const setVideo = () => {
    // console.log('video in setVideo: ', video)
    // setSelectedVideo(video)
    fetch('/videos')
    .then(res => {
      console.log(res);
      return res.json()
    })
  }



  return (
    <div className='app'>
      <Header />
      <div className='app-body'>
        <Sidebar />
        <div className='app-content'>
        <button variant='contained' color='primary' onClick={setVideo}>click here for a video</button>


        </div>
        
      </div>
    </div>
  );
}

export default App; 