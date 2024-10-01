import React from 'react';
import PokemonAbilities from '../pokemonAbilities/pokemonAbilities.js';
import './pokemonInfo.css'
import usePokemonFullData from '../usemodels/usePokemonFullData.js';
import PokemonDetails from '../pokemonDetails/pokemonDetails.js';
import PokemonEvolutions from '../pokemonEvolutions/pokemonEvolutions.js';
import PokemonMoves from '../pokemonMoves/pokemonMoves.js';

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
      <PokemonDetails pokemon={pokemon} />
      <div className='pokemon-more-information'>
        <div className='moves-container lined-background-pokeInfo'>
          <h2>Moves</h2>
          <PokemonMoves pokemon={pokemon} />
        </div>
        <div className='abilities-container lined-background-pokeInfo'>
          <h2>Habilidades</h2>
          <PokemonAbilities pokemon={pokemon} />
        </div>
        <div className='pokemon-container-evolutions lined-background-pokeInfo'>
          <h2>Evoluções</h2>
          <PokemonEvolutions pokemon={pokemon} />
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;