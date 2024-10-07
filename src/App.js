import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ChosePokedex from './pages/ChosePokedex/chosePokedexPage.js';
import Pokedex from './pages/Pokedex/pokedexPage.js';
import PokemonPage from './pages/PokemonPage/pokemonPage.js';
import Rodape from './components/footer/footer.js';
import Navbar from './components/navbar/navbar.js';
import { BackgroundProvider } from './components/backgroundContext/backgroundContext.js';
import AudioPlayer from './components/audioPlayer/audioPlayer.js';

const App = () => {
  return (
    <BackgroundProvider>
      <Router>
        <MainContent />
      </Router>
    </BackgroundProvider>
  );
};

const MainContent = () => {
  const location = useLocation();
  const showNavbar = location.pathname.startsWith('/pokedex');
  const showFooter = location.pathname.startsWith('/pokedex');

  return (
    <>
      {showNavbar && <Navbar />}
      <AudioPlayer />
      <Routes>
        <Route path="/" element={<ChosePokedex />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/:id" element={<PokemonPage />} />
      </Routes>
      {showFooter && <Rodape />}
    </>
  );
};

export default App;