import React from "react";
import "./style.css";
import Dice from "react-dice-roll";

function Categories(props) {
    return(
        <div className="categories">
            <h1>Categories Here</h1>
            <Dice defaultValue="1" triggers="false" size="50" /><p className="apostrophe">  's</p>
        </div>
    );
}

export default Categories;