import { useEffect, useState } from 'react';
import Axios from 'axios';

export const GameApi = () => {
  const [pokemons, setPokemon] = useState([]);
  const [pokemonName, setPokemonName] = useState('');

  const fetchPokemons = () => {
    Axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1500').then(
      (res) => {
        setPokemon(res.data.results);
      }
    );
  };
  useEffect(() => {
    fetchPokemons();
  }, []);

  const handleChange = (event) => {
    console.log(event.target.value);
    setPokemonName(event.target.value);
  };

  const searchPokemonName = () => {
    pokemons.map((pokemon) => {
      if (pokemon.name === pokemonName) {
        return pokemonName;
      } else {
        return console.log('hello');
      }
    });
  };

  return (
    <section className='text-center p-5'>
      <div className='d-md-flex text-center col-md-4 pb-3'>
        <input className='form-control rounded-1' onChange={handleChange} />
      </div>

      {pokemons.map((pokemon) => {
        if (pokemon.name === pokemonName) {
          return (
            <button className='btn btn-outline-warning text-dark'>
              <div>{pokemon.name}</div>
            </button>
          );
        } else {
          return <div></div>;
        }
      })}

      <div id='pokemonContent'></div>
    </section>
  );
};
