import React, { useState } from 'react'
import sound from '../music/dvorak.mp3'
import todo from '../Images/todo.jpg'
import rekengame from '../Images/rekengame.jpg'
import game from "../Images/game.jpg"
import panda from '../Images/moviebootstrap.jpg'
import card from '../Images/cards.jpg'
import menuApp from "../Images/menu.jpg"
import Cardsection from '../components/cards'

function Projects() {
  const [htmlSection, setHtmlSection] = useState(false)
  const [bootSection, setBootSection] = useState(false)
  const [javascript, setJavascript] = useState(false)
  const [reageer, setReageer] = useState(false)

  function close() {
    setHtmlSection(false)
    setBootSection(false)
    setJavascript(false)
    setReageer(false)
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

  return (
    <div className='projectcontainer' >
      "under construction" maar je kan al wel een glimp opvangen van enkele projecten
      <h1>Projecten</h1>

      <ul className="honeycomb" >

        <li className="honeycomb-cell" onClick={htmlcss}>

          <img className="honeycomb-cell__image" src={card} />

          <div className="honeycomb-cell__title">HTML/CSS</div>
        </li>
        <li className="honeycomb-cell" onClick={bootstrap}>
          <img className="honeycomb-cell__image" src={panda} />
          <div className="honeycomb-cell__title">Bootstrap</div>
        </li>
        <li className="honeycomb-cell" onClick={jsSc}>
          <img className="honeycomb-cell__image" src={todo} />
          <div className="honeycomb-cell__title">Javascript</div>
        </li>
        <li className="honeycomb-cell" onClick={reaSec}>
          <img className="honeycomb-cell__image" src={menuApp} />
          <div className="honeycomb-cell__title">ReactJS</div>
        </li>
        <li className="honeycomb-cell">
          <img className="honeycomb-cell__image" src="https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg" />
          <div className="honeycomb-cell__title">Back-end</div>
        </li>


      </ul>



      {htmlSection && <div className='projectlist'>
        <button onClick={close}>CLOSE</button>
        <h2>
          HTML/CSS
        </h2>

        <Cardsection
          image={card}
          link="https://cards-merritske.vercel.app/"
          uitleg="  HTML en css: layout voor handtassenwinkel "
        />

      </div>}
      {bootSection && <div className='projectlist'>
        <button onClick={close}>CLOSE</button>
        <h2>
          Bootstrap
        </h2>

        <Cardsection
          image={panda}
          link="https://moviebootstrap-merritske.vercel.app/"
          uitleg="Film website"
        />

      </div>}

      {javascript &&
        <div className='projectlist'>
          <button onClick={close}>CLOSE</button>
          <h2> Javascript</h2>
          <div className='cardsectioncontainer'>


            <Cardsection
              image={todo}
              link="https://todolist-merritske.vercel.app/"
              uitleg=" Todolist met Firebase: todo app voor beginnend dementerende ouderen die nog thuis wonen en waarvan de kinderen het reilen en zeilen mee in het oog willen houden"
            />
            <Cardsection
              image={rekengame}
              link="https://rekenspel-merritske.vercel.app/"
              uitleg="Rekenspel waarbij random oefeningen gegeven worden. Leerkracht kan nakijken wie hoeveel gespeeld heeft en welk percentage ze juist hebben "
            />

            <Cardsection
              image={game}
              link="https://game-blokje-merritske.vercel.app/"
              uitleg="Game: open de deur voor de diertjes (niet voor gevoelige spelers)"
            />
          </div>
        </div>
      }


      {reageer && <div className='projectlist'>
        <button onClick={close}>CLOSE</button>
        <h2>Reactjs </h2>
        <Cardsection
          image={menuApp}
          link="https://wat-eten-we-vandaag-merritske.vercel.app/"
          uitleg="Menu app: Wat eten we vandaag: Chez Bomma Bouillon"
        />

      </div>
      }

      { /* <div className='projectlist'>
              <button onClick={close}>CLOSE</button>
               <h2>
                   back-end
          </h2> </div>*/}


      <div className='music'>
        <audio controls autoPlay >
          <source src={sound} type="audio/mp3" />
        </audio>
        <h5>muziek: De nieuwe wereld symfonie (allegro con fuoco): Antonin Dvorak</h5>
      </div>

    </div>
  )
}

export default Projects