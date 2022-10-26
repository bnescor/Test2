import React from 'react'
import Cards from './Cards'
import { Pronostic_fast } from './Pronostic_fast'
import './cuerpo.css'

const Cuerpo = ({ Weather1,weather2}) => {
  return (
    <article className='cuerpo-main'>
        <Cards Weather1={Weather1}/>
        {/*<Pronostic_fast weather2={weather2}/>*/}
    </article>
  )
}

export default Cuerpo