import useFetchData from './useFetchData.js';
import getData from './api/getData.js'; // Função que faz a busca de dados do Pokémon

const usePokemon = (id) => {
  const { data: pokemon, loading, error } = useFetchData(getData, id);
  
  // Se o pokemon tiver dados, extraímos os nomes das habilidades
  const abilities = pokemon?.abilities?.map(abilityInfo => abilityInfo.ability.name) || [];

  return { pokemon, abilities, loading, error };
};

export default usePokemon;