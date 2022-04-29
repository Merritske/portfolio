import React from 'react'

function Cardsection({ image, link, uitleg}) {
  return (
    <div className='card'>
<a href={link} target="_blank" >
<img src={image} style={{"width": 300, "height":200}}/>



</a>  
  <h3>
        
{uitleg}
    </h3>
    </div>
  )
}

export default Cardsection