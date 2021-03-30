import React, {useState} from 'react'
import './Video.css'
import { VideoList } from '../videoList/VideoList';

export const Video = ( {vid} ) => {
  return (
    <div className='videoWrapper' data-testid='videoComp'>
        <div className='theVideo' data-testid='videoClip'>
            {vid.video}
        </div>
        <div className='videoText'>
            <p className='name' data-testid='videoName'>
              {vid.name}
            </p>
            <p className='publisher' data-testid='videoPublisher'>
              {vid.publisher}            
            </p>
            <p className='viewsDate' data-testid='videoViewsDate'>
              {vid.views} views • {vid.date}
            </p>
        </div>
    </div>
  );
}
