import '../App'
import React, { useState } from 'react'
import './VideoList.css';
import MusicIcon from '@material-ui/icons/MusicNote'
import { Video } from '../videoFolder/Video'
import { SingleVideo } from './SingleVideo'

export const VideoList = ( {vidList, onVideoSelect } ) => {
  

    return (
        <div className ='videoListWrapper' data-testid='videoListWrapper' onClick={onVideoSelect}>
            {vidList.map((video, index) => {
                return <SingleVideo 
                    key={index}
                    video={video}
                    onClick={() => onVideoSelect(video)}
                />
                // <div >
                //     <div className='videoImage'>
                //     {video.image}
                //     </div>
                //     <div className='videolistText'>
                //         <p className='videoName'>
                //             {video.name} 
                //         </p>
                //         <p className='videoPublisher'>
                //             {video.publisher} 
                //             <MusicIcon className='icons' />
                //         </p>
                //         <p className='videoViews'>
                //             {video.views} views • {video.relativeDate} years ago
                //         </p>
                //     </div>
                // </div>
                    })}
                </div>
    );
}