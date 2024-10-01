import React from 'react';
import './pokemonDetails.css';
import TypesPokemon from '../typesPokemon/typesPokemon.js';

const PokemonDetails = ({ pokemon }) => {
    if (!pokemon) {
        return <div className="pokemon-details no-pokemon"><h2>Aguardando a seleção de um pokemon...</h2></div>;
    }
    const formattedId = `#${pokemon.id.toString().padStart(4, '0')}`;

    return (
        <>
            <div className="pokemon-details">
                <div className='pokemon-details-specify'>
                    <h3>ID: {formattedId}</h3>
                    <img src={pokemon.animeImage} alt={pokemon.name} />
                    <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
                </div>
                <div className='pokemon-details-types'>
                    <TypesPokemon pokemon={pokemon} />
                </div>
            </div>
        </>
    );
};

export default PokemonDetails;