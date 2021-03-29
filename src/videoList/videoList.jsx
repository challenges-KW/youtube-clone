import React, {useState} from 'react'
import '../App'
import { Video } from '../videoFolder/Video'
import { videoPlaylist } from '../data'
import './VideoList.css';


export const VideoList = (props) => {
    const [todos, setTodos] = useState( {videoPlaylist})

    return (
        <div className ='videoListWrapper' data-testid='videoListWrapper'>
            <div className ='videoListVideo'>
               <div> 
                   {props.vidList.map((video, index) => {
                   return  <Video key={index} vid={video} />
                    })}

                </div>
            </div>

        </div>
    );
}