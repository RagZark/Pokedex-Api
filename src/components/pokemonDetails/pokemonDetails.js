import React from 'react';
import './pokemonDetails.css';
import TypesPokemon from '../pokemonTypes/typesPokemon.js';

const PokemonDetails = ({ pokemon }) => {
    if (!pokemon) {
        return <div className="pokemon-details no-pokemon"><h2>Aguardando a seleção de um pokemon...</h2></div>;
    }
    const formattedId = `#${pokemon.id.toString().padStart(4, '0')}`;

    console.log(pokemon)

    return (
        <>
            <div className="pokemon-details">
                <div className='pokemon-details-specify'>
                    <img src={pokemon.animeImage} alt={pokemon.name} />
                    <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
                    <h3>{formattedId}</h3>
                </div>

                <div className='pokemon-details-types'>
                    <TypesPokemon pokemon={pokemon}/>
                </div>
            </div>
        </>
    );
};

PokemonDetails(1)

export default PokemonDetails;