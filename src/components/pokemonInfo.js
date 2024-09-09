import React, { useEffect, useState } from 'react';
import getData from './getData.js'; // Ajuste o caminho conforme o seu projeto

const PokemonInfo = ({ id }) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para buscar os dados do Pokémon
  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      setError(null); // Resetando erro
      try {
        const data = await getData(id);
        setPokemon(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]); // Reexecuta quando o ID mudar

  // Renderizando o estado de carregamento
  if (loading) {
    return <p>Carregando Pokémon...</p>;
  }

  // Renderizando erro, se houver
  if (error) {
    return <p>Erro: {error}</p>;
  }

  // Verificação para garantir que o Pokémon foi carregado corretamente
  if (!pokemon) {
    return <p>Nenhum Pokémon encontrado.</p>;
  }

  // Renderizando os dados do Pokémon
  return (
    <div>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
      <h3>Tipos:</h3>
      <ul>
        {pokemon.types.map((typeInfo) => (
          <li key={typeInfo.slot}>{typeInfo.type.name}</li>
        ))}
      </ul>
      <h3>Habilidades:</h3>
      <ul>
        {pokemon.abilities.map((abilityInfo) => (
          <li key={abilityInfo.slot}>{abilityInfo.ability.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonInfo;