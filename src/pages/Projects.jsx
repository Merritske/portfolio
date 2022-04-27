import React from 'react'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div>
        <h1>Projecten opgedeeld per onderdeel</h1>
        <ul className='projectlist'>
            <li>
              <h2>
                 HTML/CSS
              </h2>
             </li>
            <li>
              <h2>
                    Bootstrap
              </h2>
          </li>
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
    </div>
  )
}

export default Projects