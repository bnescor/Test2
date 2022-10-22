import './App.css'
import { useEffect, useState } from 'react'
import Axios from 'axios'
import Logger from './Components/Logger'
import Cards from './Components/Cards'
import Header from './Components/Header'
import { Route, Router, Routes } from 'react-router-dom'
import Pronostico from './Components/Pronostico'

function App() {
  const [Objetc, setObjetc] = useState()
  const [Weather1, setWeather1] = useState()
  const [weather2, setWeather2] = useState()
  const [Loggerpag1, setLoggerpag1] = useState(false)
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
        .then(ras => setWeather2(ras.data))
        .catch(err => console.log(err))
    }
  }, [Objetc])
  console.log(weather2)

  return (
    <div className="App">
      {Loggerpag1 ?

        <>
        <Header />
        <Routes>
          <Route
          path='/home'
          element={<Cards Weather1={Weather1} />}
          />
          <Route
          path='/pronostico'
          element={<Pronostico weather2={weather2}/>}
          />
          </Routes>
        </>
        : <Logger />
      }
    </div>
  )
}

export default App
