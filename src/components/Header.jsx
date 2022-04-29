import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
    const[animate, setAnimate] = useState(true)
    let circle = document.getElementsByClassName("circle") 

function transform(e){
     for(let x = 0; x< circle.length; x++){
if(animate && circle[x].innerText=== e.target.innerText){
            circle[x].classList.add("dropbal")
            circle[x].classList.remove("upbal")
        }
        
        else {
       
         circle[x].classList.add("upbal")
               circle[x].classList.remove("dropbal")
         }
    
}
setAnimate(true)

}

   
  return (
    <div>
        <ul className='navbar'>
        

 <li>
        
                <Link to="/" className='linktext'><div className="circle" onClick={transform}> HOME </div></Link>
       
                
            </li>
            <li>
          
                <Link to="/projects">  <div className="circle" onClick={transform}> PROJECTS </div></Link>
               
            </li>
            <li>
           
                <Link to="/contact"> <div className="circle" onClick={transform}> CONTACT </div></Link>
               
            </li> 
            <li>
          
                <Link to="/about">  <div className="circle" onClick={transform}> EXTRA'S  </div> </Link>
              
            </li>

       
       
        </ul>
      
    </div>
  )
}

export default Header