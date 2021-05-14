import '../App'
import React, {useState} from 'react'
import './VideoList.css'
import '../theme.css'
import { SingleVideo } from './SingleVideo';

export const VideoList = ( { vidList, onVideoSelect } ) => {
    const [theme, setTheme] = useState('dark');

    return (
        <div className ={`videoListWrapper ${theme}`} data-testid='videoListWrapper'>

            {vidList.map((video, index) => {
                return <SingleVideo 
                    key={index}
                    video={video}
                    onSingleVideoSelect={onVideoSelect}
                />
            })}
                </div>
    );
}