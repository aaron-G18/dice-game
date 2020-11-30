import React from "react";
import "./style.css";

function Categories(props) {
    return(
        <div className="categories">
            <div className="cat">
                <img className="die-img" src="./images/one.png" alt="1 on die face"></img><h3 className="cat-label">  Aces = 1</h3>
            </div>
            <div>twos</div>
        </div>
    );
}

export default Categories;