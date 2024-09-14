import useFetchData from './useFetchData.js';
import getData from '../api/getData.js';

const usePokemon = (id) => {
  const { data: pokemon, loading, error } = useFetchData(getData, id);
  
  const abilities = pokemon?.abilities?.map(abilityInfo => abilityInfo.ability.name) || [];

  return { pokemon, abilities, loading, error };
};

export default usePokemon;