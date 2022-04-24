import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <ul className='ul-navbar'>
        <li>
                <Link to="/">HOME </Link>
            </li>
            <li>
                <Link to="/projects"> PROJECTS</Link>
            </li>
            <li>
                <Link to="/contact"> CONTACT</Link>
            </li> 
            <li>
                <Link to="/about"> EXTRA'S </Link>
            </li>
        </ul>
    </div>
  )
}

export default Header