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
        <>
            <div className='pokemon-list-details'>
                <div className='pokemon-main'>
                    <div className="pokemon-container lined-background">
                        <div className="pokemon-list" ref={containerRef}>
                            {pokemons.map((pokemon) => (
                                pokemon && (
                                    <div key={pokemon.id} className="pokemon-item" onClick={() => setSelectedPokemon(pokemon)}>
                                        <img src={pokemon.pixelImage} alt={pokemon.name} />
                                        <NamePokemon className='pokemon-name'>
                                            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                        </NamePokemon>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                    <button onClick={loadMorePokemons} className="load-more">Carregar Mais</button>
                </div>
                <div className='pokemon-information'>
                    <PokemonDetails pokemon={selectedPokemon}/>
                    <Botao
                        onClick={() => selectedPokemon && navigate(`/pokedex/${selectedPokemon.id}`, selectedPokemon)}
                        className="button-style load-more"
                        disabled={!selectedPokemon}
                        value={"Mais Informações"}
                    />
                </div>
            </div>
        </>
    );
};


const NamePokemon = styled.h3`
    font-size: 20px;
    color: #FFFFFF;
    -webkit-text-stroke: .8px;
    -webkit-text-stroke-color: #000000;
    letter-spacing: 0.3px;
`

export default PokemonList;