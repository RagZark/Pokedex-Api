import React from 'react';
import PokemonAbilities from '../pokemonAbilities/pokemonAbilities.js';
import './pokemonInfo.css'
import TypesPokemon from '../typesPokemon/typesPokemon.js';
import usePokemonFullData from '../usemodels/usePokemonFullData.js';
import PokemonDetails from '../pokemonDetails/pokemonDetails.js';

const PokemonInfo = ({ id }) => {
  const { pokemonData: pokemon, loading, error } = usePokemonFullData(id);

  if (loading) {
    return <p>Carregando Pokémon...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  if (!pokemon) {
    return <p>Nenhum Pokémon encontrado.</p>;
  }

  return (
    <div className='pokemon-info'>
      <div className='pokemon-base-info'>
        <PokemonDetails pokemon={pokemon}/>
      </div>
      <div className='moves'>
        <h3>Moves:</h3>
        <ul className='moves-list'>
          {pokemon.moves?.map((moveInfo) => (
            <li className='moves-name' key={moveInfo}>{moveInfo}</li>
          ))}
        </ul>
      </div>
      <div className='abilities-container'>
        <ul>
          <PokemonAbilities pokemon={pokemon} />
        </ul>
      </div>
    </div>
  );
};

export default PokemonInfo;