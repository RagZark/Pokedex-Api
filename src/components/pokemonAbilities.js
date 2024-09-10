import React from 'react';
import useAbility from './useAbility.js';

const PokemonAbilities = ({ abilityNames }) => {
  return (
    <div>
      <h3>Habilidades:</h3>
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
      <h3>{ability.name}</h3>
      <p>{ability.effect_entries[0]?.short_effect}</p> {/* Exemplo de como usar os detalhes da habilidade */}
    </div>
  );
};

export default PokemonAbilities;