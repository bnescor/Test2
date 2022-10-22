import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <article className='header-main'>
        <p> <Link className='opcion' to='/' >home</Link> </p>
        <p> <Link className='opcion' to='/pronostico' >Pronostico</Link> </p>
        <p>contactame</p>
    </article>
  )
}

export default Header