import React from "react";
import "./chosePokedex.css";
import pokedexRubyImage from "../../img/pokedex-ruby.png";
import pokedexSapphireImage from "../../img/pokedex-sapphire.png";
import { useNavigate } from "react-router-dom";
import { useBackground } from '../../components/backgroundContext/backgroundContext.js';


const ChosePokedex = () => {
    const navigate = useNavigate();
    const { setBackgroundImage, setBackgroundColor } = useBackground();

    const handleClick = (color, bgColor) => {
        setBackgroundImage(color);
        setBackgroundColor(bgColor);
    };
    return (
        <div className="container-chose-pokedex">
            <div className="chose-pokedex-content">
                <h1 className="chose-pokedex-title">PoKéMoN</h1>
                <p className="chose-pokedex-text">EsCoLhA SuA PoKeDeX</p>
            </div>
            <div className="chose-pokedex-images">
                <img className="pokedex-ruby" onClick={() => { handleClick('ruby', '#DC0A2D'); navigate('/pokedex'); }} src={pokedexRubyImage} alt="pokedex-ruby" />
                <img className="pokedex-sapphire" onClick={() => { handleClick('sapphire', '#0A77DC'); navigate('/pokedex'); }} src={pokedexSapphireImage} alt="pokedex-sapphire" />
            </div>
        </div>
    );
};



export default ChosePokedex;