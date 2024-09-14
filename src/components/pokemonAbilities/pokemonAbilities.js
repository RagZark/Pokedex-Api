import React from 'react';
import useAbility from '../usemodels/useAbility.js';
import styled from 'styled-components';

const PokemonAbilities = ({ abilityNames }) => {
  return (
    <div>
      <h2>Habilidades:</h2>
      {abilityNames.map((name) => (
        <AbilityDetails key={name} name={name} />
      ))}
    </div>
  );
};

const AbilityDetails = ({ name }) => {
  const { ability, loading, error } = useAbility(name);

  if (loading) return <p>Carregando {name}...</p>;
  if (error) return <p>Erro ao carregar {name}: {error}</p>;

  return (
    <div>
      <p><StyleNameAbility>{ability.name.charAt(0).toUpperCase() + ability.name.slice(1)}:</StyleNameAbility> {ability.effect_entries[1]?.short_effect}</p>
    </div>
  );
};

const StyleNameAbility = styled.span`
  font-size: 20px;
  font-weight: 600;
`

export default PokemonAbilities;