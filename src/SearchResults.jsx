import React from 'react'
import TrackList from './TrackList'

function SearchResults({setSong, object}){
return (<>
<TrackList setSong={setSong} object={object}/>
</>)
}

export default SearchResults