import './Video.css'

export const Video = (props) => {
  return (
    <div className='videoWrapper' data-testid='videoComp'>
        <div className='theVideo' data-testid='videoClip'>
            {props.vid.video}
        </div>
        <div className='videoText'>
            <p className='name' data-testid='videoName'>
              {props.vid.name}
            </p>
            <p className='publisher' data-testid='videoPublisher'>
              {props.vid.publisher}            
            </p>
            <p className='viewsDate' data-testid='videoViewsDate'>
              {props.vid.date}
            </p>
        </div>
    </div>
  );
}