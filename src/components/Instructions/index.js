import React, { Component } from "react";
import "./style.css";


//////////  make instructions a modal pup-up  ////////////


class Instructions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    /// functions here



    render(){
        return(
        <div className="instructions">
            <button>Instructions</button>
            <h2>How to play:</h2>
            <p>Each turn you are given 3 rolls. After the first roll, you are allowed to hold any die you want (or none) before the next roll. Holding a die will keep its value (will not roll with the next roll). You don't have to use all three of your rolls. At any time, after the first roll, you may record a score in the category of your choosing, but after your third roll in the turn you must choose a category to record a score in, even if it will result in 0 points scored. Once you record a score in a category, the next turn begins. Once all categories have been recorded, the game is over and your total score is displayed at the bottom of the scorecard.</p>
            <h2>Scoring for Categories:</h2>
            <p>Aces - Sixes: Recieve the sum of all dice that match the category (e.g. if you have three dice that are 3's and record a score for Threes, you would receive 9 points).</p>
            <p>Bonus: If the total points recorded for Aces through Sixes is greater than 63, you receive 35 points. (this is calculated automatically, no action required)</p>
            <p>Three of a Kind, Four of a Kind, and Five of a Kind: If you have three (Three of a Kind) or four (Four of a Kind) matching dice, you will receive the sum of the matching dice. If you have all five matching diece (Five of a Kind), that is worth 50 points.</p>
            <p>Full House: A full house is having three of a kind AND a pair. (e.g. if your dice are [5, 5, 3, 5, 3] then you have a full house... three 5's and two 3's). This is worth 25 points.</p>
            <p>Small and Large Straights: Straights are runs of consecutive numbers (e.g. 1, 2, 3, 4). A small straight is 4 consecutive numbers (e.g. 2, 3, 4, 5) and is worth 30 points. A large straight is 5 consecutive numbers (e.g. 2, 3, 4, 5, 6) and is worth 40 points.</p>
            <p>Chance: The Chance category is simply the sum of all the dice.</p>
        </div>
    
    )};
};

export default Instructions;