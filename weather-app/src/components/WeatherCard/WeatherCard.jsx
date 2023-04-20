import React from 'react'
import styled from "styled-components";

const CustomWeatherCard = styled.div`
    border: 1px solid #dedede;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const WeatherCard = ({ id, name, sys, weather, main}) => {
  return (
    <CustomWeatherCard key={id}>
        <h2>{name}, {sys.country}</h2>
        <p>{weather[0].discription}</p>
        <p><b>Temp:</b> {main.temp} &deg;</p>
        <p><b>Feels Like:</b> {main.feels_like} &deg;</p>
        <p><b>Humidity:</b> {main.humidity}</p>

    </CustomWeatherCard>
  )
}

export default WeatherCard