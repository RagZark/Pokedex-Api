import React from "react"
import styled from "styled-components"
import imgBkgFooterRuby from '../../img/background-footer-ruby.png'

const Rodape = () => {
    return(<>
        <RodapeUse/>
    </>)
}

const RodapeUse = styled.footer`
    height:75px;
    background-color: #EF0D0E;
    background-image: url(${imgBkgFooterRuby});
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: inset 0px 8px 8px 2px rgba(0, 0, 0, .75);
`

export default Rodape