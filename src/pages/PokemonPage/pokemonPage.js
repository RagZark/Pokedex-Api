import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import PokemonInfo from '../../components/pokemonInfo.js'; 
import './pokemonPage.css'

const PokemonPage = () => {
    const { id } = useParams();
    const [pokemonId, setPokemonId] = useState(Number(id));

    const handleNext = () => {
        setPokemonId(prevId => (prevId <= 1025 ? prevId + 1 : 1));
    };

    const handlePrev = () => {
        setPokemonId(prevId => (prevId > 1 ? prevId - 1 : 1025));
    };

    useEffect(() => {
        setPokemonId(Number(id));
    }, [id]);

    return (
        <>
            <div>
                <PokemonInfo id={pokemonId} /> 
            </div>
        </>
    );
};

export default PokemonPage;