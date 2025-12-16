import React from 'react'
import TrackList2 from './TrackList2'

function PlayList({object2, setSong, playName, setName}) {
    return (
<TrackList2 playName={playName} setName={setName} object2={object2} setSong={setSong}/>
    )
}

export default PlayList