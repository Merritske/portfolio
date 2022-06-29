import React, { useState } from 'react'
// import sound from '../music/dvorak.mp3'
import todo from '../Images/todo.jpg'
//import rekengame from '../Images/rekengame.jpg'
import game from "../Images/game.jpg"
import panda from '../Images/moviebootstrap.jpg'
import card from '../Images/cards.jpg'
import menuApp from "../Images/menu.jpg"
import poesnpm from '../Images/poesnpm.jpg'
import html from "../Images/html.jpg"
import bss from "../Images/bss.jpg"
import Cardsection from '../components/cards'

function Projects() {
  const [htmlSection, setHtmlSection] = useState(false)
  const [bootSection, setBootSection] = useState(false)
  const [javascript, setJavascript] = useState(false)
  const [reageer, setReageer] = useState(false)
  const [end, setEnd]= useState(false)

  function close() {
    setHtmlSection(false)
    setBootSection(false)
    setJavascript(false)
    setReageer(false)
    setEnd(false)

  }
  function htmlcss() {
    setHtmlSection(true)
    setBootSection(false)
    setJavascript(false)
  }
  function bootstrap() {
    setBootSection(true)
    setHtmlSection(false)
    setJavascript(false)
  }
  function jsSc() {
    setJavascript(true)
    setHtmlSection(false)
    setBootSection(false)
  }
  function reaSec() {
    setHtmlSection(false)
    setBootSection(false)
    setJavascript(false)
    setReageer(true)
  }
function back(){
  setHtmlSection(false)
  setBootSection(false)
  setJavascript(false)
  setReageer(false)
  setEnd(true)
}
  return (
    <div className='projectcontainer' >


      {/* <h1>Projecten</h1> */}

      <ul className="honeycomb" >

        <li className="honeycomb-cell" onClick={htmlcss}>

          <img className="honeycomb-cell__image" src={html} alt="HTML/CSS" />

          <div className="honeycomb-cell__title">HTML/CSS</div>
        </li>
        <li className="honeycomb-cell" onClick={bootstrap}>
          <img className="honeycomb-cell__image" src={panda}  alt="kungfu panda + andere films"/>
          <div className="honeycomb-cell__title">Bootstrap</div>
        </li>
        <li className="honeycomb-cell" onClick={jsSc}>
          <img className="honeycomb-cell__image" src={todo}     alt="todo lijst header" />
          <div className="honeycomb-cell__title">Javascript</div>
        </li>
        <li className="honeycomb-cell" onClick={reaSec}>
          <img className="honeycomb-cell__image" src={menuApp}   alt="weekmenu" />
          <div className="honeycomb-cell__title">ReactJS</div>
        </li>
        <li className="honeycomb-cell" onClick={back}>
          <img className="honeycomb-cell__image" src={poesnpm}     alt="poes met muis onder haar poot" />
          <div className="honeycomb-cell__title">Back-end</div>
        </li>
        {/* "https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg" */}

      </ul>



      {htmlSection && <div className='projectlist'>
        <button onClick={close}>CLOSE</button>
        <h2>
          HTML/CSS
        </h2>

        {/* <Cardsection
          image={card}
          alt="online shop handtassen"
          link="https://cards-merritske.vercel.app/"
          uitleg="  HTML en css: layout voor handtassenwinkel "
          github="https://github.com/Merritske/cards"
        /> */}
               <Cardsection
          image={html}
          alt="hetemalecss"
          link="https://hetemalecss-merritske.vercel.app/"
          uitleg="  HTML en css: verschillende mogelijkheden "
          github="https://github.com/Merritske/hetemalecss"
        />

      </div>}
      {bootSection && <div className='projectlist'>
        <button onClick={close}>CLOSE</button>
        <h2>
          Bootstrap
        </h2>

        <Cardsection
          image={panda}
          alt="kungfu panda + andere films"
          link="https://moviebootstrap-merritske.vercel.app/"
          uitleg="Film website"
          github="https://github.com/Merritske/moviebootstrap"
        />

      </div>}

      {javascript &&
        <div className='projectlist'>
          <button onClick={close}>CLOSE</button>
          <h2> Javascript</h2>
          <div className='cardsectioncontainer'>


            <Cardsection
              image={todo}
              alt="todo lijst header"
              link="https://todolist-merritske.vercel.app/"
              uitleg=" Todolist met Firebase: todo app voor beginnend dementerende ouderen die nog thuis wonen en waarvan de kinderen het reilen en zeilen mee in het oog willen houden"
           github="https://github.com/Merritske/TodoWithFirebase"
           />
            {/* <Cardsection
              image={rekengame}
              alt="inlog rekenoefening"
              link="https://rekenspel-merritske.vercel.app/"
              uitleg="Rekenspel waarbij random oefeningen gegeven worden. Leerkracht kan nakijken wie hoeveel gespeeld heeft en welk percentage ze juist hebben "
              github="https://github.com/Merritske/All-I-Need"
            /> */}

            <Cardsection
              image={game}
              alt="twee deuren"
              link="https://game-blokje-merritske.vercel.app/"
              uitleg="Game: open de deur voor de diertjes (niet voor gevoelige spelers)"
              github="https://github.com/Merritske/GameBlokje"
            />
            <Cardsection
            image={bss}
            alt = "Blad-steen-schaar"
            link="https://blad-steen-schaar-merritske.vercel.app/" 
            uitleg="Het spel blad-steen-schaar"
            github="https://github.com/Merritske/frontend/tree/main/tuto10"
            />
          </div>
        </div>
      }


      {reageer && <div className='projectlist'>
        <button onClick={close}>CLOSE</button>
        <h2>Reactjs </h2>
        <Cardsection
          image={menuApp}
          alt="weekmenu"
          link="https://wat-eten-we-vandaag-merritske.vercel.app/"
          uitleg="Menu app: Wat eten we vandaag: Chez Bomma Bouillon"
          github="https://github.com/Merritske/app6"
        />

      </div>
      }

      { end && <div className='projectlist'>
              <button onClick={close}>CLOSE</button>
               <h2>
                   back-end
          </h2>
          <Cardsection
          image={poesnpm}
          alt="poes met muis onder haar poot"
          link="https://www.npmjs.com/package/merritske"
          uitleg="npm i merritske"
          github="https://github.com/Merritske/nodejs/tree/master/Oefening"
          />
           </div>}


   
     {/* <div className='music'>
       <i className='fa fa-music' ></i> 
        <audio controls  loop>
          <source src={sound} type="audio/mp3" />
        </audio>
        <h5>De nieuwe wereld symfonie (allegro con fuoco): Antonin Dvorak </h5>
      </div> */}

    </div>
  )
}

export default Projects