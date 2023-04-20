import './App.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from './actions/weatherAction'
import Search from './components/Search/Search'
import WeatherCard from './components/WeatherCard/WeatherCard'
import PrevCities from './components/PrevCities/PrevCities'

function App() {
  const dispatch = useDispatch();
  const [ sidebar, setSidebar ] = useState(true);
  const weather = useSelector(state => state.weather);
  const isLoading = useSelector(state => state.isLoading);

  useEffect(() => {
    dispatch(fetchWeather("Vancouver"));
  }, [dispatch])

  return (
    <div className="App">
      <Search />
      <button onClick={() => setSidebar(true)}>Open Sidebar</button>
      {
        isLoading
        ? <div>Loading...</div>
        : weather && <WeatherCard {...weather} />
      }
      <PrevCities isOpen={sidebar} onClose={() => setSidebar(false)} />
    </div>
  )
}

export default App
