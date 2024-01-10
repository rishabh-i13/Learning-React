import React from "react";
import {useWeather} from '../context/Weather'
const Input =()=>{

    const weather =useWeather();
    console.log("Weather",weather);

    return(
        <input 
        placeholder="Search here..."
        value={weather.searchCity} onChange={(e)=>weather.setSearchCity(e.target.value)} className="input-field" />
    )
}
export default Input;
