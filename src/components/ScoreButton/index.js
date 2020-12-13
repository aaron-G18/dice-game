import React from "react";
import "./style.css";

function ScoreButton(props) {
    return(
        <button type="button" className="score-button" onClick={props.clickFunction} >Record Score</button>
    );
};

export default ScoreButton;