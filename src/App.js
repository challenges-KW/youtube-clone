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
    <div className='app'>
      <div className='app-header' data-testid='header'>
        <div className='app-header-left'>
          <MenuIcon className='app-header-icon' />
          <img 
            className='app-logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png' 
            alt='YouTube logo' 
          />
        </div>
        <div className='app-header-middle'>
          <input 
            type='text'
            placeholder='Search'
          />
          <SearchIcon className='app-inputButton' />
        </div>
        <div className='app-header-right'>
          <VideoCallIcon className='app-header-icon'/>
          <AppsIcon className='app-header-icon'/>
          <NotificationsIcon className='app-header-icon'/>
        </div>
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
