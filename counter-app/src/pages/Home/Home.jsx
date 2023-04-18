import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { fetchCharacterData } from '../../actions/ramActions';

const Home = () => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.ram.characters);

  useEffect(() => {
    let res = axios.get("https://rickandmortyapi.com/api/character");
    res.then(data => {
      dispatch(fetchCharacterData(data.data.results))
    })
  }, [dispatch])

  return (
    <div>
      {
        characters.map(character => {
          return (
            <div key={character.id}>{character.name}</div>
          )
        })
      }
    </div>
  )
}

export default Home