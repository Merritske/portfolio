import React, { useEffect, useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import sound from "../music/Hey Man.mp3"


function Header() {
    console.log(window.location.pathname)
    const[animate, setAnimate] = useState(true)
    let circle = document.getElementsByClassName("circle") 
  const location = useLocation();


//OPLOSSEN PATHNAME EN NAVBAR
let pathName =  location.pathname
useEffect(()=>{

let slash = "/"
for(let i= 0 ; i< circle.length; i++){
    console.log(pathName)
    console.log(slash+ circle[i].innerText)
    if(pathName == slash + circle[i].innerText){
       console.log('poep')
    }
}
},[pathName])


function transform(e){
console.log(location.pathname)
   console.log (e.target.innerText)

     for(let x = 0; x< circle.length; x++){
if(animate && circle[x].innerText=== e.target.innerText ){

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

//probleem met de navbar die niet gelinkt is met de route...
//<NavLink to="/blog" className={({!isActive})=>(isActive? "active: ")}></NavLink>


//music
var music = document.getElementsByClassName("audio")
console.log(music)
 var audio = new Audio(`${sound}`)
 console.log(audio)
const [playM, setPlayM] = useState(true)
const audioRef = useRef(audio);
function mute(){
if(playM ){
audioRef.current.play()

} 
 else if(!playM){
 audioRef.current.pause()
 }
setPlayM(!playM)
console.log(playM)
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
          
                <Link to={"/about"}>  <div className="circle" id="about" onClick={transform}> ABOUT</div> </Link>
              
            </li> 

       
       
        </ul>
          
        <div className='music'>
<i className='fa fa-music' 
 onClick={mute}
></i> 
<audio loop 
src={sound} type="audio/mp3" 
 className='audio'>  
     </audio>
 <h5>Hey man, Eels  </h5>
</div>
    </div>
  )
}

export default Header