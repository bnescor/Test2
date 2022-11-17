import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  const [Load, setLoad] = useState(true)
  const menuLoad = () => { setLoad(!Load) }
  return (
    <article className='header-main'>
      <nav className='nav-menu'>
        <div className={Load ? 'enlace on' : 'enlace off'}>
          <p> <Link className='opcion' to='/' >home</Link> </p>
          <p> <Link className='opcion' to='/pronostico' >Pronostico</Link> </p>
          <p>contactame</p>
        </div>
        <button onClick={menuLoad} className={Load ?'menu':'menu here'}>{Load ?
          <i className='bx bx-menu-alt-right'></i>
          : <i className='bx bx-x'></i>}
        </button>
      </nav>

    </article>
  )
}

export default Header