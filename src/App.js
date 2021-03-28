import './App.css';
import { Video } from './videoFolder/Video.jsx'
import { VideoList } from './videoList/VideoList.jsx'
import {videoPlaylist} from './data'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications';

function App() {
    //get the data


  //pass the data to its children as props
  return (
    <div className="app">
      <div className="app-header" data-testid='header'>
            <MenuIcon />
            <img 
              classname='app-logo'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/640px-Logo_of_YouTube_%282015-2017%29.svg.png' 
              alt='YouTube logo' 
            />
            <input type="text" />
            <SearchIcon />
            <VideoCallIcon />
            <AppsIcon />
            <NotificationsIcon />
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
