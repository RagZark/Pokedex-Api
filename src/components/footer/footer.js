import React from "react";
import styled from "styled-components";
import { useBackground } from '../../components/backgroundContext/backgroundContext.js';
import imgBkgFooterRuby from '../../img/background-footer-ruby.png';
import imgBkgFooterSapphire from '../../img/background-footer-sapphire.png';

const Rodape = () => {
    const { backgroundImage, backgroundColor } = useBackground();

    const backgroundImageUrl = backgroundImage === 'ruby' ? imgBkgFooterRuby : imgBkgFooterSapphire;

    return (
        <RodapeUse style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundColor: backgroundColor }} />
    );
}

const RodapeUse = styled.footer`
    height: 70px;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: inset 0px 8px 8px 2px rgba(0, 0, 0, .75);
`;

export default Rodape;