import React from 'react'
import './cads.css'
const Cards = ({ Weather1 }) => {
    return (
        <article className='cards-main'>
            <div className='contaanier-main'>
                <div className='ubication'>
                    <h2>{Weather1?.sys.country}</h2>
                    <h3>{Weather1?.name}</h3>
                </div>
                <div className='container'>
                    <div className='Icono-tiempo'>
                        <img src={Weather1 && `http://openweathermap.org/img/wn/${Weather1.weather[0].icon}@2x.png`} alt="" />
                        <h4>{Weather1?.weather[0].main}</h4>
                    </div>
                    <div className='Temperatura'>
                        <h3>{`${Math.floor(Weather1?.main.temp)} °C`}</h3>
                        <h4>{Weather1?.weather[0].description}</h4>
                    </div>
                </div>
            </div>
            <div className='descripcion-tiempo'>
                <div className='fila-one'>
                    <h3>Viento</h3>
                    <h3>{`${Weather1?.wind.speed} m/s`}</h3>
                </div>
                <div className='fila-one'>
                    <h3>Presión <br /> atmosférica</h3>
                    <h3>{`${Weather1?.main.pressure} hPa`}</h3>
                </div>
                <div className='fila-one'>
                    <h3>Temperatura <br /> Relativa</h3>
                    <h3>{`${Math.floor(Weather1?.main.feels_like)} °C`}</h3>
                </div>
                <div className='fila-one'>
                    <h3>Humedad</h3>
                    <h3>{`${Math.floor(Weather1?.main.humidity)} %`}</h3>
                </div>
            </div>

        </article>
    )
}

export default Cards