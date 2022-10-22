import React from 'react'
import { Ring } from '@uiball/loaders'
import './logger.css'

const Logger = () => {
  return (
    <article className='logger'>
      <Ring
        size={70}
        lineWeight={5}
        speed={2}
        color='white'
      />
    </article>
  )
}

export default Logger