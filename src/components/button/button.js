import React from "react";
import "./button.css"
import styled from "styled-components";

const Botao = (props) => {
    return(
        <BotaoStyled className="button-style" width={props.width} height={props.height} bgkColor={props.bkgC} borderColor={props.borderC} beforeBkgColor={props.befBkgC} beforeBoxShColor={props.befBoxShC} hoverBkgColor={props.hoverBkgC} hoverBeforeBoxShColor={props.hoverBfBxShC} onClick={props.functionClick} fontSize={props.fontSize} fontSizeTablet={props.fontSizeTablet} widthTablet={props.widthTablet} heightTablet={props.heightTablet}>{props.value}</BotaoStyled>
    )
}

const BotaoStyled = styled.button`
    width: ${props => props.width || "180px"};
    height: ${props => props.height || "40px"};
    font-size: ${props => props.fontSize || "14px"};

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

    @media (min-width: 769px) and (max-width: 1119px) {
    font-size:${props => props.fontSizeTablet || props.fontSize || "14px"};
    width: ${props => props.widthTablet || props.width || "180px"};
    height: ${props => props.heightTablet || props.height || "40px"};
    }
`

export default Botao