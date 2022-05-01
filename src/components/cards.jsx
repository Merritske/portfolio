import React from 'react'

function Cardsection({ image,alt, link, uitleg, github}) {
  return (
    <div className='card'>
<a href={link} rel="noreferrer" target="_blank" >
<img src={image} alt={alt}/>
</a>  
  <h3>
        
{uitleg}
    </h3>
    <a href={github} rel="noreferrer" target="_blank"  ><img src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png' alt="github logo" id="github"  /> </a> 
    </div>
  )
}

export default Cardsection