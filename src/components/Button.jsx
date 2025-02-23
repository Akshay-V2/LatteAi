import React from "react";

const Button = (props) => {
    return(
        <button className={props.highlight == "true" ? "button-highlight" : "button"}>
            <div className={props.highlight == "true" ? "button-text-highlight" : "button-text"}>{props.text}</div>
            <div className={props.highlight == "true" ? "button-keybind-highlight" : "button-keybind"}>{props.keybind}</div>
        </button>
    )
}

export default Button;