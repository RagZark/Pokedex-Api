import React from "react";
import styled from "styled-components";
import { useState } from "react";
import imgBkgNavBarRuby from '../../img/pokedex-header-ruby.png';
import imgBkgNavBarSapphire from '../../img/pokedex-header-sapphire.png';
import { useBackground } from "../backgroundContext/backgroundContext.js";
import { useNavigate } from "react-router-dom";
import Botao from "../button/button.js";

const Navbar = () => {
    const { backgroundImage, setBackgroundImage, setBackgroundColor, backgroundColor } = useBackground();
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false)

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

    const botaoProps = backgroundImage === 'ruby' ? { bkgC: "#0A77DC", borderC: "#130341", befBkgC: "#05437d", befBoxShC: "#130341", hoverBkgC: "#0a84f5", hoverBfBxShC: "#032b4f" }
        : { bkgC: "#DC0A2D", borderC: "#5C0311", befBkgC: "#b30925", befBoxShC: "#5C0311", hoverBkgC: "#f00c32", hoverBfBxShC: "#660314" }

    return (
        <Cabecalho style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundColor: backgroundColor }}>
            <MobileMenu onClick={() => setIsActive(!isActive)}>
                <KidMobileMenu></KidMobileMenu>
                <KidMobileMenu></KidMobileMenu>
                <KidMobileMenu></KidMobileMenu>
            </MobileMenu>
            <Lista className={isActive ? "active" : ''}>
                <ItemLista>
                    <Botao heightTablet={"40px"} widthTablet={"140px"} {...botaoProps} value={"Change Pokedex"} heightPhone={"30px"} widthPhone={"100px"} fontSizePhone={"12px"} functionClick={changePokedex}></Botao>
                </ItemLista>
                <ItemLista>
                    <Botao heightTablet={"40px"} widthTablet={"140px"} bkgC={"#d1a000"} borderC={"#403100"} befBkgC={"#856600"} befBoxShC={"#403100"} hoverBkgC={"#ffc300"} hoverBfBxShC={"#5c4600"} value={"Chose Pokedex"} heightPhone={"30px"} widthPhone={"100px"} fontSizePhone={"12px"}  functionClick={homeClick}></Botao>
                </ItemLista>
                <ItemLista>
                    <Botao heightTablet={"40px"} widthTablet={"140px"} bkgC={"#479154"} borderC={"#162e1a"} befBkgC={"#2b5c33"} befBoxShC={"#162e1a"} hoverBkgC={"#61ba71"} hoverBfBxShC={"#214527"} value={"Pokedex Page"} heightPhone={"30px"} widthPhone={"100px"} fontSizePhone={"12px"}  functionClick={pokedexClick}></Botao>
                </ItemLista>
            </Lista>
        </Cabecalho>
    );
};

const Cabecalho = styled.header`
    margin-top: -5px;
    height: 150px;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: inset 0px -8px 8px 2px rgba(0, 0, 0, .75);

    @media (min-width: 481px) and (max-width: 768px) {
    position: relative;
}

    @media (max-width: 480px) {
    position: relative;
}
  
    @media (max-width: 375px) {

}
`;

const Lista = styled.ul`
    list-style: none;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;

    @media (min-width: 481px) and (max-width: 768px) {
    display: none;
    padding-bottom: 22vh;
    height: 300px;
    width: 240px;
    position: absolute;
    border: 2px solid #fafad4;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.5);
    left: 60%;
    top: 25%;
    z-index: 10;

    &.active{
    display: block;
    }
}

    @media (max-width: 480px) {
    display: none;
    padding-bottom: 30vh;
    height: 300px;
    width: 240px;
    position: absolute;
    border: 2px solid #fafad4;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.8);
    left: 20%;
    top: 80%;
    z-index: 10;

    &.active{
    display: block;
    }
}
  
    @media (max-width: 375px) {
    display: none;
    padding-bottom: 30vh;
    height: 300px;
    width: 240px;
    position: absolute;
    border: 2px solid #fafad4;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.8);
    left: 20%;
    top: 80%;
    z-index: 10;

    &.active{
    display: block;
    }
}

`;

const ItemLista = styled.li`
    display: flex;
    margin-right: 40px;
    align-items: center;

    @media (min-width: 481px) and (max-width: 768px) {
    justify-content: center;
    margin-right: 0;
}

    @media (max-width: 480px) {
    justify-content: center;
    margin-right: 0;
}
  
    @media (max-width: 375px) {
    justify-content: center;
    margin-right: 0;
}
`;

const MobileMenu = styled.div`
    display: none;
    cursor: pointer;
    transition: 0.3s ease-in-out;


    @media (min-width: 481px) and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 60%;
    right: 2%;
    }

    @media (max-width: 480px) {
    display: block;
    position: absolute;
    top: 60%;
    right: 2%;

}
  
    @media (max-width: 375px) {
    display: block;
    position: absolute;
    top: 60%;
    right: 2%;
}
}
`

const KidMobileMenu = styled.div`
  width: 32px;
  height: 2px;
  background: #000000;
  margin: 8px;
  transition: 0.3s ease-in-out;
}
`

export default Navbar;