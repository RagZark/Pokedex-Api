import React from "react";
import "./button.css"

const Botao = (props) => {
    return(
        <button className="button-style" role="button">{props.value}</button>
    )
}

export default Botao