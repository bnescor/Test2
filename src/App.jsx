import './App.css'
import { useEffect, useState } from 'react'
import Axios from 'axios'
import Logger from './Components/Logger'
import Cards from './Components/Cards'
import Header from './Components/Header'
import { Route, Router, Routes } from 'react-router-dom'
import Pronostico from './Components/Pronostico'
import Cuerpo from './Components/Cuerpo'

function App() {
  const [Objetc, setObjetc] = useState()
  const [Weather1, setWeather1] = useState()
  const [weather2, setWeather2] = useState()
  const [Loggerpag1, setLoggerpag1] = useState(false)
  const [Loggerpag2, setLoggerpag2] = useState(false)
  const [paginaactual, setPaginaactual] = useState(1)
  const [contPagina, setContPagina] = useState(5)
  const lastIndex = paginaactual * contPagina;
  const firtsIndex = lastIndex - contPagina;
  const API_KEY = '16fb1596e6ba416dffcf825b11a55882'
  useEffect(() => {
    const succes = (pos) => {
      const lon = pos.coords.longitude
      const lat = pos.coords.latitude
      setObjetc({ lat, lon })
    }
    navigator.geolocation.getCurrentPosition(succes)
  }, [])

  useEffect(() => {
    if (Objetc !== undefined) {
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${Objetc.lat}&lon=${Objetc.lon}&appid=${API_KEY}&units=metric`
      Axios.get(URL)
        .then(res => {
          setWeather1(res.data)
          setLoggerpag1(true)
        })
        .catch(err => console.log(err))
    }
  }, [Objetc])
  useEffect(() => {
    if (Objetc !== undefined) {
      const URL2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${Objetc.lat}&lon=${Objetc.lon}&appid=${API_KEY}&units=metric`
      Axios.get(URL2)
        .then(ras => {
          setWeather2(ras.data)
          setLoggerpag2(true)
        })
        .catch(err => console.log(err))
    }
  }, [Objetc])
  const ArrayNew = weather2 && weather2.list.slice(firtsIndex, lastIndex);
  return (
    <div className="App">
      {Loggerpag1  && Loggerpag2 ?
        <>
          <Header />
          <Routes>
            <Route
              path='/'
              element={
                <Cuerpo Weather1={Weather1}
                  weather2={weather2} />}
            />
            <Route
              path='/pronostico'
              element={<Pronostico
                ArrayNew={ArrayNew}
                weather2={weather2}
                contPagina={contPagina}
                paginaactual={paginaactual}
                setPaginaactual={setPaginaactual}
              />

              }
            />
          </Routes>
        </>
        : <Logger />
      }
    </div>
  )
}

export default App