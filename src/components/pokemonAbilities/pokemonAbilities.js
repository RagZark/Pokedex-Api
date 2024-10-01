import React from 'react';
import styled from 'styled-components';
import "./pokemonAbilities.css"

const PokemonAbilities = ({ pokemon }) => {
  if (!pokemon?.abilities || pokemon.abilities.length === 0) {
    return <p>Sem habilidades encontradas.</p>;
  }
  return (
    <div className='ability-container'>
      <ul className='ability-list'>{pokemon.abilities.map((ability) => (
        <li className='ability'>
          <p><StyleNameAbility key={ability.name}>{ability.name.charAt(0).toUpperCase() + ability.name.slice(1)}:</StyleNameAbility> {ability.description}</p>
        </li>
      ))}
      </ul>
    </div>
  );
};

const StyleNameAbility = styled.span`
  font-size: 20px;
  font-weight: 600;
`

export default PokemonAbilities;