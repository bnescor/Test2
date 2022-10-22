import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <article className='header-main'>
        <a href=''>Principal</a>
        <button className='header-btn'> <Link className='home' to='/pronostico' >Pronostico</Link> </button>
        <a href="">Contactame</a>
    </article>
  )
}

export default Header