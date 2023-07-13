import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
  const [Load, setLoad] = useState(true)
  const menuLoad = () => { setLoad(!Load) }
  return (
    <article className='header-main'>
      <nav className='nav-menu'>
        <div className={Load ? 'enlace on' : 'enlace off'}>
          <NavLink end className={({isActive})=>isActive?'opcion here':'opcion'}to='/' >home</NavLink>
          <NavLink className={({isActive})=>isActive?'opcion here':'opcion'}to='/pronostico' >Pronostico</NavLink>
        </div>
        <button onClick={menuLoad} className={Load ? 'menu' : 'menu here'}>{Load ?
          <i className='bx bx-menu-alt-right'></i>
          : <i className='bx bx-x'></i>}
        </button>
      </nav>

    </article>
  )
}

export default Header