import React from 'react';
import './pokemonDetails.css'; // Importar CSS para estilização

const PokemonDetails = ({ pokemon }) => {
    if (!pokemon) {
        return <div className="pokemon-details">Selecione um Pokémon para ver os detalhes.</div>;
    }

    const { id, name, sprites, types } = pokemon;
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
                    <ul>
                        {types.map((typeInfo, index) => (
                            <li key={index}>{typeInfo.type.name.toUpperCase()}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default PokemonDetails;