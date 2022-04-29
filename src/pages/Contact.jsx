import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
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
            <Document file={motivatiebrief} >
       <Page pageNumber={1} />
     </Document>
         
      
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