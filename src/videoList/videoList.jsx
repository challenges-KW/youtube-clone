import './videoList.css'

export const videoList = (props) => {
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
                {props[0].views}
            </div>
            <div className='videoListDate'>
                {props[0].date}
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
                {props[1].views}
            </div>
            <div className='videoListDate'>
                {props[1].date}
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
                {props[2].views}
            </div>
            <div className='videoListDate'>
                {props[2].date}
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
                {props[3].views}
            </div>
            <div className='videoListDate'>
                {props[3].date}
            </div>

        </div>
    );
}