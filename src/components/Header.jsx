import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'



function Header() {
    
    const[animate, setAnimate] = useState(true)
    let circle = document.getElementsByClassName("circle") 
const usePathname = ()=>{
    const location = useLocation();
    return location.pathname
}

//OPLOSSEN PATHNAME EN NAVBAR
console.log(usePathname())
function transform(e){
    
   console.log (e.target.innerText)

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
        
                <Link to={"/" }><div className="circle dropbal" onClick={transform}> HOME </div></Link>
       
                
            </li>
            <li>
          
                <Link to={"/projects"}>  <div className="circle" onClick={transform}> PROJECTS </div></Link>
               
            </li>
            <li>
           
                <Link to={"/contact"}> <div className="circle" id="contact" onClick={transform}> CONTACT </div></Link>
               
            </li> 
            <li>
          
                <Link to={"/about"}>  <div className="circle" id="about" onClick={transform}> EXTRA'S  </div> </Link>
              
            </li>

       
       
        </ul>
      
    </div>
  )
}

export default Header