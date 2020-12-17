import React from "react";
import "./style.css";

function Instructions(props) {
    return(
        <div className="instructions">
            <h2>How to play:</h2>
            <p>Each turn you are given 3 rolls. After the first roll, you are allowed to hold any die you want (or none) before the next roll. Holding a die will keep its value (will not roll with the next roll). You don't have to use all three of your rolls. At any time, after the first roll, you may record a score in the category of your choosing, but after your third roll in the turn you must choose a category to record a score in, even if it will result in 0 points scored. Once you record a score in a category, the next turn begins. </p>
            <h2>Scoring for Categories:</h2>
            <p>Aces - Sixes: Recieve the sum of all dice that match the category (e.g. if you have three dice that are 3's and record a score for Threes, you would receive 9 points).</p>
            <p>Bonus: If the total points recorded for Aces through Sixes is greater than 63, you receive 35 points. (this is calculated automatically, no action required)</p>
            <p>Three of a Kind, Four of a Kind: If you have three (Three of a Kind) or four (Four of a Kind) matching dice, you will receive the sum of the matching dice.</p>
            <p></p>
        </div>
    );
};

export default Instructions;