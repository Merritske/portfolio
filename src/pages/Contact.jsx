import React from 'react'
import { pdfjs } from 'react-pdf'

// import sound from '../music/don\'t stop me.mp3'
import cv from '../pdf/CV front-end.pdf'
import linkedIn from "../Images/linkedin.png"

function Contact() {
   pdfjs.GlobalWorkerOptions.workerSrc = 
   `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

   function about(){
     document.getElementById("about").classList.add("dropbal")
     document.getElementById("contact").classList.remove("dropbal")
   }
function envelopeO(){
  document.getElementById("mail").classList.remove('fa-envelope-o')
  document.getElementById("mail").classList.add("fa-envelope-open-o")
}
function envelopD(){
  document.getElementById("mail").classList.remove('fa-envelope-open-o')
  document.getElementById("mail").classList.add("fa-envelope-o")
}
  return (
    <div className='contact'>
 
 
            <br />
            <div className='motivatie'>

           
     <p>
Het leven loopt niet voor iedereen van een leien dak. Soms gaat het met vallen en opstaan en op een dag vind je de job van je leven: front-end developer.
Het avontuur begint nadat het besef kwam dat een vaste job in het onderwijs geen optie was. Een carrièreswitch is dan de enige weg vooruit. Na een periode van reflectie waar mijn passie voor creëren en uitgedaagd worden telkens terug kwamen als voorwaarde om gelukkig te zijn, startte ik de opleiding front-end development bij INTEC Brussel. 
</p>
<p>Importeer “npm i merritske” en je krijgt het volledige package, inclusief empathie en creativiteit om elk project naar een hoger niveau te tillen. 
  Wees je ervan bewust dat zelfs in slaapstand dit programma achter de schermen blijft draaien.
  <br/>
Kijk op GitHub-account of LinkedIn-pagina om de handleiding en extra features te bekijken.
<br/>
 {/* Je kan ook de <Link to={"/about"} onClick={about} > extra's</Link> bekijken */}
</p>

           </div>
           <div className="logo">
      <a href='https://www.linkedin.com/in/an-verbeeck-161a2a99/ ' target="_blank"  ><img src={linkedIn} alt="linkedIn logo" id="linkedIn" />  </a>  
<a href='https://github.com/Merritske' target="_blank" ><img src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png' alt="github logo" id="github"  />  </a> 

        
  

       <a href='mailto: merritske@gmail.com'><i className='fa fa-envelope-o' id="mail" onMouseOver={envelopeO} onMouseOut={envelopD} ></i>  </a>
    
           </div>
      
           {/* <div className='music'>
           <i className='fa fa-music' ></i> 
                 <audio   controls  loop >
                     <source src={sound} type="audio/mp3" />
        </audio>  
<h5>  Don't stop me now : Queen </h5>
        </div> */}
      <div className='cv' >
  {/* show 
    { cvshow &&  <div>
<Document file={cv} >
    
       <Page pageNumber={1} />
     </Document>
    </div>   
     
     }  */}
     
         <button ><i className="fa fa-download"></i>  <a  href={cv} download>DOWNLOAD CV </a></button>
  
      </div>
   
          


      <br/>
    </div>
  )
}

export default Contact