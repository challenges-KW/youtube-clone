import './App.css';
import { Video } from './videoFolder/Video.jsx'
import { videoList } from './videoList/videoList.jsx'

function App() {
    //get the data
    let video1 = {
      video: <iframe width="560" height="315" src="https://www.youtube.com/embed/PeonBmeFR8o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
      name: 'Beyonce - Hold Up',
      publisher: 'Beyonce',
      views: '200M',
      date: 'Jan 29, 2019'
    } 

    let videoPlaylist = [
      {
        video: <iframe width="140" height="78.75" src="https://www.youtube.com/embed/IGrV5mvlY8w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
        name: 'Overprotected',
        publisher: 'Britney Spears',
        views: '741M',
        date: 11
      }, 
      {
        video: 'video',
        name: 'How Will I Know',
        publisher: 'Whitney Houston',
        views: '851M',
        date: 10
      }, 
      {
        video: 'video',
        name: 'Always Be My Baby',
        publisher: 'Mariah Carey',
        views: '900M',
        date: 9
      }, 
      {
        video: 'video',
        name: 'We Found Love',
        publisher: 'Rihanna',
        views: '960M',
        date: 8
      }, 
    ]

  //pass the data to its children as props
  return (
    <div className="App">
      <header className="App-header">
        This will be a YouTube clone
      </header>
      {Video(video1)}
      {videoList(videoPlaylist)}
    </div>
  );
}

export default App;
