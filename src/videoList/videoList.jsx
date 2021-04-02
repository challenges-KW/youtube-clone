import '../App'
import React from 'react'
import './VideoList.css';
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