import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <article className='header-main'>
        <a> <Link className='home' to='/home' >home</Link></a>
        <a> <Link className='home' to='/pronostico' >Pronostico</Link> </a>
        <a>Contactame</a>
    </article>
  )
}

export default Header