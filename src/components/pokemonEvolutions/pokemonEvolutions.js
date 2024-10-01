import React from "react";
import TypesPokemon from "../typesPokemon/typesPokemon.js";
import "./pokemonEvolutions.css"

const PokemonEvolutions = ({ pokemon }) => {
    if (!pokemon) {
        return null;
    }

    const formattedId = (id) => id.toString().padStart(4, '0');
    const formattedName = (pokeName) => pokeName.charAt(0).toUpperCase() + pokeName.slice(1);

    const CheckFirstEvo = (firstevo) => {
        if (firstevo.length === 0) {
            return (
                <li>
                    <p>Este Pokémon não evolui.</p>
                </li>
            );
        } else {
            return firstevo.map((evo) => (
                <>
                <li className="first-evo pokemon-evo-design" key={evo.id}>
                    <img src={evo.imageAndTypes.frontDefault} alt={evo.name}></img>
                    <p>{formattedName(evo.name)} #{formattedId(evo.id)}</p>
                    <TypesPokemon pokemon={evo.imageAndTypes} />
                </li>
                {CheckSecondEvo(evo.secondEvolution)}
                </>
            ));
        }
    };

    const CheckSecondEvo = (secondevo) => {
        if (secondevo.length === 0) {
            return(<li style={{display: "none"}}></li>);
        } else {
            return secondevo.map((evo) => (
                <li className="second-evo pokemon-evo-design" key={evo.id}>
                    <img src={evo.imageAndTypes.frontDefault} alt={evo.name}></img>
                    <p>{formattedName(evo.name)} #{formattedId(evo.id)}</p>
                    <TypesPokemon pokemon={evo.imageAndTypes} />
                </li>
            ));
        }
    };

    return (
        <div className="pokemon-evolutions">
            <ul className="pokemon-evolutions-list">
                <li className="original-pokemon pokemon-evo-design">
                    <img src={pokemon.evolutions.originalPokemon.imageAndTypes.frontDefault} alt={pokemon.evolutions.originalPokemon.name}></img>
                    <p>{formattedName(pokemon.evolutions.originalPokemon.name)} #{formattedId(pokemon.evolutions.originalPokemon.id)}</p>
                    <TypesPokemon pokemon={pokemon.evolutions.originalPokemon.imageAndTypes}/>
                </li>
                {CheckFirstEvo(pokemon.evolutions.firstEvolution)}
            </ul>
        </div>
    );
};

export default PokemonEvolutions;