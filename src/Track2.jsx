import React from 'react';
function Track2({object2, setSong}){
  return(
        <>
    {object2.map((element, index)=> (
<div onClick={() => {setSong((prev) => (prev.filter(s => s != element)))}} key={index}><h2>{element.name}(<span>{element.artist}</span>)</h2>
<h6>{element.album}</h6>
<p>-</p>
</div>
    ))
}
        </>
    )
}

export default Track2