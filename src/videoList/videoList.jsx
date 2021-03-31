import '../App'
import React, { useState } from 'react'
import { videoPlaylist } from '../data'
import './VideoList.css';


export const VideoList = ( {vidList} ) => {
    const [state, setstate] = useState({
        date: '',
        id: '',
        image: '',
        name: '',
        publisher: '',
        relativeDate: '',
        video: '',
        views: ''
    })
  
    const changeState = (e) => {  
        e.preventDefault()
        console.log('this is e',  e.target)
        setstate({
            date: e.target.value,
            id: e.target.value,
            image: e.target.value,
            name: e.target.value,
            publisher: e.target.value,
            relativeDate: e.target.value,
            video: e.target.value,
            views: e.target.value
        }); 
       }; 
  


    return (
        <div className ='videoListWrapper' data-testid='videoListWrapper'>
            <div className ='videoListVideo'>
               <div>
                   {vidList.map((video, index) => {
                   return <div onClick={changeState} > 
                                <div className='videoImage'>
                                    {video.image}
                                </div>
                                <div className='videoName'>
                                    {video.name}
                                </div>
                                <div className='videoPublisher'>
                                    {video.publisher}
                                </div>
                                <div className='videoViews'>
                                {video.views} views • {video.relativeDate} years ago
                                </div>
                            </div>
                    })}
                </div>
            </div>
        </div>
    );
}