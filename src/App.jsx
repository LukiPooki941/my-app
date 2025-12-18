import { useState } from 'react'
import './App.css'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import PlayList from './PlayList'
import { Authenticater, onPageLoad } from './userauth'
const defaultName = "My PlayList";
const my_test_array = [
{
  name: 'sound of silence',    
  artist: 'Simon and Garfunkel', 
  album: 'The best of Simon and Garfunkel',
  uri: "abc3g42i2iwem"
}, {
  name: 'Rise',
  artist: 'Andrea Day',
  album: 'Best of Andrea Day',
  uri: "jewnfjkqwfbq984923huief"
}
];


 


function App() {
  const[song, setSong] = useState([])
  const[playlist, setPlaylist] = useState(defaultName)
  

  const handleSubmit = (e) => {
    for(let element in song)
      {
        console.log(song[element].uri)
      }
        console.log(playlist);
     e.preventDefault();
     setSong([]);
     setPlaylist(defaultName);
  }
  console.log(window.location.href)
  
return(
  <>
  <div onLoad={onPageLoad}>
  <button onClick={Authenticater}>press me</button>
  <SearchBar />
  <button type='submit'>Search</button>
  <SearchResults setSong={setSong} object={my_test_array} />
  <PlayList playName={playlist} setName={setPlaylist} setSong={setSong} object2={song}/>
  <button onClick={handleSubmit}>Save To Spotify</button>
  </div>
  </>

)
}

export default App
