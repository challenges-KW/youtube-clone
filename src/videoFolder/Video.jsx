import './Video.css'

export function Video(props) {
  return (
    <div className="videoWrapper">
        <div className='theVideo'>
            {props.video}
        </div>
        <div className='videoText'>
            <p className="text">
              video text goes here
            </p>
        </div>
    </div>
  );
}

export default Video;