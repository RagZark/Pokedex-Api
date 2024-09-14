import useFetchData from './useFetchData.js';
import getDataAbility from '../api/getDataAbility.js';

const useAbility = (name) => {
  const { data: ability, loading, error } = useFetchData(getDataAbility, name);
  return { ability, loading, error };
};

export default useAbility;