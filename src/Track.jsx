import React, {useState} from 'react'



function Track({ setSong, object}){

    return(
        <>
    {object.map((element, index) => (
<div  onClick={() => {setSong(prev => { if (prev.includes(element)){ return [...prev] } else {return [...prev, element]}})}} key={index}><h2>{element.name}(<span>{element.artist}</span>)</h2>
<h6>{element.album}</h6>
<p>+</p>
</div>
    )
)
}
        </>
    )
}

export default Track

//setSong(prev => ([...prev, element]))