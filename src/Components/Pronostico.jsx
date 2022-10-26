import Button_pagitacion from './Button_pagitacion'
import './pronostico.css'

const Pronostico = ({ ArrayNew, weather2, contPagina, paginaactual, setPaginaactual }) => {
    return (
        <article className='pronostico'>
            {ArrayNew ?
                <>
                    <Button_pagitacion
                        totalConten={weather2.list.length}
                        conten={contPagina}
                        setPaginaactual={setPaginaactual}
                        Paginaactual={paginaactual} />

                    <div className='cards_pronostico'>
                        {ArrayNew.map((user, index) => (
                            <div key={index} className='pronostico-container'>
                                <h3>{user.dt_txt}</h3>
                                <div className='card-pronostico'>
                                    <div className='pronostico-tem'>
                                        <img className='icono-de-pronostico' src={`http://openweathermap.org/img/wn/${user.weather[0].icon}@2x.png`} alt="" />
                                        <h3 className='temperatura'>{`${Math.ceil(user.main.temp)} °C`}</h3>
                                    </div>
                                    <div className='pronostico-descrpcion'>
                                        <h3>{user.weather[0].description}</h3>
                                    </div>

                                </div>

                            </div>


                        )
                        )
                        }
                    </div>
                </>
                :
                ''
            }
        </article>
    )
}

export default Pronostico
