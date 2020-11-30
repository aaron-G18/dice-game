import React from "react";
import "./style.css";

function Categories(props) {
    return(
        <div className="categories">
            <div className="cat">
                <img className="die-img" src="./images/one.png" alt="1 on die face"></img><h3 className="cat-label">   Aces = 1</h3>
            </div>
            <div className="cat">
                <img className="die-img" src="./images/two.png" alt="2 on die face"></img><h3 className="cat-label">   Twos = 2</h3>
            </div>
            <div className="cat">
                <img className="die-img" src="./images/three.png" alt="3 on die face"></img><h3 className="cat-label">   Threes = 3</h3>
            </div>
            <div className="cat">
                <img className="die-img" src="./images/four.png" alt="4 on die face"></img><h3 className="cat-label">   Fours = 4</h3>
            </div>
            <div className="cat">
                <img className="die-img" src="./images/five.png" alt="5 on die face"></img><h3 className="cat-label">   Fives = 5</h3>
            </div>
            <div className="cat">
                <img className="die-img" src="./images/six.png" alt="6 on die face"></img><h3 className="cat-label">   Sixes = 6</h3>
            </div>
            
            
        </div>
    );
}

export default Categories;