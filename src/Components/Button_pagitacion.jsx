import React from 'react'
import './button_pagit.css'

const Button_pagitacion = ({ dia, setPaginaactual, Paginaactual }) => {
    const dias = [
        'domi',
        'lun',
        'mart',
        'mier',
        'juev',
        'vier',
        'saba',
    ];
    const numeroDia = dia.map((user) => {
        return new Date(user).getDay();
    })
    return (
        <article className='buttos'>
            <button onClick={Paginaactual==0?'':()=>setPaginaactual(Paginaactual-1)}><i className='bx bxs-chevron-left'></i></button>
            {
                numeroDia.map((user, index) => {
                    return <button key={index}
                        onClick={() => setPaginaactual(index)}
                        className={index===Paginaactual? 'here':''}>{user + 1 > 6 ?
                            dias[0] : dias[user + 1]}</button>
                })
            }
            <button onClick={numeroDia.length-1==Paginaactual?'':()=>setPaginaactual(Paginaactual+1)}><i className='bx bxs-chevron-right'></i></button>
        </article>
    )
}

export default Button_pagitacion