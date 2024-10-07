import React, { useState } from 'react';
import './pokemonCard.css';
import TypesPokemon from '../typesPokemon/typesPokemon.js';
import hourGlass from '../../img/hourglass.gif'

const PokemonCard = ({ pokemon }) => {
    const [isShiny, setIsShiny] = useState(false);

    if (!pokemon) {
        return <div className="pokemon-details no-pokemon">
            <h1>Aguardando a seleção de um pokemon</h1>
            <img style={{ height: '50px', width: '50px' }} src={hourGlass} alt='ampulheta'></img>
        </div>;
    }

    const formattedId = `#${pokemon.id.toString().padStart(4, '0')}`;

    const handleCheckboxChange = () => {
        setIsShiny(!isShiny);
    };

    return (
        <div className="pokemon-details">
            <div className='pokemon-details-specify'>
                <h3>ID: {formattedId}</h3>
                <img src={isShiny ? pokemon.animeShinyImage : pokemon.animeImage} alt={pokemon.name} />
                <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
            </div>
            <div className='pokemon-details-types'>
                <TypesPokemon pokemon={pokemon} />
            </div>
            <div className="pokemon-checkbox">
                <label>
                    <input type="checkbox" checked={isShiny} onChange={handleCheckboxChange} />Shiny Version
                </label>
            </div>
        </div>
    );
};

export default PokemonCard;