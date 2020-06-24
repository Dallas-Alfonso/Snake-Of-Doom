import React from "react";
import "./Button.css";

const Button = ({ onUp, onDown, onLeft, onRight }) => {
    return (
        <div className="buttonContainer">
            <div className="upwards">
                <input className="up" onClick={onUp} type="button" value="U"/>
            </div>
            <div className="sideways">
                <input className="left" onClick={onLeft} type="button" value="L"/>
                <input className="right" onClick={onRight} type="button"value="R"/>
            </div>
            <div className="downwards">
                <input className="down" onClick={onDown} type="button" value="D" />
            </div>
        </div>
    );
};
export default Button;

/*Find a way to make all the sizes of the buttons the same  OR leave it the way it is*/
