import React from "react";
import "./button.css"
import styled from "styled-components";

const Botao = (props) => {
    return(
        <BotaoStyled className="button-style" bgkColor={props.bkgC} borderColor={props.borderC} beforeBkgColor={props.befBkgC} beforeBoxShColor={props.befBoxShC} hoverBkgColor={props.hoverBkgC} hoverBeforeBoxShColor={props.hoverBfBxShC} onClick={props.functionClick}>{props.value}</BotaoStyled>
    )
}

const BotaoStyled = styled.button`
    &{
    background: ${props => props.bgkColor};
    border: 2px solid ${props => props.borderColor}
    }
    &::before{
        background:${props => props.beforeBkgColor};
        box-shadow: 0 0 0 2px ${props => props.beforeBoxShColor};
    }
    &:hover{
        background: ${props => props.hoverBkgColor}
    }
    &:hover::before{
        box-shadow: 0 0 0 2.5px ${props => props.hoverBeforeBoxShColor};
    }
`

export default Botao