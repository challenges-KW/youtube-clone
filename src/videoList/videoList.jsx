import '../App'
import React, { useState } from 'react'
import { videoPlaylist } from '../data'
import './VideoList.css';
import MusicIcon from '@material-ui/icons/MusicNote'



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
            {vidList.map((video, index) => {
                return <>
                    <div className='videoImage' onClick={changeState}>
                    {video.image}
                    </div>
                    <div className='videolistText'>
                        <p className='videoName'>
                            {video.name} 
                        </p>
                        <p className='videoPublisher'>
                            {video.publisher} <MusicIcon className='icons' />
                        </p>
                        <p className='videoViews'>
                            {video.views} views • {video.relativeDate} years ago
                        </p>
                    </div>
                </>
                    })}
                </div>
    );
}