import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchWeather, setCity, addCity } from '../../actions/weatherAction'

const SearchContainer = styled.div`
    width: 100%;
    margin: 1rem 0;
    form{
        border:1px solid black;
        position: relative;
        input{
            width: 100%;
            height: 40px;
            padding: 0 1rem;
            font-size: 16px;
            outline: none;
        }
        button{
            position: absolute;
            right: 6px;
            top: 6px;
            height: 28px;
            padding: 6px 12px;
        }
    }
`;

const Search = () => {
    const [ selectedCity, setSelectedCity ] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchWeather(selectedCity));
        dispatch(setCity(selectedCity));
        dispatch(addCity(selectedCity));
    }

  return (
    <SearchContainer>
        <form onSubmit={handleSubmit}>
            <input type="text" value={selectedCity} placeholder='City that you like' onChange={(e) => setSelectedCity(e.target.value)} />
            <button>Search</button>
        </form>
    </SearchContainer>
  )
}

export default Search