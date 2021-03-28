import '../App'
import { Video } from '../videoFolder/Video'
import { videoPlaylist } from '../data'
import './VideoList.css'

export const VideoList = (props) => {
    function clickHandler() {
        console.log('Button clicked')
    }
    return (
        <div className ='videoListWrapper' data-testid='videoListWrapper'>
            <ul className ='videoListVideo'>
                <button onClick={clickHandler}>click</button>
               <li> 
                   {props.vidList.map((video, index) => {
                   return  <Video key={index} vid={video} />
                   
                    })}

                </li>
            </ul>

        </div>
    );
}