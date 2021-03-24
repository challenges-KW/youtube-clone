import './App.css';
import { Video } from './videoFolder/Video.jsx'

function App() {
    //get the data
    let video1 = {
      video: <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqbkdrZFp3eGJRallwWGtCSTl3TEJ5ZFdJZm5NZ3xBQ3Jtc0tuM2xteUE3VTJNdGV1dFVoWGhqWVBGanRyYlRZbzZNVExtQmVEX2xfM2otX1lmMXQ5SThjVjdjX2NjZjdiemk1UzlsTlpvREdCZHVOS3JmdTFTeFNna1czcjRWUVpmcjV4OGc3cXpXTmZBWlBLVS1Qdw&amp;q=https%3A%2F%2Flemonade.tidal.com" rel="nofollow" target="_blank" dir="auto">https://lemonade.tidal.com</a>,
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
    </div>
  );
}

export default App;
