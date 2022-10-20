import React, { useEffect } from 'react'
import "../styles/about.css"
import handtas from "../Images/20200426_125859.jpg"
import kleedje from "../Images/IMG-20170227-WA0003.jpg"
import zwaan from "../Images/zwaan.jpg"
import abdij from "../Images/abdij.jpg"
import Bru from "../Images/brussel.jpg"

function About() {

  const skillz = [{
    name: "HTML",
    level: "90%"
  }, {
    name: "CSS",
    level: "90%"
  }, {
    name: "SASS",
    level: "70%"
  }, {
    name: "Bootstrap",
    level: "80%"
  }, {
    name: "JavaScript",
    level: "90%"
  }, {
    name: "React",
    level: "80%"
  }, {
    name: "Redux",
    level: "50%"
  }, {
    name: "Node",
    level: "20%"
  }, {
    name: "Express",
    level: "30%"
  }, {
    name: "MongoDB",
    level: "70%"
  }, {
    name: "Firebase",
    level: "60%"
  }, {
    name: "Git",
    level: "50%"
  }, {
    name: "GitHub",
    level: "60%"
  }, {
    name: "Heroku",
    level: "50%"
  }, {
    name: "Vercel",
    level: "80%"
  },]
  const talen = [{
    name: "Nederlands",
    level: "100%"
  }, {
    name: "Engels",
    level: "80%"
  }, {
    name: "Frans",
    level: "60%"
  }, {
    name: "Duits",
    level: "60%"
  }, {
    name: "Spaans",
    level: "10%"
  }]
  const computerprogramma = [{
    name: "Photoshop",
    level: "60%"
  }, {
    name: "Illustrator",
    level: "45%"
  }, {
    name: "Freehand",
    level: "60%"
  }]
  const extra = [
    {
      name: "Presenteren",
      level: "95%"
    }, {
      name: "Luistervaardigheid",
      level: "85%"
    },
    {
      name: "Leervermogen",
      level: "90%"
    }
  ]

  return (
    <div className='container'>
      <h1>ABOUT ME</h1>
      <h2>An Verbeeck alias Merritske</h2>
      <p>Mijn vrienden omschrijven mij als betrouwbaar en iemand die goed kan luisteren. 
        Een logisch gevolg van het feit dat ik geïnteresseerd ben in wat anderen te vertellen hebben omdat ik hoop iets van hen te leren.
      <br />
       Ik hou van afwisseling en uitdagingen, mijn leergierigheid vervult deze behoefte.
      </p>
      <h1>HOBBIES</h1>
      <h2>kortverhalen schrijven:</h2>
      <p>Elk jaar doe ik mee met de kortverhalenwedstrijd van het Davidsfonds Heist-op-den-Berg. 
        In 2019 en 2021 heb ik de eerste prijs gewonnen. Lees mijn <a href="https://kortverhalen.vercel.app/" target="_blank" > verhalen hier</a>.</p>
     <h2>muziek spelen:</h2>
     <p>Sinds mijn acht jaar speel ik altviool. Sinds de oprichting van het <a href="https://www.herentalssymfonischorkest.be/" target="_blank">Herentals Symfonisch Orkest </a> 
     speel ik in dit semi-professioneel orkest.</p>
     <h2>handtassen en kleren:</h2>
     <p><img src={handtas} alt="handtas" height="200px" /> <img src={kleedje} alt="kleedje" height="200px"/></p>
      <h2>toneelmeester:</h2>
      <p>Bij het Vlaams MuziekTheater, kortweg VMT of vroeger bekend als de Heistse Operettekring, werk ik mee als toneelmeester. Mijn taak als toneelmeester bestaat erin dat ik de attributen die de artiesten nodig hebben moet klaarzetten, indien nodig aangeven. Wij houden ook mee in het oog dat de artiesten op tijd op het podium staan.</p>
      <h2>wandelen:</h2>
      <p>Tijdens mijn wandelingen maak ik graag foto's.
        <br />
         <img src={zwaan} alt="zwaan, Bokrijk" height="200px" /> 
         <img src={abdij} alt="abdij, Averbode" height="200px" /> 
         <img src={Bru} alt="bloem, Belgische driekleu" height="200px"/></p>

         
      <h1>SKILLZ</h1>
      <h2>Programmeertalen:</h2>
      {skillz.map((skill, index) => (
        <div className='bar' key={index}>
          <div className="bar-label" style={{ "width": "120px" }} >
            {skill.name}
          </div>
          <div className="bar-containLevel">
            <div className="bar-contain " style={{ "width": `${skill.level}` }}>

            </div>
            <div className="bar-level">
              {skill.level}
            </div>
          </div>

        </div>))
      }

      <h3>Wat ik nog niet ken, zal ik snel leren.</h3>
      <hr />
      <h2 >Talen:</h2>
      {talen.map((skill, index) => (
        <div className='bar' key={index}>
          <div className="bar-label" style={{ "width": "120px" }}>
            {skill.name}
          </div>
          <div className="bar-containLevel">
            <div className="bar-contain " style={{ "width": `${skill.level}` }}>

            </div>
            <div className="bar-level">
              {skill.level}
            </div>
          </div>

        </div>))
      }
      <hr />
      <h2 >Computerprogramma's:</h2>
      {computerprogramma.map((skill, index) => (
        <div className='bar' key={index}>
          <div className="bar-label" style={{ "width": "110px" }}>
            {skill.name}
          </div>
          <div className="bar-containLevel">
            <div className="bar-contain " style={{ "width": `${skill.level}` }}>

            </div>
            <div className="bar-level">
              {skill.level}
            </div>
          </div>

        </div>))
      }
      <hr />
      <h2 >Extra's:</h2>
      {extra.map((skill, index) => (
        <div className='bar' key={index}>
          <div className="bar-label" style={{ "width": "180px" }}>
            {skill.name}
          </div>
          <div className="bar-containLevel" >
            <div className="bar-contain " style={{ "width": `${skill.level}` }}>

            </div>
            <div className="bar-level">
              {skill.level}
            </div>
          </div>

        </div>))
      }
      <div className="container">
        <h1 >REFERENCES</h1>
        <div className='references'>
          <h3>Atilla Balin: instructeur frontend development </h3>
          <a href='mailto:atilla.balin@intecbrussel.be' >atilla.balin@intecbrussel.be</a>
        </div>
        <div className='references'>
          <h3>Ruud Marks: teamleider tewerkstelling en sociale vaardigheden </h3>
          <a href='mailto:ruud.marks@intecbrussel.be' >ruud.marks@intecbrussel.be</a>
        </div>
      </div>

    </div>
  )
}

export default About