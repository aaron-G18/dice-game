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
                            {props.acesScore === null ?  
                                <ScoreButton 
                                    clickFunction={props.calcAcesScore}
                                /> : 
                                props.acesScore}
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
                            {props.twosScore === null ?  
                                <ScoreButton 
                                    clickFunction={props.calcTwosScore}
                                /> : 
                                props.twosScore}
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
                            {props.threesScore === null ?  
                                <ScoreButton 
                                    clickFunction={props.calcThreesScore}
                                /> : 
                                props.threesScore}
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
                            {props.foursScore === null ?  
                                <ScoreButton 
                                    clickFunction={props.calcFoursScore}
                                /> : 
                                props.foursScore}
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
                            {props.fivesScore === null ?  
                                <ScoreButton 
                                    clickFunction={props.calcFivesScore}
                                /> : 
                                props.fivesScore}
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
                            {props.sixesScore === null ?  
                                <ScoreButton 
                                    clickFunction={props.calcSixesScore}
                                /> : 
                                props.sixesScore}
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
                            {props.threeKindScore === null ?  
                                <ScoreButton 
                                    clickFunction={props.calcThreeOfKind}
                                /> : 
                                props.threeKindScore}
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
                            {props.fourKindScore === null ?  
                                <ScoreButton 
                                    clickFunction={props.calcFourOfKind}
                                /> : 
                                props.fourKindScore}
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
                            {props.fullHouseScore === null ?  
                                <ScoreButton 
                                    clickFunction={props.calcFullHouse}
                                /> : 
                                props.fullHouseScore}
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
                            {props.smStrScore === null ?  
                                <ScoreButton 
                                    clickFunction={props.calcSmStraight}
                                /> : 
                                props.smStrScore}
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
                            {props.lgStrScore === null ?  
                                <ScoreButton 
                                    clickFunction={props.calcLgStraight}
                                /> : 
                                props.lgStrScore}
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
                            {props.fiveKindScore === null ?  
                                <ScoreButton 
                                    clickFunction={props.calcFiveOfKind}
                                /> : 
                                props.fiveKindScore}
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
                            {props.chanceScore === null ?  
                                <ScoreButton 
                                    clickFunction={props.calcChanceScore}
                                /> : 
                                props.chanceScore}
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
                        <td>
                            {props.totalScore}
                        </td>
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