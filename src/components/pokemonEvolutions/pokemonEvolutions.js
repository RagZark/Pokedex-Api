import React from "react";
import { useNavigate } from "react-router-dom";
import TypesPokemon from "../typesPokemon/typesPokemon.js";
import "./pokemonEvolutions.css";
import styled from "styled-components";

const PokemonEvolutions = ({ pokemon }) => {
    const navigate = useNavigate();

    if (!pokemon) {
        return null;
    }

    const handleClick = (id) => {
        navigate(`/pokedex/${id}`);
    };

    const formattedId = (id) => id.toString().padStart(4, '0');
    const formattedName = (pokeName) => pokeName.charAt(0).toUpperCase() + pokeName.slice(1);

    const firstEvolutions = (pokemonFirstEvolutions) => {
        if (pokemonFirstEvolutions.length === 0) {
            return (<p className="no-evolution">Este Pokémon não evolui.</p>);
        }

        return (
            <Grid evolutionsLength={pokemonFirstEvolutions.length}>
                {pokemonFirstEvolutions.map((evolution) => (
                    <li
                        key={evolution.id}
                        className={"first-evo pokemon-evo-design"}
                        onClick={() => handleClick(evolution.id)}
                    >
                        <img src={evolution.imageAndTypes.frontDefault} alt={evolution.name}></img>
                        <p>{formattedName(evolution.name)} #{formattedId(evolution.id)}</p>
                        <TypesPokemon isRow={true} pokemon={evolution.imageAndTypes} />
                    </li>
                ))}
            </Grid>
        );
    };

    const secondEvolutions = (pokemonFirstEvolutions) => {
        return (
            <Grid evolutionsLength={pokemonFirstEvolutions.length}>
                {pokemonFirstEvolutions.map((evolution) => (
                    Array.isArray(evolution.secondEvolution) && evolution.secondEvolution.length > 0 && (
                        evolution.secondEvolution.map((secondEvo) => (
                            <li key={secondEvo.id} className="second-evo pokemon-evo-design" onClick={() => handleClick(secondEvo.id)}>
                                <img src={secondEvo.imageAndTypes.frontDefault} alt={secondEvo.name}></img>
                                <p>{formattedName(secondEvo.name)} #{formattedId(secondEvo.id)}</p>
                                <TypesPokemon isRow={true} pokemon={secondEvo.imageAndTypes} />
                            </li>
                        ))
                    )
                ))}
            </Grid>
        );
    };

    return (
        <Evolutions heightCellEvo={props => props.heightCellEvos}>
            <div className="original-pokemon pokemon-evo-design" onClick={() => handleClick(pokemon.evolutions.originalPokemon.id)}>
                <img src={pokemon.evolutions.originalPokemon.imageAndTypes.frontDefault} alt={pokemon.evolutions.originalPokemon.name}></img>
                <p>{formattedName(pokemon.evolutions.originalPokemon.name)} #{formattedId(pokemon.evolutions.originalPokemon.id)}</p>
                <TypesPokemon isRow={true} pokemon={pokemon.evolutions.originalPokemon.imageAndTypes} />
            </div>
            <div className="pokemon-evolutions">
                {firstEvolutions(pokemon.evolutions.firstEvolution)}
                {secondEvolutions(pokemon.evolutions.firstEvolution)}
            </div>
        </Evolutions>
    );
}

const Grid = styled.ul`
    display: grid;
    gap: 10px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        color: transparent;
    }

        grid-template-columns: ${({ evolutionsLength }) => {
        switch (evolutionsLength) {
            case 1:
                return "none";
            case 2:
                return "repeat(1, 1fr)";
            case 3:
                return "repeat(3, 1fr)";
            default:
                return "repeat(4, 1fr)";
        }
    }};

    ${({ evolutionsLength }) =>
        (evolutionsLength === 1 || evolutionsLength === 3) &&
        `
        justify-items: center;
        align-items: center;
    `}

    @media (min-width: 1025px) and (max-width: 1440px) {
        grid-template-columns: ${({ evolutionsLength }) => {
        switch (evolutionsLength) {
            case 1:
                return "none";
            case 2:
                return "repeat(1, 1fr)";
            case 3:
                return "repeat(3, 1fr)";
            default:
                return "repeat(4, 1fr)";
        }
    }};
}
 
    @media (min-width: 885px) and (max-width: 1024px) {
        grid-template-columns: ${({ evolutionsLength }) => {
        switch (evolutionsLength) {
            case 1:
                return "1fr";
            case 2:
                return "repeat(1, 1fr)";
            case 3:
                return "repeat(3, 1fr)";
            default:
                return "repeat(2, 1fr)";
        }
    }};
  }
  
    @media (min-width: 481px) and (max-width: 884px) {
        grid-template-columns: ${({ evolutionsLength }) => {
        switch (evolutionsLength) {
            case 1:
                return "1fr";
            case 2:
                return "repeat(1, 1fr)";
            case 3:
                return "repeat(3, 1fr)";
            default:
                return "repeat(2, 1fr)";
        }
    }};
  }
  
    @media (max-width: 480px) {
        grid-template-columns: 1fr; 
        overflow: visible;
  }  
 
`;

const Evolutions = styled.div`
    display: flex;
    align-items: center;
    overflow-y: auto;

    @media (max-width: 480px) {
        overflow: visible;
        width: 90%
        height: 400px;
        flex-direction: column; 
    }
`

export default PokemonEvolutions;