import './App.css'
import { useState } from 'react'
import axios from 'axios'


function App() {
  
  const [ data, setData ] = useState({})
  const [ location, setLocation ] = useState('')

 const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=3b2730e53dc1143db1c9515aa10a5c66`


 const searchLocation = (event) =>{

      if (event.key === 'Enter') {
        axios
        .get(url)
        .then(resp => {
          setData(resp.data)
          console.log(resp.data)
        })

        setLocation('')
      }
 }

  return (
    <div className="app">
   
    <h1>Weather app</h1>
        <div className='searchbar'>
        <input
          value={location}
          onChange={event =>{ setLocation(event.target.value), onChange}}
          onKeyPress={searchLocation}
          placeholder='Enter Location . . . '
          type="text" />
        </div>
           
      <div className="container">

          <div className="temp">
            {data.main ? <p>{data.main.temp.toFixed()}°F</p> : null}
          </div>

          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>

          <div className="location">
            <p>{data.name}</p>
          </div>
      </div>
    </div>
  )
}

export default App
