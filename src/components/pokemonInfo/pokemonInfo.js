import React, { useState } from 'react';
import PokemonAbilities from '../pokemonAbilities/pokemonAbilities.js';
import './pokemonInfo.css'
import usePokemonFullData from '../usemodels/usePokemonFullData.js';
import PokemonCard from '../pokemonCard/pokemonCard.js';
import PokemonEvolutions from '../pokemonEvolutions/pokemonEvolutions.js';
import PokemonMoves from '../pokemonMoves/pokemonMoves.js';

const PokemonInfo = ({ id }) => {
  const { pokemonData: pokemon, loading, error } = usePokemonFullData(id);
  const [showMoves, setShowMoves] = useState(false);
  const [showAbilities, setShowAbilities] = useState(false);
  const [showEvolutions, setShowEvolutions] = useState(false);
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
      <PokemonCard pokemon={pokemon} />
      <div className='pokemon-more-information'>
        <div onClick={() => setShowMoves(!showMoves)} className='moves-container lined-background-pokeInfo'>
          <h2>Moves</h2>
          <div className={showMoves ? "visible" : "hidden"}>
            <PokemonMoves pokemon={pokemon} />
          </div>
        </div>
        <div onClick={() => setShowAbilities(!showAbilities)} className='abilities-container lined-background-pokeInfo'>
          <h2>Habilidades</h2>
          <div className={showAbilities ? "visible" : "hidden"}>
            <PokemonAbilities pokemon={pokemon} />
          </div>
        </div>
        <div onClick={() => setShowEvolutions(!showEvolutions)} className='pokemon-container-evolutions lined-background-pokeInfo'>
          <h2 >Evoluções</h2>
          <div className={showEvolutions ? "visible" : "hidden"}>
            <PokemonEvolutions pokemon={pokemon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;