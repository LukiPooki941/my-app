import React from 'react';

function Track2(props){
  return(
        <>
    {props.object2.map(element => (
<div key={element.artist}><h2>{element.name}(<span>{element.artist}</span>)</h2>
<h6>{element.album}</h6>
</div>
    )
)
}
        </>
    )
}

export default Track2