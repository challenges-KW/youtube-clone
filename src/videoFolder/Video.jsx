export function Video(props) {
  return (
    <div className="videoWrapper">
        <div className='theVideo'>
            {props.video}
        </div>
        <div className='videoText'>
            video text goes here
        </div>
    </div>
  );
}

export default Video;