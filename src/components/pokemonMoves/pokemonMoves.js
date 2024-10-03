import React from "react"
import './pokemonMoves.css'

const PokemonMoves = ({ pokemon }) => {
    return (
            <ul className='moves-list'>
                {pokemon.moves?.map((moveInfo) => (
                    <li className='moves-name' key={moveInfo}>{moveInfo}</li>
                ))}
            </ul> 
    )
}

export default PokemonMoves