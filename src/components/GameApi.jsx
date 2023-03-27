import { useEffect, useState } from 'react';
import Axios from 'axios';

export const GameApi = () => {
  const [pokemons, setPokemon] = useState([]);
  const [pokemonName, setPokemonName] = useState(null);
  const [pokemonUrl, setPokemonUrl] = useState(null);

  const fetchPokemons = () => {
    Axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1500').then(
      (res) => {
        setPokemon(res.data.results);
      }
    );
  };

  const fetchPokemonDetails = () => {
    if (pokemonUrl != null) {
      Axios.get(pokemonUrl).then((res) => {
        setPokemonUrl(res.data.results);
      });
    }
  };

  const handleFetchUrl = (url) => {
    setPokemonUrl(url);
  };

  useEffect(() => {
    setPokemonUrl();
    fetchPokemons();
    handleFetchUrl();
  }, []);

  const handleChange = (event) => {
    setPokemonName(event.target.value);
  };
  return (
    <section className='text-center px-5'>
      <div className='d-md-flex text-center col-md-4 pb-3'>
        <input
          className='form-control rounded-1'
          onChange={handleChange}
          placeholder="Enter Pokemon's Name"
        />
      </div>

      {pokemons.map((pokemon) => {
        if (pokemon.name === pokemonName?.toLocaleLowerCase()) {
          return (
            <button
              className='btn btn-outline-warning text-dark'
              onClick={() => {
                fetchPokemonDetails();
              }}
              key={pokemon.name}
            >
              <div>{pokemon.name}</div>
            </button>
          );
        } else {
          return <div key={pokemon.name}></div>;
        }
      })}

      <div id='pokemonContent'></div>
    </section>
  );
};
