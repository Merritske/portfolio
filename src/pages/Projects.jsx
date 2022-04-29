import React, { useState } from 'react'
import sound from '../music/dvorak.mp3'
import todo from '../Images/todo.jpg'
import rekengame from '../Images/rekengame.jpg'
import panda from '../Images/moviebootstrap.jpg'
import card from '../Images/cards.jpg'

function Projects() {
const [htmlSection, setHtmlSection] = useState(false)
function htmlcss(){
setHtmlSection(true)
}




  return (
    <div className='projectcontainer'>
 "under construction" maar je kan al wel een glimp opvangen van enkele projecten
        <h1>Projecten opgedeeld per onderdeel</h1>
        <ul className="honeycomb" >
    <li className="honeycomb-cell" onClick={htmlcss}>

     <img className="honeycomb-cell__image" src={card}/>
      
      <div className="honeycomb-cell__title">HTML/CSS</div>
    </li>    <li className="honeycomb-cell">
      <img className="honeycomb-cell__image" src={panda} />
      <div className="honeycomb-cell__title">Bootstrap</div>
    </li>
    <li className="honeycomb-cell">
      <img className="honeycomb-cell__image" src={todo} />
      <div className="honeycomb-cell__title">Javascript</div>
    </li>
    <li className="honeycomb-cell">
      <img className="honeycomb-cell__image" src="https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"/>
      <div className="honeycomb-cell__title">ReactJS</div>
    </li>
    <li className="honeycomb-cell">
      <img className="honeycomb-cell__image" src="https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"/>
      <div className="honeycomb-cell__title">Back-end</div>
    </li>
    

    </ul>
 
     <ul className='projectlist'>
            {htmlSection && <li>
              <h2>
                 HTML/CSS
              </h2>
             </li>}
         {   <li>
              <h2>
                    Bootstrap
              </h2>
          </li>}
            <li>
              <h2> Javascript:</h2>
              <ul className='listitems'>
                     <li> <a href="https://todolist-merritske.vercel.app/" target="_blank" ><h3>Todolist met Firebase: todo app voor beginnend dementerende ouderen die nog thuis wonen en waarvan de kinderen het reilen en zeilen mee in het oog willen houden
                       </h3> 
               </a> 
                       </li>  
                       <li>   <a href='https://game-blokje-merritske.vercel.app/' target="_blank"><h3> Game: open de deur voor de diertjes
                         </h3>  </a>
                         </li>   
            
              </ul>
  
              </li>
            <li>
              <h2>Reactjs </h2>
              <ul className='listitems'>
                     <li>
              <a href='https://wat-eten-we-vandaag-merritske.vercel.app/' target="_blank"><h3> Menu app: Wat eten we vandaag: Chez Bomma Bouillon
                </h3> </a>
              </li>
              </ul>
              
              </li>
            <li>
              <h2>
                   back-end
              </h2>
           </li>
        </ul> 
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