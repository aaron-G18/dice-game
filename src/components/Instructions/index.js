import React, { Component } from "react";

import "./style.css";


class Instructions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
        this.wrapperRef = React.createRef();
        // this.setWrapperRef = this.setWrapperRef.bind(this);
        // this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    // Function to show modal
    showModal = (event) => {
        event.preventDefault();
        this.setState({showModal: true}, () => {
            this.wrapperRef.current.focus();
            document.addEventListener("click", this.handleClickOutside, true);
        });
        
    };

    // Function to hide modal
    hideModal = () => {
        document.removeEventListener("click", this.handleClickOutside, true);
        this.setState({showModal: false});
        
    };

    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.hideModal();
        }
    };

    

    // componentDidMount() {
    //     document.addEventListener("click", this.handleClickOutside);
    // }

    // componentWillUnmount() {
    //     document.removeEventListener("click", this.handleClickOutside);
    // }

    
    render(){
        return(
        <div className="instructions">
            <button onClick={this.showModal}>Instructions</button>
            <div className={this.state.showModal ? "show" : "hide"} ref={this.wrapperRef}>
                <span className="close" onClick={this.hideModal}> &times; </span>
                <h2>How to play:</h2>
                <p>Each turn you are given 3 rolls. Press the "r" key to roll. After the first roll, you are allowed to hold any die you want (or none) before the next roll. Holding a die will keep its value (will not roll with the next roll). You don't have to use all three of your rolls. At any time, after the first roll, you may record a score in the category of your choosing, but after your third roll in the turn you must choose a category to record a score in, even if it will result in 0 points scored. Once you record a score in a category, the next turn begins. Once all categories have been recorded, the game is over and your total score is displayed at the bottom of the scorecard.</p>
                <h2>Scoring for Categories:</h2>
                <p><strong>Aces - Sixes:</strong>  Recieve the sum of all dice that match the category (e.g. if you have three dice that are 3's and record a score for Threes, you would receive 9 points).</p>
                <p><strong>Bonus:</strong> If the total points recorded for Aces through Sixes is greater than 63, you receive 35 points. (this is calculated automatically, no action required)</p>
                <p><strong>Three of a Kind, Four of a Kind, and Five of a Kind:</strong> If you have three (Three of a Kind) or four (Four of a Kind) matching dice, you will receive the sum of the matching dice. If you have all five matching diece (Five of a Kind), that is worth 50 points.</p>
                <p><strong>Full House:</strong> A full house is having three of a kind AND a pair. (e.g. if your dice are [5, 5, 3, 5, 3] then you have a full house... three 5's and two 3's). This is worth 25 points.</p>
                <p><strong>Small and Large Straights:</strong> Straights are runs of consecutive numbers (e.g. 1, 2, 3, 4). A small straight is 4 consecutive numbers (e.g. 2, 3, 4, 5) and is worth 30 points. A large straight is 5 consecutive numbers (e.g. 2, 3, 4, 5, 6) and is worth 40 points.</p>
                <p><strong>Chance:</strong> The Chance category is simply the sum of all the dice.</p>
            </div>
        </div>
    
    )};
};



export default Instructions;