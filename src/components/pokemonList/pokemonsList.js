import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import getFullData from '../api/getFullData.js';
import styled from 'styled-components';
import './pokemonList.css';
import PokemonCard from '../pokemonCard/pokemonCard.js';
import Botao from '../button/button.js';
import { useBackground } from '../../components/backgroundContext/backgroundContext.js';

const PokemonList = () => {
    const [pokemonIds, setPokemonIds] = useState(Array.from({ length: 10 }, (_, i) => i + 1));
    const [pokemons, setPokemons] = useState([]);
    const [filteredPokemons, setFilteredPokemons] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [searchType, setSearchType] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const containerRef = useRef(null);
    const navigate = useNavigate();
    const { backgroundColor } = useBackground();

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

    const handleSearch = async () => {
        setLoading(true);

        if (searchType === 'id' || searchType === 'name') {
            try {
                const pokemon = await getFullData(searchInput.toLowerCase());
                setFilteredPokemons(pokemon ? [pokemon] : []);
            } catch (err) {
                setError("Pokémon não encontrado.");
            }
        }

        setLoading(false);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if (searchInput.trim() === '') {
                handleResetSearch();
            } else {
                handleSearch();
            }
        }
    };

    const handleResetSearch = () => {
        setFilteredPokemons(null);
        setSearchInput('');
    };

    const handleInputChange = (e) => {
        const value = e.target.value;

        // Verifique o tipo de pesquisa e valide a entrada
        if (searchType === 'id') {
            // Permitir apenas números
            if (/^\d*$/.test(value)) { // Regex que permite apenas dígitos
                setSearchInput(value);
            }
        } else if (searchType === 'name') {
            // Permitir apenas letras
            if (/^[a-zA-Z]*$/.test(value)) { // Regex que permite apenas letras
                setSearchInput(value);
            }
        } else {
            // Se nenhum tipo de pesquisa estiver selecionado, apenas atualize o input
            setSearchInput(value);
        }
    };

    if (loading && !pokemons.length) {
        return <p className='await-pokemons-list'>Carregando Pokémons...</p>;
    }

    if (error) {
        return <p>Erro: {error}</p>;
    }

    const displayedPokemons = filteredPokemons || pokemons;

    return (
        <ContainerPokedex className='pokemon-list-details' backgroundColor={backgroundColor}>
            <div className='pokemon-main'>
                <div className="pokemon-container lined-background">
                    <div className='search-container'>
                        <div className='search-items'>
                            <input
                                type='text'
                                placeholder='Pesquise por ID ou Nome'
                                value={searchInput}
                                onChange={handleInputChange} // Use a nova função para validação
                                onKeyDown={handleKeyDown}
                            />
                            <select onChange={(e) => setSearchType(e.target.value)} value={searchType}>
                                <option value=''>Selecione o tipo de pesquisa</option>
                                <option value='id'>ID</option>
                                <option value='name'>Nome</option>
                            </select>
                        </div>
                        <button onClick={handleSearch}>Buscar</button>
                        <button onClick={handleResetSearch}>Resetar</button>
                    </div>
                    <div className="pokemon-list" ref={containerRef}>
                        {displayedPokemons.map((pokemon) => (
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
                <Botao 
                    bkgC={"#90EE90"} 
                    borderC={"rgb(36, 79, 36)"} 
                    befBkgC={"#6bbb6b"} 
                    befBoxShC={"rgb(36, 79, 36)"} 
                    hoverBkgC={"#85db85"} 
                    hoverBfBxShC={"#193619"} 
                    functionClick={loadMorePokemons} 
                    value="Carregar Mais" 
                />
            </div>
            <div className='pokemon-information'>
                <PokemonCard pokemon={selectedPokemon} />
                <Botao
                    bkgC={"#90EE90"} 
                    borderC={"rgb(36, 79, 36)"} 
                    befBkgC={"#6bbb6b"} 
                    befBoxShC={"rgb(36, 79, 36)"} 
                    hoverBkgC={"#85db85"} 
                    hoverBfBxShC={"#193619"}
                    functionClick={() => selectedPokemon && navigate(`/pokedex/${selectedPokemon.id}`, selectedPokemon)}
                    disabled={!selectedPokemon} 
                    value="Saiba Mais"
                />
            </div>
        </ContainerPokedex>
    );
};

const ContainerPokedex = styled.div`
    background-color: ${props => props.backgroundColor};
`;

export default PokemonList;