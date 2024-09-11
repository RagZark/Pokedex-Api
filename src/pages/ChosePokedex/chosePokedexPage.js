import React from "react";
import "./chosePokedex.css";
import pokedexRubyImage from "../../img/pokedex-ruby.png";
import pokedexSapphireImage from "../../img/pokedex-sapphire.png";

const ChosePokedex = () => {
    return (
        <>
            <div className="container-chose-pokedex">
                <div className="chose-pokedex-text">
                    <h1>PoKéMoN</h1>
                    <p>EsCoLhA SuA PoKeDeX</p>
                </div>
                <div className="chose-pokedex-images">
                    <img className="pokedex-ruby" src={pokedexRubyImage} alt="pokedex-ruby" />
                    <img className="pokedex-sapphire" src={pokedexSapphireImage} alt="pokedex-sapphire" />
                </div>
            </div>
        </>
    );
};

export default ChosePokedex;