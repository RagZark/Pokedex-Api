import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import getFullData from '../api/getFullData.js';
import styled from 'styled-components';
import './pokemonList.css';
import PokemonDetails from '../pokemonDetails/pokemonDetails.js';
import Botao from '../button/button.js';

const PokemonList = () => {
    const [pokemonIds, setPokemonIds] = useState(Array.from({ length: 10 }, (_, i) => i + 1));
    const [pokemons, setPokemons] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const containerRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPokemons = async () => {
            setLoading(true);
            setError(null);

            try {
                const promises = pokemonIds.map(id => getFullData(id));
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
        const scrollPosition = containerRef.current.scrollTop;

        setPokemonIds((prevIds) => {
            const lastId = prevIds[prevIds.length - 1];
            const newIds = Array.from({ length: 10 }, (_, i) => lastId + i + 1);
            return [...prevIds, ...newIds];
        });

        setTimeout(() => {
            containerRef.current.scrollTop = scrollPosition;
        }, 0);
    };

    if (loading && !pokemons.length) {
        return <p className='await-pokemons-list'>Carregando Pokémons...</p>;
    }

    if (error) {
        return <p>Erro: {error}</p>;
    }

    return (
        <div className='pokemon-list-details'>
            <div className='pokemon-main'>
                <div className="pokemon-container lined-background">
                    <div className="pokemon-list" ref={containerRef}>
                        {pokemons.map((pokemon) => (
                            pokemon && (
                                <div key={pokemon.id} className="pokemon-item" onClick={() => setSelectedPokemon(pokemon)}>
                                    <img src={pokemon.pixelImage} alt={pokemon.name} />
                                    <h3 className='pokemon-name'>
                                        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                    </h3>
                                </div>
                            )
                        ))}
                    </div>
                </div>
                <Botao color={"#90EE90"} borderC={"rgb(36, 79, 36)"} befBkgC={"#6bbb6b"} befBoxShC={"rgb(36, 79, 36)"} hvBkgC={"#85db85"} functionClick={loadMorePokemons} hoverBfBxShC={"#193619"} value="Carregar Mais"/>
            </div>
            <div className='pokemon-information'>
                <PokemonDetails pokemon={selectedPokemon} />
                <Botao
                    color={"#90EE90"} borderC={"rgb(36, 79, 36)"} befBkgC={"#6bbb6b"} befBoxShC={"rgb(36, 79, 36)"} hvBkgC={"#85db85"} hoverBfBxShC={"#193619"}
                    functionClick={() => selectedPokemon && navigate(`/pokedex/${selectedPokemon.id}`, selectedPokemon)}
                    disabled={!selectedPokemon} value="Saiba Mais"
                />
            </div>
        </div>
    );
};


const NamePokemon = styled.h3`

`

export default PokemonList;