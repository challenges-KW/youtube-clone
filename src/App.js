import './App.css';
import { Video } from './videoFolder/Video.jsx'
import { VideoList } from './videoList/VideoList.jsx'
import {videoPlaylist} from './data'

function App() {
    //get the data


  //pass the data to its children as props
  return (
    <div className="app">
      <div className="app-header-div">
        <header className="app-header" data-testid='header'>
          this is a youTube clone
        </header>
      </div>
      <div className="app-content">
      <Video vid={videoPlaylist[0]} />
      <VideoList vidList={videoPlaylist}/>
      </div>
    </div>
  );
}

export default App;

// 
