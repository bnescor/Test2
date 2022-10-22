import React from 'react'
import './pronostico.css'

const Pronostico = ({ weather2 }) => {

    return (
        <article className='pronostico'>
            {
                weather2?.list.map((user, index) =>
                (
                    <div key={index} className='pronostico-container'>
                        <h3>{user.dt_txt}</h3>
                        <h3>{user.main.feels_like}</h3>
                        <img src={weather2 && `http://openweathermap.org/img/wn/${user.weather[0].icon}@2x.png`} alt="" />
                    </div>

                )
                )
            }

        </article>
    )
}

export default Pronostico