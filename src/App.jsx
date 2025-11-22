import { useState } from 'react'
import './App.css'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import PlayList from './PlayList'

const my_test_array = [
{
  name: 'sound of silence',    
  artist: 'Simon and Garfunkel', 
  album: 'The best of Simon and Garfunkel'
}, {
  name: 'Rise',
  artist: 'Andrea Day',
  album: 'Best of Andrea Day'
}
]
 


function App() {
  const[song, setSong] = useState([])

  function handleSubmit(e){
     e.preventDefault()
  }
  
return(
  <>
  <form onSubmit={handleSubmit}>
  <SearchBar />
  <button type='submit'>Search</button>
  </form>
  <SearchResults setSong={setSong} object={my_test_array} />
  <PlayList setSong={setSong} object2={song}/>
  <button>Save To Spotify</button>
  </>

)
}

export default App
