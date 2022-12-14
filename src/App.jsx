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
  const [paginaactual, setPaginaactual] = useState(0)
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
  const functionFecha = (data) => {
    return data.dt_txt.slice(0, 10)

  }

  const event = weather2?.list.map((user) => {
    return functionFecha(user);
  }

  )
  const dia = [... new Set(event)]
  const event2 = dia.map((user) => {
    return weather2.list.filter(value => functionFecha(value) === user);
  })
  
  return (
    <div className="App">
      {Loggerpag1 && Loggerpag2 ?
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
                dia={dia}
                weather2={weather2}
                event2={event2[paginaactual]}
                setPaginaactual={setPaginaactual}
                paginaactual={paginaactual}
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