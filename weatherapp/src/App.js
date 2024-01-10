import { useEffect } from 'react';

import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';
import {useWeather} from './context/Weather'
import './App.css';

function App() {
  const weather =useWeather();
  console.log(weather);

  //take current location of the user

  useEffect(()=>{
    weather.fetchCurrentLocationUserData();
  },[]);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Input/>
      <Button  onClick={weather.fetchData} value="Search"/>
      <Card/>
    </div>
  );
}

export default App;
