import React from 'react';
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications';

export default function Header({open, setOpen}) {
    return (
      <div className='app-header' data-testid='header'>
        <div className='app-header-left'>
          <MenuIcon 
            className='app-header-left-icon'
            open={ open }
            // onClick={() => setOpen(!open)}
          />
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
            className='app-inputText'
          />
          <SearchIcon 
            className='app-inputButton' 
          />
        </div>
        <div className='app-header-right'>
          <VideoCallIcon 
            className='app-header-right-icon'
          />
          <AppsIcon 
            className='app-header-right-icon'
          />
          <NotificationsIcon  
            className='app-header-right-icon'
          />
        </div>
      </div>
    )
  };