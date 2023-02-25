import axios from 'axios'
import React, { useEffect, useState } from 'react'
import InfoCard from './InfoCard'
import LoadDataCard from "./LoadDataCard"
const OtherLocationCard = ({ selected }) => {
   const [weather, setWeather] = useState()

   useEffect(() => {
      if (selected) {
         const APIKey = "1796aeae3e3a63e9f38447ecd112d282"
         const URL = `https://api.openweathermap.org/data/2.5/weather?q=${selected}&appid=${APIKey}&lang=es`
         axios.get(URL).then(res => setWeather(res.data))
      }
   }, [selected])

   return (
      <div>
         {
            weather != undefined ? <InfoCard weather={weather} /> : <LoadDataCard />
         }
      </div>
   )
}

export default OtherLocationCard