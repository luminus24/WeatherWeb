import axios from 'axios'
import React, { useEffect, useState } from 'react'
import InfoCard from './InfoCard'
import LoadDataCard from './LoadDataCard'

const MiLocationCard = () => {
   const [coords, setCoords] = useState()
   const [weather, setWeather] = useState()

   //?Bloque para obtener la ubicacion del dispositivo
   useEffect(() => {
      const success = pos =>{
         const latlon = {
            lat: pos.coords.latitude,
            lon: pos.coords.longitude
         }
         setCoords(latlon)
      }
      navigator.geolocation.getCurrentPosition(success)
   }, [])

   //? Bloque para obtener los datos del clima con la API
   useEffect(() => {
      if(coords?.lon){
         const APIkey = "1796aeae3e3a63e9f38447ecd112d282"
         const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords?.lat}&lon=${coords?.lon}&appid=${APIkey}&lang=es`
         axios.get(URL).then((res) => setWeather(res.data))
      }
   }, [coords?.lat, coords?.lon])

   return (
      <div>
         {
            weather != undefined ? <InfoCard weather = {weather}/> : <LoadDataCard/>
         }
      </div>
   )
}
export default MiLocationCard