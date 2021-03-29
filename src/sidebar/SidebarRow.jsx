import React from 'react'

function SidebarRow({ Icon, title }) {
    return (
        <div className='app-sidebarRow'>
            <Icon className='app-sidebarRow-icon'/>
            <h2 className='app-sidebarRow-title'>{title}</h2>
        </div>
    )
}

export default SidebarRow
