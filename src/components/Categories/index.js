import React from "react";
import "./style.css";

function Categories(props) {
    return(
        <div className="categories">

            <table>
                <tr>
                    <th id="blank-th"></th>
                    <th>Player 1</th>
                    <th>Player 2</th>
                    <th>Player 3</th>
                    <th>Player 4</th>
                </tr>
                <tr>
                    <td>
                        <img className="die-img" src="./images/one.png" alt="1 on die face"></img><h3 className="cat-label">   Aces = 1</h3>
                    </td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                </tr>
                <tr>
                    <td>
                        <img className="die-img" src="./images/two.png" alt="2 on die face"></img><h3 className="cat-label">   Twos = 2</h3>
                    </td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                </tr>
                <tr>
                    <td>
                        <img className="die-img" src="./images/three.png" alt="3 on die face"></img><h3 className="cat-label">   Threes = 3</h3>
                    </td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                </tr>
                <tr>
                    <td>
                        <img className="die-img" src="./images/four.png" alt="4 on die face"></img><h3 className="cat-label">   Fours = 4</h3>
                    </td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                </tr>
                <tr>
                    <td>
                        <img className="die-img" src="./images/five.png" alt="5 on die face"></img><h3 className="cat-label">   Fives = 5</h3>
                    </td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                </tr>
                <tr>
                    <td>
                        <img className="die-img" src="./images/six.png" alt="6 on die face"></img><h3 className="cat-label">   Sixes = 6</h3>
                    </td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                </tr>
                <tr>
                    <td>
                        <h3 className="cat-label">Bonus</h3>
                        <p className="description">If total score is 63 or over</p>
                    </td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                </tr>
                <tr>
                    <td>
                        <h3 className="cat-label">3 of a kind</h3> 
                    </td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                </tr>
                <tr>
                    <td>
                        <h3 className="cat-label">4 of a kind</h3>
                    </td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                </tr>
                <tr>
                    <td>
                        <h3 className="cat-label">Full House</h3>
                    </td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                </tr>
                <tr>
                    <td>
                        <h3 className="cat-label">Sm Straight</h3>
                    </td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                </tr>
                <tr>
                    <td>
                        <h3 className="cat-label">Lg Straight</h3>
                    </td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                </tr>
                <tr>
                    <td>
                        <h3 className="cat-label">*5 of a kind*</h3> 
                        <p className="description">You know what it's called  ;)</p> 
                    </td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                </tr>
                <tr>
                    <td>
                        <h3 className="cat-label">Chance</h3>
                    </td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                </tr>
                <tr>
                    <td>
                        <h3 className="cat-label">Total Score</h3>
                    </td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                    <td>Score Here</td>
                </tr>
            </table>
 

        </div>
    );
}

export default Categories;