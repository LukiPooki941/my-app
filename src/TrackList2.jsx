import React from 'react'
import Track2 from './Track2'
function TrackList2({object2, setSong, playName, setName}){
function handleChange({ target })
{
      const user_input = target.value
      setName(user_input)
      
}
return(
       <> 
        <label htmlFor='playlist'>Name for PlayList</label>
        <input name='playlist' id='playlist' type = 'text' onChange={handleChange} value={playName} />
        <Track2 object2={object2} setSong={setSong}/> 
       </>
       )
}

export default TrackList2