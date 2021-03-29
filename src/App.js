import './App.css';
import Header from './header/Header'
import { Video } from './videoFolder/Video'
import { VideoList } from './videoList/VideoList'
import {videoPlaylist} from './data'


function App() {
    //get the data


  //pass the data to its children as props
  return (
    <div className='app'>
      <Header />
      <div className="app-content">
      <Video vid={videoPlaylist[0]} />
      <VideoList vidList={videoPlaylist}/>
      </div>
    </div>
  );
}

export default App;

// 
