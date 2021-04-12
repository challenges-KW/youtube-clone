import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications';

export default function Header({ sidebar, setSidebar }) {

  const showSidebar = () => setSidebar(!sidebar)
  
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };


    return (
      <div className='app-header' data-testid='header'>
        <div className='app-header-left'>
          <MenuIcon 
            className='app-header-left-icon'
            onClick={showSidebar}
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
          <Button aria-controls='simple-menu' aria-haspopup='true' onClick={handleClick}>
            <VideoCallIcon 
              className='app-header-right-icon'
            />
          </Button>
          <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              getContentAnchorEl={null}
              anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
              transformOrigin={{vertical: 'top', horizontal: 'center'}}
          >
            <MenuItem onClick={handleClose}>
              Upload Video
            </MenuItem>
            <MenuItem onClick={handleClose}>
              Go live
            </MenuItem>
          </Menu>
          <Button aria-controls='simple-menu' aria-haspopup='true' onClick={handleClick2}>
            <AppsIcon 
            className='app-header-right-icon'
          />
          </Button>
          <Menu
            id='simple-menu'
            anchorEl={anchorEl2}
            keepMounted
            open={Boolean(anchorEl2)}
            onClose={handleClose2}
            getContentAnchorEl={null}
            anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
            transformOrigin={{vertical: 'top', horizontal: 'center'}}
          >
              <MenuItem onClick={handleClose2}>
                YouTube TV
              </MenuItem>
              <hr />
              <MenuItem onClick={handleClose2}>
                YouTube Music
              </MenuItem>
              <MenuItem onClick={handleClose2}>
                YouTube Kids
              </MenuItem>
              <hr />
              <MenuItem onClick={handleClose2}>
                Creator Academy
              </MenuItem>
              <MenuItem onClick={handleClose2}>
                YouTube for Artists
              </MenuItem>
          </Menu>

          <NotificationsIcon  
            className='app-header-right-icon'
          />
        </div>
      </div>
    )
  };