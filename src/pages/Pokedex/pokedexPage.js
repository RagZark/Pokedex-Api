import React from "react"
import styled from "styled-components"
import Navbar from "../../components/navbar/navbar.js"
import "../../../src/reset.css"
import PokemonList from "../../components/pokemonsList.js"
import Rodape from "../../components/footer/footer.js"

const Pokedex = () => {
    return (
        <>
            <Corpo>
                <Navbar />
                <ContainerPokedex>
                    <PokemonList />
                    
                </ContainerPokedex>
                <Rodape/>
            </Corpo>
        </>
    )
}

const Corpo = styled.body`

`

const ContainerPokedex = styled.div`
    background-color: #910101;
    min-height: 100vh; 
    width: 100%;
    box-shadow: inset 0 0 8px 8px rgba(0, 0, 0, .75);
    padding: 90px 0 0 90px;
`


export default Pokedex