import './Video.css'

export const Video = (props) => {
  return (
    <div className='videoWrapper' data-testid='videoComp'>
        <div className='theVideo' data-testid='videoClip'>
            {props.video}
        </div>
        <div className='videoText'>
            <p className='name' data-testid='videoName'>
              {props.name}
            </p>
            <p className='publisher' data-testid='videoPublisher'>
              {props.publisher}
            </p>
            <p className='viewsDate' data-testid='videoViewsDate'>
              {props.views} views - {props.date}
            </p>
        </div>
    </div>
  );
}