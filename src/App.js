import React, { useState, useEffect } from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import { Video } from './videoFolder/Video'
import { VideoList } from './videoList/VideoList'
import HourglassIcon from '@material-ui/icons/HourglassEmpty'
import './App.css';

function App() {

  const [videos, setVideos] =useState([]);
  const [selectedVideo, setSelectedVideo] =useState();
  // const [open, setOpen] = useState(false);

  const getVideos = async() => {
    return await fetch('/api')
    .then(res => {
      return res.json()
    })
    .then((fulfill) => {
      return fulfill
      })
}

  useEffect(() => {
    const setVideo = () => {
      getVideos()
      .then(response => {
        setVideos(response)
        setSelectedVideo(response[0])
      })
    }
  setVideo();
}, []
);


  return (
    <div className='app'>
      <Header />
      <div className='app-body'>
        {/* <Sidebar open={open} setOpen={setOpen} /> */}
        <div className='app-content' >
          {
            (selectedVideo !== undefined)
            ? <Video vid={selectedVideo} />
            : <div className='app-loading'><HourglassIcon/> Video is loading...</div>
          }
          <VideoList vidList={videos} onVideoSelect={setSelectedVideo}/>
        </div>
        
      </div>
    </div>
  );

}

export default App;