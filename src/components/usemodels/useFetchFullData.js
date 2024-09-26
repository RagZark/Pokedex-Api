import {useState, useEffect} from "react";
import getFullData from '../api/getFullData.js';

const usePokemonFullData = (pokemonId) => {
    const [pokemonData, setPokemonData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                setPokemonData(await getFullData(pokemonId));
            } catch (err) {
                setError("Failed to fetch Pokémon data");
            } finally {
                setLoading(false);
            }
        };

        if (pokemonId) {
            fetchData();
        }
    }, [pokemonId]);

    return { pokemonData, loading, error };
};

export default usePokemonFullData;