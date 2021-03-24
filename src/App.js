import './App.css';
import { Video } from './videoFolder/Video.jsx'

function App() {
    //get the data
    let video1 = {
      video: '',
      name: 'Beyonce - Hold Up',
      publisher: 'Beyonce',
      views: '200M',
      date: '4'
    } 
  //pass the data to its children as props
  return (
    <div className="App">
      <header className="App-header">
        This will be a YouTube clone
      </header>
      {Video(video1)}
      {/* <Video getname={Kathy}/> */}
    </div>
  );
}

export default App;
