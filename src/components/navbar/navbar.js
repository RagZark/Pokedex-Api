import React from "react"
import styled from "styled-components"
import imgBkgNavBarRuby from '../../img/pokedex-header-ruby.png'
import imgBkgNavBarSapphire from '../../img/pokedex-header-sapphire.png'
import { useBackground } from "../backgroundContext/backgroundContext.js"
import Botao from "../button/button.js"

const Navbar = () => {

    const { backgroundImage } = useBackground();

    const backgroundImageUrl = backgroundImage === 'ruby' ? imgBkgNavBarRuby : imgBkgNavBarSapphire;

    return (<>
        <Cabecalho style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
            <Lista>
                <ItemLista>
                <Botao value={"Retorno"}></Botao>
                </ItemLista>
                <ItemLista>
                <Botao value={"Retorno"}></Botao>
                </ItemLista>
                <ItemLista>
                <Botao value={"Retorno"}></Botao>
                </ItemLista>
            </Lista>
        </Cabecalho>
    </>)
}

const Cabecalho = styled.header`
    height: 150px;
    background-color: #EF0D0E;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: inset 0px -8px 8px 2px rgba(0, 0, 0, .75);
`
const Lista = styled.ul`
    list-style: none;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
`

const ItemLista = styled.li`
    display: flex;
    margin-right: 40px;
    align-items: center;
`


export default Navbar