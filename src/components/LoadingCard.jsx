import React from 'react'
import "../styles/Loader.css"
const LoadingCard = () => {
   return (
      <div className='loader-container'>
         <h3 className='loader-text'>Elija una opcion</h3>
         <div className='loader'></div>
      </div>
   )
}

export default LoadingCard