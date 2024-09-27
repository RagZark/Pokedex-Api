import React from 'react';
import styled from 'styled-components';

const PokemonAbilities = ({ pokemon }) => {
  return (
    <div>
      <h2>Habilidades:</h2>
      {pokemon.abilities.map((ability) => (
           <div>
           <p><StyleNameAbility key={ability.name}>{ability.name.charAt(0).toUpperCase() + ability.name.slice(1)}:</StyleNameAbility> {ability.description}</p>
         </div>
      ))}
    </div>
  );
};

const StyleNameAbility = styled.span`
  font-size: 20px;
  font-weight: 600;
`

export default PokemonAbilities;