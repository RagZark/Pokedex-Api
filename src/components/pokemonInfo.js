import React from 'react';
import usePokemon from '../components/usePokemon.js';
import PokemonAbilities from './pokemonAbilities.js';

const PokemonInfo = ({ id }) => {
  const { pokemon, abilities, loading, error } = usePokemon(id); // Incluindo abilities aqui

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
      <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
      <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
      <div>
        <h3>Tipos:</h3>
        <ul>
          {pokemon.types.map((typeInfo) => (
            <li key={typeInfo.slot}>{typeInfo.type.name}</li>
          ))}
        </ul>
        <h3>Habilidades:</h3>
        <ul>
          <PokemonAbilities abilityNames={abilities} /> {/* Passa os nomes das habilidades */}
        </ul>
        <h3>Moves:</h3>
        <ul>
          {pokemon.moves.map((moveInfo) => (
            <li key={moveInfo.slot}>{moveInfo.move.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonInfo;