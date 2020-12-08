import React, { Component } from "react";
import './App.css';
import Dice from 'react-dice-roll';
import Categories from "./components/Categories";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rollsLeft: 3,
      d1Trigger: "r",
      d2Trigger: "r",
      d3Trigger: "r",
      d4Trigger: "r",
      d5Trigger: "r",
      d1ButtonText: "Hold",
      d2ButtonText: "Hold",
      d3ButtonText: "Hold",
      d4ButtonText: "Hold",
      d5ButtonText: "Hold",
      d1Value: 0,
      d2Value: 0,
      d3Value: 0,
      d4Value: 0,
      d5Value: 0,
      acesScore: 0,
      twosScore: 0,
      threesScore: 0,
      foursScore: 0,
      fivesScore: 0,
      sixesScore: 0,
    };  
  }

// * Functions to disable the rolling of each individual die (D1 - D5) by changing the trigger for the die.
// * D1 roll disable funtion
toggleD1Disabled = () => {
  if (this.state.d1Trigger === "r") {
    this.setState({d1Trigger: "nope"});
    this.setState({d1ButtonText: "Release"});
  } else {
    this.setState({d1Trigger: "r"});
    this.setState({d1ButtonText: "Hold"});
  }
};

// * D2 rolldisable funtion
toggleD2Disabled = () => {
  if (this.state.d2Trigger === "r") {
    this.setState({d2Trigger: "nope"});
    this.setState({d2ButtonText: "Release"});
  } else {
    this.setState({d2Trigger: "r"});
    this.setState({d2ButtonText: "Hold"});
  }
};

// * D3 roll disable funtion
toggleD3Disabled = () => {
  if (this.state.d3Trigger === "r") {
    this.setState({d3Trigger: "nope"});
    this.setState({d3ButtonText: "Release"});
  } else {
    this.setState({d3Trigger: "r"});
    this.setState({d3ButtonText: "Hold"});
  }
};

// * D4 roll disable funtion
toggleD4Disabled = () => {
  if (this.state.d4Trigger === "r") {
    this.setState({d4Trigger: "nope"});
    this.setState({d4ButtonText: "Release"});
  } else {
    this.setState({d4Trigger: "r"});
    this.setState({d4ButtonText: "Hold"});
  }
};

// * D5 roll disable funtion
toggleD5Disabled = () => {
  if (this.state.d5Trigger === "r") {
    this.setState({d5Trigger: "nope"});
    this.setState({d5ButtonText: "Release"});
  } else {
    this.setState({d5Trigger: "r"});
    this.setState({d5ButtonText: "Hold"});
  }
};


// Function to decrement the roll count if the keyup event is the "r" key and to "lock out" dice rolling if 0 rolls left by changing the trigger of all the dice.
rollCount = (event) => {
  if (event.key === "r") {
    this.setState({rollsLeft: (this.state.rollsLeft - 1)});
  }
  if (this.state.rollsLeft === 0) {
    document.removeEventListener("keyup", this.rollCount);
    this.setState({
      d1Trigger: "nope",
      d2Trigger: "nope",
      d3Trigger: "nope",
      d4Trigger: "nope",
      d5Trigger: "nope"
    })
  }
};




// Function to check for "runs" to find Sm and Lg straights.
//(sort array, then loop over array and check for consecutive numbers)



// Function to calculate score for Aces (pass function to component to be on click for score button)
calcAcesScore = () => {
  let score = 0;
  let diceValuesArr = [this.state.d1Value, this.state.d2Value, this.state.d3Value, this.state.d4Value, this.state.d5Value];
  for (let i = 0; i < diceValuesArr.length; i++){    
    if (diceValuesArr[i] === 1) {
      score += diceValuesArr[i];
    };
  };
  console.log("Aces score = ", score);
  return score;
};

// Function to calculate score for Twos (pass function to component to be on click for score button)
calcTwosScore = () => {
  let score = 0;
  let diceValuesArr = [this.state.d1Value, this.state.d2Value, this.state.d3Value, this.state.d4Value, this.state.d5Value];
  for (let i = 0; i < diceValuesArr.length; i++){    
    if (diceValuesArr[i] === 2) {
      score += diceValuesArr[i];
    };
  };
  console.log("Twos score = ", score);
  return score;
};

// Function to calculate score for Threes (pass function to component to be on click for score button)
calcThreesScore = () => {
  let score = 0;
  let diceValuesArr = [this.state.d1Value, this.state.d2Value, this.state.d3Value, this.state.d4Value, this.state.d5Value];
  for (let i = 0; i < diceValuesArr.length; i++){    
    if (diceValuesArr[i] === 3) {
      score += diceValuesArr[i];
    };
  };
  console.log("Threes score = ", score);
  return score;
};

// Function to calculate score for Fours (pass function to component to be on click for score button)
calcFoursScore = () => {
  let score = 0;
  let diceValuesArr = [this.state.d1Value, this.state.d2Value, this.state.d3Value, this.state.d4Value, this.state.d5Value];
  for (let i = 0; i < diceValuesArr.length; i++){    
    if (diceValuesArr[i] === 4) {
      score += diceValuesArr[i];
    };
  };
  console.log("Fours score = ", score);
  return score;
};

// Function to calculate score for Fives (pass function to component to be on click for score button)
calcFivesScore = () => {
  let score = 0;
  let diceValuesArr = [this.state.d1Value, this.state.d2Value, this.state.d3Value, this.state.d4Value, this.state.d5Value];
  for (let i = 0; i < diceValuesArr.length; i++){    
    if (diceValuesArr[i] === 5) {
      score += diceValuesArr[i];
    };
  };
  console.log("Fives score = ", score);
  return score;
};

// Function to calculate score for Sixes (pass function to component to be on click for score button)
calcSixesScore = () => {
  let score = 0;
  let diceValuesArr = [this.state.d1Value, this.state.d2Value, this.state.d3Value, this.state.d4Value, this.state.d5Value];
  for (let i = 0; i < diceValuesArr.length; i++){    
    if (diceValuesArr[i] === 6) {
      score += diceValuesArr[i];
    };
  };
  console.log("Sixes score = ", score);
  return score;
};

// Function to calculate score for a full house.
calcFullHouse = () => {
  let score = 0;
  let diceValuesArr = [this.state.d1Value, this.state.d2Value, this.state.d3Value, this.state.d4Value, this.state.d5Value];
  let dice = {};
  let hasThreeOfKind = false;
  let hasTwoOfKind = false;
  // Count frequency of each value for the dice and put into "dice" object.
  for (let val of diceValuesArr) {
    dice[val] = (dice[val] || 0) + 1;
  };
  // for each "key: value" pair in the created "dice" object, check if a value of 2 and 3 both exist (meaning a full house) and toggle the booleans for each.
  for (let val in dice) {
    if(dice[val] === 3) {
      hasThreeOfKind = true;
    };
    if(dice[val] === 2) {
      hasTwoOfKind = true;
    }
  };
  // if both booleans are true, return the 25 point value as "score.""
  if(hasTwoOfKind && hasThreeOfKind) {
    score = 25;
  } else {
    score = 0;
  };
  return score;
};


// Function to calculate chance total (score of all die values)
calcChanceScore = () => {
  let score = (this.state.d1Value + this.state.d2Value + this.state.d3Value + this.state.d4Value + this.state.d5Value);
  console.log("Chance Sum = ", score);
  return score;
}


// Add global event listener for keyup when App component mounts.
componentDidMount () {
  document.addEventListener("keyup", this.rollCount);
};

render(){
  return (
    <div className="app">
      <div className="sticky">
        <div className="dice-container">
          <h2>Rolls left: {this.state.rollsLeft}</h2>
          <div className={this.state.d1ButtonText === "Release" ? "die held" : "die"}>
            <Dice onRoll={(value) => this.setState({d1Value: value})} size="50" triggers={this.state.d1Trigger} />
            <button type="button" className="roll-button" onClick={this.toggleD1Disabled}>{this.state.d1ButtonText}</button>
          </div>
          <div className={this.state.d2ButtonText === "Release" ? "die held" : "die"}>
            <Dice onRoll={(value) => this.setState({d2Value: value})} size="50" triggers={this.state.d2Trigger} />
            <button type="button" className="roll-button" onClick={this.toggleD2Disabled}>{this.state.d2ButtonText}</button>
          </div>
          <div className={this.state.d3ButtonText === "Release" ? "die held" : "die"}>
            <Dice onRoll={(value) => this.setState({d3Value: value})} size="50" triggers={this.state.d3Trigger} />
            <button type="button" className="roll-button" onClick={this.toggleD3Disabled}>{this.state.d3ButtonText}</button>
          </div>
          <div className={this.state.d4ButtonText === "Release" ? "die held" : "die"}>
            <Dice onRoll={(value) => this.setState({d4Value: value})} size="50" triggers={this.state.d4Trigger} />
            <button type="button" className="roll-button" onClick={this.toggleD4Disabled}>{this.state.d4ButtonText}</button>
          </div>
          <div className={this.state.d5ButtonText === "Release" ? "die held" : "die"}>
            <Dice onRoll={(value) => this.setState({d5Value: value})} size="50" triggers={this.state.d5Trigger} />
            <button type="button" className="roll-button" onClick={this.toggleD5Disabled}>{this.state.d5ButtonText}</button>
          </div> 
        </div>
        </div>
          <div className="categories-container">
            <Categories 
              calcAcesScore={this.calcAcesScore}
              calcTwosScore={this.calcTwosScore}
              calcThreesScore={this.calcThreesScore}
              calcFoursScore={this.calcFoursScore}
              calcFivesScore={this.calcFivesScore}
              calcSixesScore={this.calcSixesScore}
              calcFullHouse={this.calcFullHouse}
              calcChanceScore={this.calcChanceScore}
              {...this.state}/>
        </div>
    </div>
  )};
}

export default App;
