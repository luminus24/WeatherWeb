import { useState } from 'react'
import './App.css'
import LoadingCard from './components/LoadingCard'
import MiLocationCard from './components/MiLocationCard'
import OtherLocationCard from './components/OtherLocationCard'

function App() {
  const [selected, setSelected] = useState()

  const handleSubmit = e => {
    e.preventDefault()
    setSelected(e.target.searchLocation.value)
    document.getElementById("form").reset()
  }

  return (
    <div className="App">
      <div className='input'>
        <div className='input-other-location'>
          <h1 className='title'>Weather Searcher</h1>
          <form onSubmit={handleSubmit} id="form">
            <input type="text" placeholder=' Indique una ciudad' id="searchLocation" />
            <button className='btn-search'>Buscar</button>
          </form>
        </div>
        <div className='input-my-location'>
          <span>Ó</span>
          <button onClick={() => setSelected("mi-location")} className="btn-search">Usa tu ubicacion</button>
        </div>
      </div>
      <div>
        {
          selected == null ?
            <LoadingCard /> : selected != "mi-location" ?
              <OtherLocationCard selected={selected} /> : <MiLocationCard />
        }
      </div>
    </div>
  )
}

export default App
