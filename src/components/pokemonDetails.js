import React from 'react';
import './pokemonDetails.css'; // Importar CSS para estilização
import TypesPokemon from './typesPokemon.js';

const PokemonDetails = ({ pokemon }) => {
    if (!pokemon) {
        return <div className="pokemon-details no-pokemon"><h2>Aguardando a seleção de um pokemon...</h2></div>;
    }

    const { id, name, sprites } = pokemon;
    const formattedId = `#${id.toString().padStart(4, '0')}`;

    return (
        <>
            <div className="pokemon-details">
                <div className='pokemon-details-specify'>
                    <img src={sprites.other["official-artwork"].front_default} alt={name} />
                    <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
                    <h3>{formattedId}</h3>
                </div>

                <div className='pokemon-details-types'>
                    <TypesPokemon pokemon={pokemon}/>
                </div>
            </div>
        </>
    );
};

export default PokemonDetails;