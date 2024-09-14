import React from 'react';
import usePokemon from '../usemodels/usePokemon.js';
import PokemonAbilities from '../pokemonAbilities/pokemonAbilities.js';
import './pokemonInfo.css'
import TypesPokemon from '../pokemonTypes/typesPokemon.js';

const PokemonInfo = ({ id }) => {
  const { pokemon, abilities, loading, error } = usePokemon(id);

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
        <p>ID: #{pokemon.id.toString().padStart(4, '0')}</p>
        <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
        <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
        <TypesPokemon className='types' pokemon={pokemon}/>
      </div>
      <div className='moves'>
        <h3>Moves:</h3>
        <ul>
          {pokemon.moves.map((moveInfo) => (
            <li key={moveInfo.slot}>{moveInfo.move.name}</li>
          ))}
        </ul>
      </div>
      <div className='abilities-container'>
        <ul>
          <PokemonAbilities abilityNames={abilities} />
        </ul>
      </div>
    </div>
  );
};

export default PokemonInfo;