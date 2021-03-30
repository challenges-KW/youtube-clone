import '../App'
import { Video } from '../videoFolder/Video'
import { videoPlaylist } from '../data'
import './VideoList.css'


export const VideoList = ( {vidList} ) => {

    

    return (
        <div className ='videoListWrapper' data-testid='videoListWrapper'>
            <div className ='videoListVideo'>
               <div>
                   {vidList.map((video, index) => {
                   return <Video 
                        key={index}
                        vid={video}
                    />
                    })}
                </div>
            </div>

        </div>
    );
}