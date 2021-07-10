import '../App'
import React from 'react'
import './VideoList.css'
import { SingleVideo } from './SingleVideo';

export const VideoList = ( { vidList, onVideoSelect } ) => {

    return (
        <div className ={'videoListWrapper'} data-testid='videoListWrapper'>

            {vidList.map((video, index) => {
                // console.log("video likes in videolist: ", video.likes)
                return <SingleVideo 
                    key={index}
                    video={video}
                    onSingleVideoSelect={onVideoSelect}
                />
            })}
                </div>
    );
}