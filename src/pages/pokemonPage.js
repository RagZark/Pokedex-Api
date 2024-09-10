import React, { useState } from 'react';
import PokemonInfo from '../components/pokemonInfo.js'; // Ajuste o caminho conforme o seu projeto
import Navbar from '../components/navbar/navbar.js';

const PokemonPage = () => {
  const [pokemonId, setPokemonId] = useState(1); // Começando com o ID 1

  const handleNext = () => {
    setPokemonId((prevId) => (prevId <= 1025 ? prevId + 1 : 1)); // Incrementa ou volta ao início
  };

  const handlePrev = () => {
    setPokemonId((prevId) => (prevId > 1 ? prevId - 1 : 1025)); // Decrementa ou vai para o final
  };

  return (
    <>
    <Navbar/>
    <div>
      <button onClick={handlePrev}>Anterior</button>
      <button onClick={handleNext}>Próximo</button>
      <PokemonInfo id={pokemonId} /> {/* Passa o ID atual para o componente */}
    </div>
    </>
  );
};



export default PokemonPage