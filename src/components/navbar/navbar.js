import React from "react";
import styled from "styled-components";
import imgBkgNavBarRuby from '../../img/pokedex-header-ruby.png';
import imgBkgNavBarSapphire from '../../img/pokedex-header-sapphire.png';
import { useBackground } from "../backgroundContext/backgroundContext.js";
import { useNavigate } from "react-router-dom";
import Botao from "../button/button.js";

const Navbar = () => {
    const { backgroundImage, setBackgroundImage, setBackgroundColor, backgroundColor } = useBackground();
    const navigate = useNavigate();

    const homeClick = () => {
        navigate(`/`);
    };

    const pokedexClick = () => {
        navigate(`/pokedex`)
    }

    const changePokedex = () => {
        if (backgroundImage === 'ruby') {
            setBackgroundImage('sapphire');
            setBackgroundColor('#0A77DC'); 
        } else {
            setBackgroundImage('ruby');
            setBackgroundColor('#DC0A2D');
        }
    };

    let backgroundImageUrl = backgroundImage === 'ruby' ? imgBkgNavBarRuby : imgBkgNavBarSapphire;
    
    const botaoProps = backgroundImage === 'ruby' ? {bkgC:"#0A77DC", borderC: "#130341", befBkgC: "#05437d", befBoxShC: "#130341", hoverBkgC:  "#0a84f5", hoverBfBxShC: "#032b4f"} 
    : {bkgC: "#DC0A2D", borderC: "#5C0311", befBkgC: "#b30925", befBoxShC: "#5C0311", hoverBkgC: "#f00c32", hoverBfBxShC: "#660314"}

    return (
        <Cabecalho style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundColor: backgroundColor }}>
            <Lista>
                <ItemLista>
                    <Botao {...botaoProps} value={"Change Pokedex"} functionClick={changePokedex}></Botao>
                </ItemLista>
                <ItemLista>
                    <Botao bkgC={"#d1a000"} borderC={"#403100"} befBkgC={"#856600"} befBoxShC={"#403100"} hoverBkgC={"#ffc300"} hoverBfBxShC={"#5c4600"} value={"Chose Pokedex"} functionClick={homeClick}></Botao>
                </ItemLista>
                <ItemLista>
                    <Botao bkgC={"#479154"} borderC={"#162e1a"} befBkgC={"#2b5c33"} befBoxShC={"#162e1a"} hoverBkgC={"#61ba71"} hoverBfBxShC={"#214527"} value={"Pokedex Page"} functionClick={pokedexClick}></Botao>
                </ItemLista>
            </Lista>
        </Cabecalho>
    );
};

const Cabecalho = styled.header`
    margin-top: -5px;
    height: 150px;
    background-color: #EF0D0E;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: inset 0px -8px 8px 2px rgba(0, 0, 0, .75);
`;

const Lista = styled.ul`
    list-style: none;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
`;

const ItemLista = styled.li`
    display: flex;
    margin-right: 40px;
    align-items: center;
`;

export default Navbar;