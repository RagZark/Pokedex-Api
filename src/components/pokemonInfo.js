import React from 'react';
import usePokemon from '../components/usePokemon.js';

const PokemonInfo = ({ id }) => {
  const { pokemon, loading, error } = usePokemon(id); // Usando o hook

  // Renderizando o estado de carregamento
  if (loading) {
    return <p>Carregando Pokémon...</p>;
  }

  // Renderizando erro, se houver
  if (error) {
    return <p>Erro: {error}</p>;
  }

  // Verificação para garantir que o Pokémon foi carregado corretamente
  if (!pokemon) {
    return <p>Nenhum Pokémon encontrado.</p>;
  }

  // Renderizando os dados do Pokémon
  // <img src={pokemon.sprites.other['official-artwork'].front_shiny} alt={pokemon.name} />
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
        {pokemon.abilities.map((abilityInfo) => (
          <li key={abilityInfo.slot}>{abilityInfo.ability.name}</li>
        ))}
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