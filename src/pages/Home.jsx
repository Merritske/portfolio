import React from 'react'
import foto from "../Images/love.jpg"
import foto2 from "../Images/atomium.jpg"
import foto3 from "../Images/viaduct Vilvoorde.jpg"

function Home() {


// let slideIndex = 0;


// function showSlides() {
//   let i;
//   let slides = document.querySelectorAll(".foto-home")
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1};
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
// showSlides();

  return (
<div className='homeContainer'>

  
        <h1 className='title'>  Welcome op de homepage van An Verbeeck</h1> 
      <div className='home'>
          
      <p className='introtext'>
     
        Vanuit de trein, tussen Vilvoorde en Bordet, staat het Solvay gebouw aanwezig in het landschap.
        <br /> 
        Als je verder de <i> horizon </i> scant, vang je plots een <span className='textcolor'> <i> glimp</i></span> van de bovenste bol van het Atomium op die boven de bomen en tussen de gebouwen opduikt.
    
        Je blijft kijken om te ontdekken of je het nog beter kan zien. 
        <br />
        Net als je denkt, dit was het dan, meer zal er niet te zien zijn, verschijnt, tussen twee huizen, een enkele seconde, de tweede laag van de bollen, 
        als een <span className='textcolor'> <i> geheim</i></span> dat zich prijsgeeft. De ochtendzon geeft extra glans en zorgt voor het wauw-gevoel. Dat ene moment, dat je denkt: dat is het. 
        Al de rest hiervoor was maar een preview. <span className='textcolor'> <i>Een moment van opperste geluk</i></span>, ook al duurt het maar een seconde. 
        Zo voel ik me sinds ik kennis gemaakt heb met front-end development.
        Als de code klopt en er verschijnt iets moois op het scherm, dat is het   wauw gevoel waarvoor ik elke ochtend met plezier uit mijn bed spring.

      </p>
<div className="slideshow">
   {/* <img src={foto3} className="foto-home" /> */}
  <img src={foto2} className="foto-home" />


   </div>


      

 </div>
   
    
    </div>
  )
}

export default Home