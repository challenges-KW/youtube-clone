import './Video.css'

export function Video(props) {
  return (
    <div className="videoWrapper">
        <div className='theVideo'>
            {props.video}
        </div>
        <div className='videoText'>
            <h3 className='title'>
              {props.videoName}
            </h3>
            <p className='publisher'>
              {props.videoPublisher}
            </p>
            <p className='views'>
              {props.videoViews}
            </p>
            <p className='publishDate'>
              {props.date}
            </p>
        </div>
    </div>
  );
}

export default Video;