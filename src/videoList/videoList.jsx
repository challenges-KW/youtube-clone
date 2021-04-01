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
            })}
                </div>
    );
}