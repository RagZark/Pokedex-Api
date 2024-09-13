import React from "react";
import "./chosePokedex.css";
import pokedexRubyImage from "../../img/pokedex-ruby.png";
import pokedexSapphireImage from "../../img/pokedex-sapphire.png";
import { useNavigate } from "react-router-dom";
import { useBackground } from '../../components/backgroundContext.js';
import styled from "styled-components";

const ChosePokedex = () => {
    const navigate = useNavigate();
    const { setBackgroundImage, setBackgroundColor } = useBackground();

    const handleClick = (color, bgColor) => {
        setBackgroundImage(color);
        setBackgroundColor(bgColor);
    };
    return (
        <div className="container-chose-pokedex">
            <Titulo>PoKéMoN</Titulo>
            <TextoChosePokedex>EsCoLhA SuA PoKeDeX</TextoChosePokedex>
            <div className="chose-pokedex-images">
                <img className="pokedex-ruby" onClick={() => {handleClick('ruby', '#890000'); navigate('/pokedex');}} src={pokedexRubyImage} alt="pokedex-ruby" />
                <img className="pokedex-sapphire" onClick={() => {handleClick('sapphire', '#130341'); navigate('/pokedex');}} src={pokedexSapphireImage} alt="pokedex-sapphire" />
            </div>
        </div>
    );
};

const Titulo = styled.h1`
    font-size: 72px;
    letter-spacing: 0.3rem;
`
const TextoChosePokedex = styled.p`
    letter-spacing: 0.3rem;
    font-size: 36px;
`



export default ChosePokedex;