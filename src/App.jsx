import './App.css'
import { useEffect, useState } from 'react'
import Card from './components/Card'
import axios from 'axios'
function App() {
  
  const [ lat, setLat ] = useState([])
  const [ long, setLong ] = useState([])
  const [ data, setData ] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${import.meta.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${import.meta.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])
  

 
  return (
    <>
       {(typeof data.main != 'undefined') ? (
        <Card weatherData={data}/>
      ):(<div></div>)}
    </>
  )
}

export default App
