import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
  function handleSubmit(e){
     e.preventDefault()
  }
return(
  <>
  <form onSubmit={handleSubmit}>
  <SearchBar />
  <button type='submit'>Search</button>
  </form>
  <SearchResults  object={my_test_array} />
  <PlayList object2={my_test_array}/>
  <button>Save To Spotify</button>
  </>
)
}

export default App
