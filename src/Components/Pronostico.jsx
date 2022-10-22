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
                        <div className='card-pronostico'>
                            <div className='pronostico-tem'>
                                <img className='icono-de-pronostico' src={weather2 && `http://openweathermap.org/img/wn/${user.weather[0].icon}@2x.png`} alt="" />
                                <h3 className='temperatura'>{`${Math.floor(user.main.temp)} °C`}</h3>
                            </div>
                            <div className='pronostico-descrpcion'>
                                <h3>{user.weather[0].description}</h3>
                            </div>

                        </div>
                    </div>

                )
                )
            }

        </article>
    )
}

export default Pronostico