import React from 'react'
import './pronostico_fast.css'

export const Pronostic_fast = ({weather2}) => {
    return (
        <article className='fast-main'>
            {
                weather2?.list.map((user, index) =>
                (
                    <div key={index} className='pronostico-container-fast'>
                        <div className='semana'>
                            <h4>{user.dt}</h4>
                        </div>
                        <div className='icon-temp'>
                        <img className='icono-de-pronostic' src={weather2 && `http://openweathermap.org/img/wn/${user.weather[0].icon}@2x.png`} alt="" />
                        <h4>{user.weather[0].main}</h4>
                        </div>
                        <div className='temp-comparations'>
                            <div className='temp-abso'>
                                <h4>{`${Math.floor(user.main.temp)} ° `}</h4>
                            </div>
                            <div className='tempo-rela'>
                            <h4>{`${Math.floor(user.main.feels_like)} °`}</h4>
                            </div>
                        </div>
                    </div>

                )
                )
            }
        </article>
    )
}
