import React from "react"
import './pokemonMoves.css'

const PokemonMoves = ({ pokemon }) => {
    const formattedName = (moveName) => moveName.charAt(0).toUpperCase() + moveName.slice(1);
    return (
            <ul className='moves-list'>
                {pokemon.moves?.map((moveInfo) => (
                    <li className='moves-name' key={moveInfo}>{formattedName(moveInfo)}</li>
                ))}
            </ul> 
    )
}

export default PokemonMoves