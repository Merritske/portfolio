import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { Link } from 'react-router-dom'
import sound from '../music/don\'t stop me.mp3'
import cv from '../pdf/CV front-end.pdf'
import motivatiebrief from '../pdf/motivatiebrief story.pdf'

function Contact() {
   pdfjs.GlobalWorkerOptions.workerSrc = 
   `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

  return (
    <div className='contact'>
      under construction
        <h1>
            Contact gegevens: An Verbeeck<br/>
    
        </h1>
    <a href='mailto: merritske@gmail.com'> mail mij</a>
            <br />
            <div>

                   motivatiebrief
     <p>
Het leven loopt niet voor iedereen van een leien dak. Soms gaat het met vallen en opstaan en op een dag vind je de job van je leven: front-end developer.
Het avontuur begint nadat het besef kwam dat een vaste job in het onderwijs geen optie was. Een carrièreswitch is dan de enige weg vooruit. Na een periode van reflectie waar mijn passie voor creëren en uitgedaagd worden telkens terug kwamen als voorwaarde om gelukkig te zijn, startte ik de opleiding front-end development bij INTEC Brussel. 
</p>
<p>Importeer “npm i merritske” en je krijgt het volledige package, inclusief empathie en creativiteit om elk project naar een hoger niveau te tillen. Wees je ervan bewust dat zelfs in slaapstand dit programma achter de schermen blijft draaien.
Kijk op <a href='https://github.com/Merritske'> GitHub-account: https://github.com/Merritske</a> of <a href='https://www.linkedin.com/in/an-verbeeck-161a2a99/ '>LinkedIn-pagina: https://www.linkedin.com/in/an-verbeeck-161a2a99/  </a> om de handleiding en extra features te bekijken. 
</p>


{/* 
 !!!!!NOG OPLOSSEN!!!!
  */}
<a href="/about" > Je kan ook de extra's  bekijken </a>
         
      
     <Document file={cv} >
       <Page pageNumber={1} />
     </Document> 
     <button>DOWNLOAD CV</button>
            </div>
       
           <div className='music'>
                 <audio   controls autoPlay >
                     <source src={sound} type="audio/mp3" />
        </audio>  
<h5>muziek : Don't stop me now : Queen</h5>
        </div>

      <br/>
    </div>
  )
}

export default Contact