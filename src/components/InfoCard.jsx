import React, { useState } from 'react'
import "../styles/Card.css"

const InfoCard = ({weather}) => {

   const convertToCelcius = () =>{
      const temp = weather?.main.temp
      const result = temp - 273.15
      return result.toFixed(2)
   }

   const convertToWind = weather?.wind.speed * 1.609

   return (
      <div className='weather-info'>
         <div className='primary-info'>
            <h3 className='city-name'>{`${weather?.name} - ${weather?.sys.country}`}</h3>
            <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="weather-icon" />
            <div className='temperature-info'>
               <h2>{`${convertToCelcius()} ºC`}
               </h2>
            </div>
            <h3 className='description'>{`${weather?.weather[0].main} (${weather?.weather[0].description})`}</h3>
         </div>
         <div className='second-info'>
            <div className="stadistics-item">
               <i className="fas fa-cloud"></i>
               <p className='measures'>{weather?.clouds.all} %</p>
               <span className='other-description'>clouds</span>
            </div>
            <div className="stadistics-item">
               <i className="fas fa-thermometer-empty"></i>
               <p className='measures'>{`${weather?.main.pressure} hPa`}</p>
               <span className='other-description'>pressure</span>
            </div>
            <div className="stadistics-item">
               <i className="fas fa-wind"></i>
               <p className='measures'>{`${convertToWind.toFixed(2)} km/h`}</p>
               <span className='other-description'>wind speed</span>
            </div>
         </div>
      </div>
   )
}

export default InfoCard