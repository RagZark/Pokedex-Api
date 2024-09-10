import React from "react"
import styled from "styled-components"
import imgBkgRuby from '../../img/pokedex-header-ruby.png'

const Navbar = () => {
    return(<>
        <Cabecalho/>
    </>)
}

const Cabecalho = styled.header`
    height: 150px;
    background-color: #EF0D0E;
    background-image: url(${imgBkgRuby});
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: inset 0px -8px 8px 2px rgba(0, 0, 0, .75);
`
    

export default Navbar