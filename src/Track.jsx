import React from 'react'

function Track(props){
    return(
        <>
    {props.object.map(element => (
<div key={element.name}><h2>{element.name}(<span>{element.artist}</span>)</h2>
<h6>{element.album}</h6>
</div>
    )
)
}
        </>
    )
}

export default Track