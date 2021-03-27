import '../App'
// import {Video} from '../videoFolder/Video'
import './VideoList.css'

export const VideoList = (props) => {
    return (
        <div className ='videoListWrapper' data-testid='videoListWrapper'>
            <ul className ='videoListVideo'>
               {/* <li> {props.vidList.map((video, index) => {
                   return  <Video key={index} vid={video} />
                   
                })}</li> */}
            </ul>

        </div>
    );
}