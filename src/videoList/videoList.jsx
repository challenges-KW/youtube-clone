import '../App'
import React, { useState } from 'react'
import { Video } from '../videoFolder/Video'
import { videoPlaylist } from '../data'
import './VideoList.css';


export const VideoList = ( {vidList} ) => {

    const [playSelected, setPlaySelected] = useState(false);

    const onVideoClick = () => {
        
    };

    return (
        <div className ='videoListWrapper' data-testid='videoListWrapper'>
            <div className ='videoListVideo'>
               <div>
                   {vidList.map((video, index) => {
                   return <Video 
                        key={index}
                        vid={video}
                        onClick={onVideoClick}
                    />
                    })}
                </div>
            </div>
        </div>
    );
}