import SidebarRow from './SidebarRow'
import HomeIcon from '@material-ui/icons/Home'
import ExploreIcon from '@material-ui/icons/Explore'
import SubscriptionsIcon from '@material-ui/icons/SubscriptionsSharp'
import LibraryIcon from '@material-ui/icons/VideoLibrary'
import '../App.css'

export default function Sidebar() {
    
    return (
        <div className='app-sidebar' data-testid='sidebar'>
            <SidebarRow 
                Icon={HomeIcon} 
                title='Home'
            />
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
