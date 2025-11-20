import React from 'react'
import TrackList from './TrackList'

function SearchResults(props){
return (<>
<TrackList object={props.object}/>
</>)
}

export default SearchResults