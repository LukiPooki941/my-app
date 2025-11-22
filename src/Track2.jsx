import React from 'react';

function Track2({object2, setSong}){
  return(
        <>
    {object2.map((element , index)=> (
<div onClick={(prev) => {setSong(prev.filter(song => ()))}} key={index}><h2>{element.name}(<span>{element.artist}</span>)</h2>
<h6>{element.album}</h6>
</div>
    ))
}
        </>
    )
}

export default Track2