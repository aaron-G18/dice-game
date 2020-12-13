import React from "react";
import "./style.css";
import ScoreButton from "../ScoreButton"

function Scorecard(props) {
    return(
        <div className="categories">
            <table>
                <thead>
                    <tr>
                        <th id="blank-th"></th>
                        <th>Player 1</th>
                        <th>Player 2</th>
                        <th>Player 3</th>
                        <th>Player 4</th>
                    </tr>
                </thead>
                <tbody>
                {/* Aces row */}
                    <tr>
                        <td>
                            <img className="die-img" src="./images/one.png" alt="1 on die face"></img><h3 className="cat-label">   Aces = 1</h3>
                        </td>   
                        <td>
                            <ScoreButton 
                                clickFunction={props.calcAcesScore}
                            />
                        </td>
                        <td>Score Here</td>
                        <td>Score Here</td>
                        <td>Score Here</td>
                    </tr>
                {/* Twos row */}
                    <tr>
                        <td>
                            <img className="die-img" src="./images/two.png" alt="2 on die face"></img><h3 className="cat-label">   Twos = 2</h3>
                        </td>   
                        <td>
                            <ScoreButton 
                                clickFunction={props.calcTwosScore}
                            />
                        </td>
                        <td>Score Here</td>
                        <td>Score Here</td>
                        <td>Score Here</td>
                    </tr>
                {/* Threes row */}
                    <tr>
                        <td>
                            <img className="die-img" src="./images/three.png" alt="3 on die face"></img><h3 className="cat-label">   Threes = 3</h3>
                        </td>
                        <td>
                            <ScoreButton 
                                clickFunction={props.calcThreesScore}
                            />
                        </td>
                        <td>Score Here</td>
                        <td>Score Here</td>
                        <td>Score Here</td>
                    </tr>
                {/* Fours row */}
                    <tr>
                        <td>
                            <img className="die-img" src="./images/four.png" alt="4 on die face"></img><h3 className="cat-label">   Fours = 4</h3>
                        </td>
                        <td>
                            <ScoreButton 
                                clickFunction={props.calcFoursScore}
                            />
                        </td>
                        <td>Score Here</td>
                        <td>Score Here</td>
                        <td>Score Here</td>
                    </tr>
                {/* Fives row */}
                    <tr>
                        <td>
                            <img className="die-img" src="./images/five.png" alt="5 on die face"></img><h3 className="cat-label">   Fives = 5</h3>
                        </td>
                        <td>
                            <ScoreButton 
                                clickFunction={props.calcFivesScore}
                            />
                        </td>
                        <td>Score Here</td>
                        <td>Score Here</td>
                        <td>Score Here</td>
                    </tr>
                {/* Sixes row */}
                    <tr>
                        <td>
                            <img className="die-img" src="./images/six.png" alt="6 on die face"></img><h3 className="cat-label">   Sixes = 6</h3>
                        </td>
                        <td>
                            <ScoreButton 
                                clickFunction={props.calcSixesScore}
                            />
                        </td>
                        <td>Score Here</td>
                        <td>Score Here</td>
                        <td>Score Here</td>
                    </tr>
                {/* Bonus row */}
                    <tr>
                        <td>
                            <h3 className="cat-label">Bonus</h3>
                            <p className="description">If sum of the above scores is 63 or over = 35</p>
                        </td>
                        <td>{props.bonusScore === 35 ? 35 : "nope"}</td>
                        <td>Score Here</td>
                        <td>Score Here</td>
                        <td>Score Here</td>
                    </tr>
                {/* 3 of a kind row */}
                    <tr>
                        <td>
                            <h3 className="cat-label">3 of a kind</h3>
                            <p className="description">Sum of the three matching dice values</p>
                        </td>
                        <td>
                            <ScoreButton 
                                clickFunction={props.calcThreeOfKind}
                            />
                        </td>
                        <td>Score Here</td>
                        <td>Score Here</td>
                        <td>Score Here</td>
                    </tr>
                {/* 4 of a kind row */}
                    <tr>
                        <td>
                            <h3 className="cat-label">4 of a kind</h3>
                            <p className="description">Sum of the four matching dice values</p>
                        </td>
                        <td>
                            <ScoreButton 
                                clickFunction={props.calcFourOfKind}
                            />
                        </td>
                        <td>Score Here</td>
                        <td>Score Here</td>
                        <td>Score Here</td>
                    </tr>
                {/* Full House row */}
                    <tr>
                        <td>
                            <h3 className="cat-label">Full House (25 pts)</h3>
                        </td>
                        <td>
                            <ScoreButton 
                                clickFunction={props.calcFullHouse}
                            />
                        </td>
                        <td>Score Here</td>
                        <td>Score Here</td>
                        <td>Score Here</td>
                    </tr>
                {/* Sm Straight row */}
                    <tr>
                        <td>
                            <h3 className="cat-label">Sm Straight (30 pts)</h3>
                        </td>
                        <td>
                            <ScoreButton 
                                clickFunction={props.calcSmStraight}
                            />
                        </td>
                        <td>Score Here</td>
                        <td>Score Here</td>
                        <td>Score Here</td>
                    </tr>
                {/* Lg Straight row */}
                    <tr>
                        <td>
                            <h3 className="cat-label">Lg Straight (40 pts)</h3>
                        </td>
                        <td>
                            <ScoreButton 
                                clickFunction={props.calcLgStraight}
                            />
                        </td>
                        <td>Score Here</td>
                        <td>Score Here</td>
                        <td>Score Here</td>
                    </tr>
                {/* 5 of a kind row */}
                    <tr>
                        <td>
                            <h3 className="cat-label">*5 of a kind* (50 pts)</h3> 
                            <p className="description">You know what it's called  ;)</p> 
                        </td>
                        <td>
                            <ScoreButton 
                                clickFunction={props.calcFiveOfKind}
                            />
                        </td>
                        <td>Score Here</td>
                        <td>Score Here</td>
                        <td>Score Here</td>
                    </tr>
                {/* Chance row */}
                    <tr>
                        <td>
                            <h3 className="cat-label">Chance</h3>
                        </td>
                        <td>
                            <ScoreButton 
                                clickFunction={props.calcChanceScore}
                            />
                        </td>
                        <td>Score Here</td>
                        <td>Score Here</td>
                        <td>Score Here</td>
                    </tr>
                {/* Total Score row */}
                    <tr>
                        <td>
                            <h3 className="cat-label">Total Score</h3>
                        </td>
                        <td>Score Here</td>
                        <td>Score Here</td>
                        <td>Score Here</td>
                        <td>Score Here</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Scorecard;