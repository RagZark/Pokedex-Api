import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PokemonInfo from '../../components/pokemonInfo/pokemonInfo.js';
import { useBackground } from '../../components/backgroundContext/backgroundContext.js'
import styled from 'styled-components';
import './pokemonPage.css'


const PokemonPage = () => {
    const { id } = useParams();
    const [pokemonId, setPokemonId] = useState(Number(id));
    const { backgroundColor } = useBackground()

    // const handleNext = () => {
    //     setPokemonId(prevId => (prevId <= 1025 ? prevId + 1 : 1));
    // };

    // const handlePrev = () => {
    //     setPokemonId(prevId => (prevId > 1 ? prevId - 1 : 1025));
    // };

    useEffect(() => {
        setPokemonId(Number(id));
    }, [id]);

    return (
        <>
            <ContainerPokemonPage style={{ backgroundColor: backgroundColor }}>
                <div>
                    <PokemonInfo id={pokemonId} />
                </div>
            </ContainerPokemonPage>
        </>
    );
};

const ContainerPokemonPage = styled.div`
  box-shadow: inset 0 0 8px 8px rgba(0, 0, 0, .75);
  min-height: 100vh;
  width: 100%;
`

export default PokemonPage;