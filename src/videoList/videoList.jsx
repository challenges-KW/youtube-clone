import '../App'
import { Video } from '../videoFolder/Video'
import { videoPlaylist } from '../data'
import './VideoList.css'


export const VideoList = (props) => {

    // const playVideo = () => {
    //     const handleClick = (e) => {

    //     }
    // }

    return (
        <div className ='videoListWrapper' data-testid='videoListWrapper'>
            <div className ='videoListVideo'>
               <div>
                   {props.vidList.map((video, index) => {
                   return <Video 
                        key={index}
                        vid={video}
                        // onClick={handleClick} 
                    />
                    })}
                </div>
            </div>

        </div>
    );
}