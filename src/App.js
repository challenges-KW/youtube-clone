import './App.css';
import { Video } from './videoFolder/Video.jsx'

function App() {
    //get the data
    let video1 = {
      video: <iframe width="560" height="315" src="https://www.youtube.com/embed/PeonBmeFR8o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
      name: 'Beyonce - Hold Up',
      publisher: 'Beyonce',
      views: '200M',
      date: 'Jan 29, 2019'
    } 

  //pass the data to its children as props
  return (
    <div className="App">
      <header className="App-header">
        This will be a YouTube clone
      </header>
      {Video(video1)}
    </div>
  );
}

export default App;
