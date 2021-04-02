import React, { useState } from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import { Video } from './videoFolder/Video'
import { VideoList } from './videoList/VideoList'
import { videoPlaylist } from './data'
import './App.css';


function App() {

    const [selectedVideo, setSelectedVideo] =useState(videoPlaylist[0])

    const setVideo = (video) => {
      console.log('video in setVideo:', video)
      setSelectedVideo(video)
    }

  return (
    <div className='app'>
      <Header />
      <div className='app-body'>
        <Sidebar />
        <div className='app-content'>
          <Video vid={selectedVideo} />
          <VideoList 
            vidList={videoPlaylist}
            onVideoSelect={setVideo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

// 
