
import './videoList.css'
import '../App'

export const VideoList = (props) => {
    return (
        <div className ='videoListWrapper' data-testid='videoListWrapper'>
            <div className ='videoListVideo'>
                {props[0].video}
            </div>
            <div className ='videoListName'>
                {props[0].name}
            </div>
            <div className='videoListPublisher'>
                {props[0].publisher}
            </div>
            <div className='videoListViews'>
                {props[0].views} - {props[0].date} years ago
            </div>

            <div className ='videoListVideo'>
                {props[1].video}
            </div>
            <div className ='videoListName'>
                {props[1].name}
            </div>
            <div className='videoListPublisher'>
                {props[1].publisher}
            </div>
            <div className='videoListViews'>
                {props[1].views} - {props[1].date} years ago
            </div>

            <div className ='videoListVideo'>
                {props[2].video}
            </div>
            <div className ='videoListName'>
                {props[2].name}
            </div>
            <div className='videoListPublisher'>
                {props[2].publisher}
            </div>
            <div className='videoListViews'>
                {props[2].views} - {props[2].date} years ago
            </div>

            <div className ='videoListVideo'>
                {props[3].video}
            </div>
            <div className ='videoListName'>
                {props[3].name}
            </div>
            <div className='videoListPublisher'>
                {props[3].publisher}
            </div>
            <div className='videoListViews'>
                {props[3].views} - {props[3].date} years ago
            </div>

        </div>
    );
}