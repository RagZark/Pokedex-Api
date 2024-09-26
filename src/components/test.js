import React, { useState, useEffect } from 'react';
import usePokemonFullData from './usemodels/useFetchFullData.js';

const PokeInfo = ({ pokemonId }) => {
    const { pokemonData, loading, error } = usePokemonFullData(pokemonId);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!pokemonData) {
        return <div>No data found</div>;
    }

    return (
        <div>
            <h2>{pokemonData.name}</h2>
            <img src={pokemonData.pixelImage} alt={pokemonData.name} />
            <p>Types: {pokemonData.types.join(', ')}</p>
            <p>Abilities:</p>
            <ul>
                {pokemonData.abilities.map((ability, index) => (
                    <li key={index}>
                        {ability.name} - {ability.description}
                    </li>
                ))}
            </ul>
            <p>Moves: {pokemonData.moves.join(', ')}</p>
        </div>
    );
};
export default PokeInfo;