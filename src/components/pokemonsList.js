import React, { useState, useEffect } from 'react';
import getData from '../components/api/getData.js';
import './pokemonList.css';

const PokemonList = () => {
    const [pokemonIds, setPokemonIds] = useState(Array.from({ length: 10 }, (_, i) => i + 1)); // IDs de 1 a 10
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemons = async () => {
            setLoading(true);
            setError(null);

            try {
                const promises = pokemonIds.map(id => getData(id));
                const pokemonData = await Promise.all(promises);
                setPokemons(pokemonData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemons();
    }, [pokemonIds]);

    const loadMorePokemons = () => {
        setPokemonIds((prevIds) => {
            const lastId = prevIds[prevIds.length - 1];
            const newIds = Array.from({ length: 10 }, (_, i) => lastId + i + 1);
            return [...prevIds, ...newIds];
        });
    };

    if (loading) {
        return <p>Carregando Pokémons...</p>;
    }

    if (error) {
        return <p>Erro: {error}</p>;
    }

    return (
        <>
            <div className='pokemon-main'>
                <div className="pokemon-container">
                    <div className="pokemon-list">
                        {pokemons.map((pokemon, index) => (
                            pokemon && (
                                <div key={index} className="pokemon-item">
                                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                                    <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
                                </div>
                            )
                        ))}
                    </div>
                </div>
                <button onClick={loadMorePokemons} className="load-more">Carregar Mais</button>
            </div>
        </>
    );
};

export default PokemonList;