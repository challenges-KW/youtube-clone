import React, { useState } from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import { Video } from './videoFolder/Video'
// import { VideoList } from './videoList/VideoList'
// import { videoPlaylist } from './data'
import './App.css';


function App() {

  return (
    <div className='app'>
      <Header />
      <div className='app-body'>
        <Sidebar />
        <div className='app-content'>


        </div>
        
      </div>
    </div>
  );
}

export default App; 
