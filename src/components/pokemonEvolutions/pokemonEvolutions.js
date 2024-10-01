import React from "react";
import { useNavigate} from "react-router-dom";
import TypesPokemon from "../typesPokemon/typesPokemon.js";
import "./pokemonEvolutions.css"

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
    
    const CheckEvo = (evolutions, isFirstEvo = false) => {
        if(pokemon.evolutions.firstEvolution.length === 0){
            return(<p className="no-evolution">Este pokemon não evolui.</p>)
        } else{
        return evolutions.map((evo) => (
            <React.Fragment key={evo.id}>
                <li className={`${isFirstEvo ? "first-evo" : "second-evo"} pokemon-evo-design`} onClick={() => handleClick(evo.id)}>
                    <img src={evo.imageAndTypes.frontDefault} alt={evo.name}></img>
                    <p>{formattedName(evo.name)} #{formattedId(evo.id)}</p>
                    <TypesPokemon pokemon={evo.imageAndTypes} />
                </li>
                {evo.secondEvolution && evo.secondEvolution.length > 0 && (
                    <ul className="pokemon-second-evos">
                        {CheckEvo(evo.secondEvolution)}
                    </ul>
                )}
            </React.Fragment>
        ));
    }
};
    return (
        <div className="pokemon-evolutions-box">
            <div className="original-pokemon pokemon-evo-design" onClick={() => handleClick(pokemon.evolutions.originalPokemon.id)}>
                <img src={pokemon.evolutions.originalPokemon.imageAndTypes.frontDefault} alt={pokemon.evolutions.originalPokemon.name}></img>
                <p>{formattedName(pokemon.evolutions.originalPokemon.name)} #{formattedId(pokemon.evolutions.originalPokemon.id)}</p>
                <TypesPokemon pokemon={pokemon.evolutions.originalPokemon.imageAndTypes} />
            </div>
            <div className="pokemon-evolutions">
                <ul className="pokemon-first-evos">
                    {CheckEvo(pokemon.evolutions.firstEvolution, true)}
                </ul>
            </div>
        </div >
    );
};

export default PokemonEvolutions;