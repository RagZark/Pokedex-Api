import React from 'react';
import styled from 'styled-components';
import { useBackground } from '../../components/backgroundContext/backgroundContext.js';
import PokemonList from '../../components/pokemonList/pokemonsList.js';
import '../../../src/reset.css';

const Pokedex = () => {
    const { backgroundColor } = useBackground();

    return (
        <ContainerPokedex backgroundColor={backgroundColor}>
            <PokemonList />
        </ContainerPokedex>
    );
};

const ContainerPokedex = styled.div`
    background-color: ${props => props.backgroundColor};
    min-height: 100vh; 
    width: 100%;
    box-shadow: inset 0 0 8px 8px rgba(0, 0, 0, .75);
    padding: 90px 0 0 90px;
`;

export default Pokedex;