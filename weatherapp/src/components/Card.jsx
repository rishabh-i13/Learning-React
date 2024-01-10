import React from "react";
import {useWeather} from '../context/Weather'

const Card =()=>{

    const weather=useWeather();

    return(
        <div className="card">
            <img src={weather?.data?.current?.condition?.icon} alt="weatherimage" />
            <h2>{weather.data?.location?.name}</h2>
            <h3>Temperature (&deg;F)= {weather.data?.current?.temp_f}</h3>
            <h3>Temperature (&deg;C)= {weather.data?.current?.temp_c}</h3>
            <h5>{weather.data?.location?.region},{weather.data?.location?.country}</h5>

        </div>
    )
}

export default Card;