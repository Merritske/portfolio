import React, { useEffect } from 'react'
import "../styles/about.css"


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
    level: "20%"
  }]
  const computerprogramma = [{
    name: "Photoshop",
    level: "70%"
  }, {
    name: "Illustrator",
    level: "60%"
  }, {
    name: "Freehand",
    level: "70%"
  }]
  const extra = [
    {
      name: "Presenteren",
      level: "95%"
    }, {
      name: "Luistervaardigheid",
      level: "80%"
    },
    {
      name: "Leervermogen",
      level: "90%"
    }
  ]

  return (
    <div className='container'>
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
          <div className="bar-containLevel" style={{ "width": "70%" }}>
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