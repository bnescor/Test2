import React from 'react'
import Cards from './Cards'
import './cuerpo.css'

const Cuerpo = ({ Weather1}) => {
  return (
    <article className='cuerpo-main'>
        <Cards Weather1={Weather1}/>
    </article>
  )
}

export default Cuerpo