import axios from 'axios';

// action types
export const SET_CITY = "SET_CITY";
export const SET_WEATHER = "SET_WEATHER";
export const ADD_CITY = "ADD_CITY";
export const FETCH_DATA = "FETCH_DATA";
export const FETCH_ERROR = "FETCH_ERROR";

export const setCity = (city) => ({
    type: SET_CITY,
    payload: city
});

export const setWeather = (weather) => ({
    type: SET_WEATHER,
    payload: weather
});

export const addCity = (city) => ({
    type: ADD_CITY,
    payload: city
})

// async functions
export const fetchWeather = (city) => {
    return async (dispath) => {
        dispath({type: FETCH_DATA})
        await axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4e134eea4f53361bf6a2006852b3b925`
            )
            .then((data) => {
                dispath(setWeather(data.data))
                console.log(data.data);
            })
            .catch((err) => {
                dispath({ type: FETCH_ERROR})
                console.log(err);
            });
    }
}