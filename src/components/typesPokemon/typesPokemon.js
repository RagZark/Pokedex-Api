import React from "react";
import styled from "styled-components";

const TypesPokemon = ({ pokemon, isRow }) => {
    const getTextColor = (hexColor) => {
        hexColor = hexColor.replace('#', '');

        const r = parseInt(hexColor.substring(0, 2), 16);
        const g = parseInt(hexColor.substring(2, 4), 16);
        const b = parseInt(hexColor.substring(4, 6), 16);


        const luminosity = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        return luminosity > 0.5 ? 'black' : 'white';
    };

    const colours = {
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD',
    };

    if (!pokemon?.types || pokemon.types.length === 0) {
        return <p>Sem tipos disponíveis.</p>;
    }

    return (
        <ListaTipos isRow={isRow} className={props => props.classe}>
            {pokemon.types.map((typeInfo, index) => {
                const backgroundColor = colours[typeInfo];
                const textColor = getTextColor(backgroundColor)

                return (
                    <EstiloTipo
                        key={index}
                        className="type"
                        style={{
                            backgroundColor: backgroundColor,
                            color: textColor
                        }}
                    >
                        {typeInfo.toUpperCase()}
                    </EstiloTipo>
                );
            })}
        </ListaTipos>
    );
};

const ListaTipos = styled.ul`
    @media (max-width: 480px) {
        display: flex;
        align-items: center;
        flex-direction: ${props => (props.isRow ? "row" : "column")};
    }
    }
`

const EstiloTipo = styled.li`
    width: ${props => props.largura || "120px"};
    height: ${props => props.altura || "40px"};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px 50px 50px 50px;
    border: 2px solid #000000;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;

    @media (min-width: 769px) and (max-width: 1440px) {
        width: 100px;
        height: 34px;
        font-size: 18px;
    }
    
    @media (max-width: 480px) {
        height: 28dpx;
        font-size: 16px;
    }
`

export default TypesPokemon;