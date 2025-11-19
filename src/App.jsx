import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import PlayList from './PlayList'
import Track from './Track'
import TrackList from './TrackList'

function App() {
return(
  <>
  <SearchBar />
  <SearchResults />
  <TrackList />
  <PlayList />
  <p>Now I am in control</p>
  <button>Save To Spotify</button>
  <button>Search</button>
  </>
)
}

export default App
