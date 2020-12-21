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
                        <th id="blank-th"></th>
                        
                    </tr>
                </thead>
                <tbody>
                {/* Aces row */}
                    <tr>
                        <td className="cat">
                            <img className="die-img" src="./images/one.png" alt="1 on die face"></img><h3 className="cat-label">   Aces = 1</h3>
                        </td>   
                        <td>
                            {props.acesScore === null ?  
                                <ScoreButton 
                                    clickFunction={props.calcAcesScore}
                                    firstRoll={props.firstRoll}
                                /> : 
                                props.acesScore}
                        </td>
                    </tr>
                {/* Twos row */}
                    <tr>
                        <td className="cat">
                            <img className="die-img" src="./images/two.png" alt="2 on die face"></img><h3 className="cat-label">   Twos = 2</h3>
                        </td>   
                        <td>
                            {props.twosScore === null ?  
                                <ScoreButton 
                                    clickFunction={props.calcTwosScore}
                                    firstRoll={props.firstRoll}
                                /> : 
                                props.twosScore}
                        </td>
                    </tr>
                {/* Threes row */}
                    <tr>
                        <td className="cat">
                            <img className="die-img" src="./images/three.png" alt="3 on die face"></img><h3 className="cat-label">   Threes = 3</h3>
                        </td>
                        <td>
                            {props.threesScore === null ?  
                                <ScoreButton 
                                    clickFunction={props.calcThreesScore}
                                    firstRoll={props.firstRoll}
                                /> : 
                                props.threesScore}
                        </td>
                    </tr>
                {/* Fours row */}
                    <tr>
                        <td className="cat">
                            <img className="die-img" src="./images/four.png" alt="4 on die face"></img><h3 className="cat-label">   Fours = 4</h3>
                        </td>
                        <td>
                            {props.foursScore === null ?  
                                <ScoreButton 
                                    clickFunction={props.calcFoursScore}
                                    firstRoll={props.firstRoll}
                                /> : 
                                props.foursScore}
                        </td>
                    </tr>
                {/* Fives row */}
                    <tr>
                        <td className="cat">
                            <img className="die-img" src="./images/five.png" alt="5 on die face"></img><h3 className="cat-label">   Fives = 5</h3>
                        </td>
                        <td>
                            {props.fivesScore === null ?  
                                <ScoreButton 
                                    clickFunction={props.calcFivesScore}
                                    firstRoll={props.firstRoll}
                                /> : 
                                props.fivesScore}
                        </td>
                    </tr>
                {/* Sixes row */}
                    <tr>
                        <td className="cat">
                            <img className="die-img" src="./images/six.png" alt="6 on die face"></img><h3 className="cat-label">   Sixes = 6</h3>
                        </td>
                        <td>
                            {props.sixesScore === null ?  
                                <ScoreButton 
                                    clickFunction={props.calcSixesScore}
                                    firstRoll={props.firstRoll}
                                /> : 
                                props.sixesScore}
                        </td>
                    </tr>
                {/* Bonus row */}
                    <tr>
                        <td className="cat">
                            <h3 className="cat-label">Bonus</h3>
                            <p className="description">(if sum of the above scores is 63 or higher = 35 pts)</p>
                        </td>
                        <td>{props.bonusScore === 35 ? 35 : <p className="description">not enough score above</p>}</td>
                    </tr>
                {/* 3 of a kind row */}
                    <tr>
                        <td className="cat">
                            <h3 className="cat-label">3 of a kind</h3>
                            <p className="description">(sum of the three matching dice)</p>
                        </td>
                        <td>
                            {props.threeKindScore === null ?  
                                <ScoreButton 
                                    clickFunction={props.calcThreeOfKind}
                                    firstRoll={props.firstRoll}
                                /> : 
                                props.threeKindScore}
                        </td>
                    </tr>
                {/* 4 of a kind row */}
                    <tr>
                        <td className="cat">
                            <h3 className="cat-label">4 of a kind</h3>
                            <p className="description">(sum of the four matching dice)</p>
                        </td>
                        <td>
                            {props.fourKindScore === null ?  
                                <ScoreButton 
                                    clickFunction={props.calcFourOfKind}
                                    firstRoll={props.firstRoll}
                                /> : 
                                props.fourKindScore}
                        </td>
                    </tr>
                {/* Full House row */}
                    <tr>
                        <td className="cat">
                            <h3 className="cat-label">Full House</h3>
                            <p className="description">(25 pts)</p>
                        </td>
                        <td>
                            {props.fullHouseScore === null ?  
                                <ScoreButton 
                                    clickFunction={props.calcFullHouse}
                                    firstRoll={props.firstRoll}
                                /> : 
                                props.fullHouseScore}
                        </td>
                    </tr>
                {/* Sm Straight row */}
                    <tr>
                        <td className="cat">
                            <h3 className="cat-label">Sm Straight</h3>
                            <p className="description">(30 pts)</p>
                        </td>
                        <td>
                            {props.smStrScore === null ?  
                                <ScoreButton 
                                    clickFunction={props.calcSmStraight}
                                    firstRoll={props.firstRoll}
                                /> : 
                                props.smStrScore}
                        </td>
                    </tr>
                {/* Lg Straight row */}
                    <tr>
                        <td className="cat">
                            <h3 className="cat-label">Lg Straight</h3>
                            <p className="description">(40 pts)</p>
                        </td>
                        <td>
                            {props.lgStrScore === null ?  
                                <ScoreButton 
                                    clickFunction={props.calcLgStraight}
                                    firstRoll={props.firstRoll}
                                /> : 
                                props.lgStrScore}
                        </td>
                    </tr>
                {/* 5 of a kind row */}
                    <tr>
                        <td className="cat">
                            <h3 className="cat-label">* 5 of a kind *</h3> 
                            <p className="description">You know what it's called  ;)</p>
                            <p className="description">(50 pts)</p> 
                        </td>
                        <td>
                            {props.fiveKindScore === null ?  
                                <ScoreButton 
                                    clickFunction={props.calcFiveOfKind}
                                    firstRoll={props.firstRoll}
                                /> : 
                                props.fiveKindScore}
                        </td>
                    </tr>
                {/* Chance row */}
                    <tr>
                        <td className="cat">
                            <h3 className="cat-label">Chance</h3>
                            <p className="description">(sum of all dice)</p>
                        </td>
                        <td>
                            {props.chanceScore === null ?  
                                <ScoreButton 
                                    clickFunction={props.calcChanceScore}
                                    firstRoll={props.firstRoll}
                                /> : 
                                props.chanceScore}
                        </td>
                    </tr>
                {/* Total Score row */}
                    <tr>
                        <td className="cat">
                            <h3 className="cat-label">Total Score</h3>
                        </td>
                        <td>
                            {props.totalScore}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Scorecard;