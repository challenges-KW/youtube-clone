import React from 'react'
import SidebarRow from './SidebarRow'
import { BrowserRouter, Link } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home'
import ExploreIcon from '@material-ui/icons/Explore'
import SubscriptionsIcon from '@material-ui/icons/SubscriptionsSharp'
import LibraryIcon from '@material-ui/icons/VideoLibrary'
import '../App.css'

export default function Sidebar( { sidebar }) {
    return (
        <div className={sidebar ? 'app-sidebar-active' : 'app-sidebar'} data-testid='sidebar'>
            <BrowserRouter>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <SidebarRow 
                        Icon={HomeIcon} 
                        title='Home'
                    />
                </Link>
            </BrowserRouter>
            <SidebarRow 
                Icon={ExploreIcon}
                title='Explore' 
            />
            <SidebarRow
                Icon={SubscriptionsIcon}
                title='Subscriptions' 
            />
            <hr />
            <SidebarRow
                Icon={LibraryIcon} 
                title='Library' 
            />
        </div>
    )
}
