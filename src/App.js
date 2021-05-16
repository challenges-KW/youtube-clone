import React, { useState, useEffect } from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import { Video } from './videoFolder/Video'
import { VideoList } from './videoList/VideoList'
import HourglassIcon from '@material-ui/icons/HourglassEmpty'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import './theme.css';


function App() {

  const [theme, setTheme] = useState('light');
  const [videos, setVideos] =useState([])
  const [selectedVideo, setSelectedVideo] =useState();
  const [sidebar, setSidebar] = useState(false);

  const onModeToggle = () => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  };

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
    <div className={`app ${theme}`}>
      <Header sidebar={sidebar} setSidebar={setSidebar} theme={theme} setTheme={setTheme}/>
      <div className='app-body'>
        <Sidebar sidebar={sidebar} />
        <Router>
          <Switch>
            <Route path='/search'>
              <h1>Search...</h1>
            </Route>
            <Route path='/'>
              <div className='app-content' id='page-wrap'>

                {
                  (selectedVideo !== undefined)
                  ? <Video vid={selectedVideo} />
                  : <div className='app-loading'><HourglassIcon/> Video is loading...</div>
                }
                <VideoList vidList={videos} onVideoSelect={setSelectedVideo}/>
              </div>
              </Route>
          </Switch> 
        </Router>       
      </div>
    </div>
  );

}

export default App;