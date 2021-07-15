import React, {useState} from 'react'
import { BrowserRouter, Link } from 'react-router-dom' 
import { Switch, FormControlLabel, FormGroup } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import YouTubeIcon from '@material-ui/icons/YouTube'
import { Icon } from '@iconify/react'
import youtubeTv from '@iconify-icons/mdi/youtube-tv'
import youtubemusicIcon from '@iconify-icons/simple-icons/youtubemusic'
import youtubeIcon from '@iconify-icons/openmoji/youtube'
import '../App.css'
import '../theme.css';

export default function Header({ sidebar, setSidebar, setTheme }) {

  const showSidebar = () => setSidebar(!sidebar)
  
  const [searchTerms, setSearchTerms ] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [checked, setChecked] = useState(false);

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

  const handleToggle = (event) => {
    setChecked(event.target.checked)
    };

  const onModeToggle = () => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  }

  // const showSidebar = () => setSidebar(!sidebar)


    return (
      <div className='app-header' data-testid='header'>
        <div className='app-header-left'>
          <MenuIcon 
            className='app-header-left-icon'
            onClick={showSidebar}
          />
          <div className='logo-container'>
            
          </div>
        </div>
        <div className='app-header-middle'>
          <input 
            value={searchTerms}
            onChange={(e) => setSearchTerms(e.target.value)}
            type='text'
            placeholder='Search'
            className='app-inputText'
          />
          <div className='app-inputButtonContainer'>
            <BrowserRouter>
              <Link to={`/search/${searchTerms}`} style={{ textDecoration: 'none' }}>
                <SearchIcon 
                className='app-inputButton' 
                />
              </Link>
            </BrowserRouter>
          </div>
        </div>
        <div className='app-header-right'>
          <Button aria-controls='simple-menu' aria-haspopup='true' onClick={handleClick}>
            <VideoCallIcon className='app-header-right-icon'/>
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
            <MenuItem className='popup-menu' onClick={handleClose}>
              Upload Video
            </MenuItem>
            <MenuItem className='popup-menu' onClick={handleClose}>
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
            transformOrigin={{vertical: 'top', horizontal: 'center',
          }}
          >
              <MenuItem className='popup-menu' onClick={handleClose2}>
                <a href="https://tv.youtube.com" target="_blank" rel="noreferrer" className='popup-links'>
                  <Icon className='app-header-youtube-icons' icon={youtubeTv} /> YouTube TV
                </a>
              </MenuItem>
              <hr />
              <MenuItem className='popup-menu' onClick={handleClose2}>
                <a href="https://music.youtube.com/" target="_blank" rel="noreferrer" className='popup-links'>
                  <Icon className='app-header-youtube-icons' icon={youtubemusicIcon} /> YouTube Music
                </a>
              </MenuItem>
              <MenuItem className='popup-menu' onClick={handleClose2}>
                <a href="https://www.youtubekids.com/?source=youtube_web" target="_blank" rel="noreferrer" className='popup-links'>
                  <Icon className='app-header-youtube-icons' icon={youtubeIcon} /> YouTube Kids
                </a>
              </MenuItem>
              <hr />
              <MenuItem className='popup-menu' onClick={handleClose2}>
                <a href="https://creatoracademy.youtube.com/page/home?utm_source=YouTube&utm_medium=YT%20Main&utm_campaign=YT%20Appsn" target="_blank" rel="noreferrer" className='popup-links'>
                  <YouTubeIcon className='app-header-youtube-icons' /> Creator Academy
                </a>
              </MenuItem>
              <MenuItem className='popup-menu' onClick={handleClose2}>
                <a href="https://artists.youtube.com/" target="_blank" rel="noreferrer" className='popup-links'>
                  <YouTubeIcon className='app-header-youtube-icons' /> YouTube for Artists
                </a>
              </MenuItem>
          </Menu>


          <FormGroup>
            <FormControlLabel 
              control={<Switch size="small" checked={checked} onChange={handleToggle} onClick={onModeToggle} className="toggleStyle" />}
            />
          </FormGroup>


          <NotificationsIcon  
            className='app-header-right-icon'
          />

        </div>
      </div>
    )
  };