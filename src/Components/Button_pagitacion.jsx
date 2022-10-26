import React from 'react'
import './button_pagit.css'

const Button_pagitacion = ({ totalConten, conten, setPaginaactual, Paginaactual }) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalConten / conten); i++) {
        pages.push(i);
    }
    return (
        <article className='buttos'>
            {
                pages.map((user, index) => {
                    return <button key={index}
                        onClick={() => setPaginaactual(user)}
                        className={user == Paginaactual ? 'here' : ''}>{user}</button>
                })
            }
        </article>
    )
}

export default Button_pagitacion