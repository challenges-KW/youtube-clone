import './Video.css'

export const Video = (props) => {
  return (
    <div className="videoWrapper">
        <div className='theVideo'>
            {props.video}
        </div>
        <div className='videoText'>
            <h4 className='name'>
              {props.name}
            </h4>
            <p className='publisher'>
              {props.publisher}
            </p>
            <p className='views'>
              {props.views} views - {props.date} years ago
            </p>
        </div>
    </div>
  );
}