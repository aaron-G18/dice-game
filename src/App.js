import React, { Component } from "react";
import './App.css';
import Dice from 'react-dice-roll';
import Scorecard from "./components/Scorecard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rollsLeft: 3,
      firstRoll: true,
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
      acesScore: null,
      twosScore: null,
      threesScore: null,
      foursScore: null,
      fivesScore: null,
      sixesScore: null,
      topSum: 0,
      bonusScore: 0,
      threeKindScore: null,
      fourKindScore: null,
      fullHouseScore: null,
      smStrScore: null,
      lgStrScore: null,
      fiveKindScore: null,
      chanceScore: null,
      totalScore: 0
    };  
  }

//////// ****** TO DO LIST ********* ////////////
/////////////////////////////////////////////////
// 
// - Instructions. Maybe a pop-up modal from a button?
// - Restart game button?
// - high score? maybe stor a cookie with high score so persists?



// * Functions to disable the rolling of each individual die (D1 - D5) by changing the trigger for the die.
// * D1 roll disable funtion
toggleD1Disabled = () => {
  if (this.state.d1Trigger === "r") {
    this.setState({
      d1Trigger: "nope",
      d1ButtonText: "Release"
    });
  } else {
    this.setState({
      d1Trigger: "r",
      d1ButtonText: "Hold"
    });
  }
};

// * D2 rolldisable funtion
toggleD2Disabled = () => {
  if (this.state.d2Trigger === "r") {
    this.setState({
      d2Trigger: "nope",
      d2ButtonText: "Release"
    });
  } else {
    this.setState({
      d2Trigger: "r",
      d2ButtonText: "Hold"
    });
  }
};

// * D3 roll disable funtion
toggleD3Disabled = () => {
  if (this.state.d3Trigger === "r") {
    this.setState({
      d3Trigger: "nope",
      d3ButtonText: "Release"
    });
  } else {
    this.setState({
      d3Trigger: "r",
      d3ButtonText: "Hold"
    });
  }
};

// * D4 roll disable funtion
toggleD4Disabled = () => {
  if (this.state.d4Trigger === "r") {
    this.setState({
      d4Trigger: "nope",
      d4ButtonText: "Release"
    });
  } else {
    this.setState({
      d4Trigger: "r",
      d4ButtonText: "Hold"
    });
  }
};

// * D5 roll disable funtion
toggleD5Disabled = () => {
  if (this.state.d5Trigger === "r") {
    this.setState({
      d5Trigger: "nope",
      d5ButtonText: "Release"
    });
  } else {
    this.setState({
      d5Trigger: "r",
      d5ButtonText: "Hold"
    });
  }
};


// Function to decrement the roll count if the keyup event is the "r" key and to "lock out" dice rolling if 0 rolls left by changing the trigger of all the dice.
rollCount = (event) => {
  if (event.key === "r") {
    this.setState({
      rollsLeft: (this.state.rollsLeft - 1),
      firstRoll: false
    });
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



// Function to reset dice (roll count and event listener)
resetDice = () => {
  // add back the event listener
  document.addEventListener("keyup", this.rollCount);
  // reset roll count and hold/release buttons
  this.setState({
    rollsLeft: 3,
    d1Trigger: "r",
    d1ButtonText: "Hold",
    d2Trigger: "r",
    d2ButtonText: "Hold",
    d3Trigger: "r",
    d3ButtonText: "Hold",
    d4Trigger: "r",
    d4ButtonText: "Hold",
    d5Trigger: "r",
    d5ButtonText: "Hold",
    firstRoll: true
  });
};
/////
//////
/////




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
  // set state then use calcBonusScore in the call back function so it waits until state is updated.
  this.setState({acesScore: score}, () => {
    this.calcBonusScore();
    this.calcTotalScore();
    this.resetDice();
  });
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
  // set state then use calcBonusScore in the call back function so it waits until state is updated.
  this.setState({twosScore: score}, () => {
    this.calcBonusScore();
    this.calcTotalScore();
    this.resetDice();
  });
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
  // set state then use calcBonusScore in the call back function so it waits until state is updated.
  this.setState({threesScore: score}, () => {
    this.calcBonusScore();
    this.calcTotalScore();
    this.resetDice();
  });
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
  // set state then use calcBonusScore in the call back function so it waits until state is updated.
  this.setState({foursScore: score}, () => {
    this.calcBonusScore();
    this.calcTotalScore();
    this.resetDice();
  });
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
  // set state then use calcBonusScore in the call back function so it waits until state is updated.
  this.setState({fivesScore: score}, () => {
    this.calcBonusScore();
    this.calcTotalScore();
    this.resetDice();
  });
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
  // set state then use calcBonusScore in the call back function so it waits until state is updated.
  this.setState({sixesScore: score}, () => {
    this.calcBonusScore();
    this.calcTotalScore();
    this.resetDice();
  });
  return score;
};

// Function to calculate if you get the bonus or not.
// Need to check the sum of aces through sixes and see if it is over 63. If so, they get the bonus. If not, no bonus.
calcBonusScore = () => {
  let topScores = [this.state.acesScore, this.state.twosScore, this.state.threesScore, this.state.foursScore, this.state.fivesScore, this.state.sixesScore];
  let topSum = topScores.reduce(this.sumFunc);
  console.log("topSum = ", topSum);
  this.setState({topSum: topSum});
  if (topSum > 63) {
    this.setState({bonusScore: 35})
  }
};

// Funtion got calculate total score for all categories.
calcTotalScore = () => {
  let allScores = [this.state.acesScore, this.state.twosScore, this.state.threesScore, this.state.foursScore, this.state.fivesScore, this.state.sixesScore, this.state.bonusScore, this.state.threeKindScore, this.state.fourKindScore, this.state.fullHouseScore, this.state.smStrScore, this.state.lgStrScore, this.state.fiveKindScore, this.state.chanceScore];
  let total = allScores.reduce(this.sumFunc);
  this.setState({totalScore: total});
};

// Funtion for reduce methods above to sum the array.
sumFunc = (total, num) => {
  return total + num;
};


// Function to calculate score for 3 of a kind.
calcThreeOfKind = () => {
  let score = 0;
  let diceValuesArr = [this.state.d1Value, this.state.d2Value, this.state.d3Value, this.state.d4Value, this.state.d5Value];
  let dice = {};
  // Count frequency of each value for the dice and put into "dice" object.
  for (let val of diceValuesArr) {
    dice[val] = (dice[val] || 0) + 1;
  };
  // for each "key: value" pair in the created "dice" object, check if a value of 3 or higher exists meaning you got at least 3 of a kind.
  for (let val in dice) {
    if(dice[val] >= 3) {
      score = val * 3;
    };
  };
  console.log("score = ", score);
  this.setState({threeKindScore: score}, () => {
    this.calcTotalScore();
    this.resetDice();
  });
  return score;
};

// Funtion to calculate score for 4 of a kind.
calcFourOfKind = () => {
  let score = 0;
  let diceValuesArr = [this.state.d1Value, this.state.d2Value, this.state.d3Value, this.state.d4Value, this.state.d5Value];
  let dice = {};
  // Count frequency of each value for the dice and put into "dice" object.
  for (let val of diceValuesArr) {
    dice[val] = (dice[val] || 0) + 1;
  };
  // for each "key: value" pair in the created "dice" object, check if a value of 4 or higher exists meaning you got at least 4 of a kind.
  for (let val in dice) {
    if(dice[val] >= 4) {
      score = val * 4;
    };
  };
  console.log("score = ", score);
  this.setState({fourKindScore: score}, () => {
    this.calcTotalScore();
    this.resetDice();
  });
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
  console.log("full house score = ", score);
  this.setState({fullHouseScore: score}, () => {
    this.calcTotalScore();
    this.resetDice();
  });
  return score;
};

// Function to calculate score for Sm Straight
calcSmStraight = () => {
  let score = 0;
  let runCount = 1;
  let diceValuesArr = [this.state.d1Value, this.state.d2Value, this.state.d3Value, this.state.d4Value, this.state.d5Value];
  let newArr = [];
  diceValuesArr.sort();
  // start at index 1 and check if the number before the current index is the same as the previous number, if not, push to newArr (removing duplicates from diceValuesArr)
  for (let i = 0; i < diceValuesArr.length; i++) {
    if (diceValuesArr[i] !== diceValuesArr[i-1]) {
      newArr.push(diceValuesArr[i]); 
    };
  };  
  // loop over newArr and check for consecutive numbers, incrementing runCount for each consecutive number.
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === (newArr[i+1] - 1)) {
      runCount++;      
    };
  };
  if (runCount >= 4) {
    score = 30;
  };  
  console.log("Sm Straight score = ", score);
  this.setState({smStrScore: score}, () => {
    this.calcTotalScore();
    this.resetDice();
  });
  return score;
};

// Function to calculate score for Lg Straight
calcLgStraight = () => {
  let score = 0;
  let diceValuesArr = [this.state.d1Value, this.state.d2Value, this.state.d3Value, this.state.d4Value, this.state.d5Value];
  diceValuesArr.sort();
  let runCount = 1;
  for (let i = 0; i < diceValuesArr.length; i++) {
    if (diceValuesArr[i] === (diceValuesArr[i+1] - 1)) {
      runCount++;      
    };
  };
  if (runCount === 5) {
    score = 40;
  };  
  console.log("Lg Straight score = ", score);
  this.setState({lgStrScore: score}, () => {
    this.calcTotalScore();
    this.resetDice();
  });
  return score;
};

// Function to calculate score for "5 of a kind."
calcFiveOfKind = () => {
  let score = 0;
  let diceValuesArr = [this.state.d1Value, this.state.d2Value, this.state.d3Value, this.state.d4Value, this.state.d5Value];
  let dice = {};
  // Count frequency of each value for the dice and put into "dice" object.
  for (let val of diceValuesArr) {
    dice[val] = (dice[val] || 0) + 1;
  };
  // for each "key: value" pair in the created "dice" object, check if a value of 5 exists meaning you got at 5 of a kind.
  for (let val in dice) {
    if(dice[val] === 5) {
      score = val * 5;
    };
  };
  console.log("score = ", score);
  this.setState({fiveKindScore: score}, () => {
    this.calcTotalScore();
    this.resetDice();
  });
  return score;
};

// Function to calculate chance total (score of all die values)
calcChanceScore = () => {
  let score = (this.state.d1Value + this.state.d2Value + this.state.d3Value + this.state.d4Value + this.state.d5Value);
  console.log("Chance Sum = ", score);
  this.setState({chanceScore: score}, () => {
    this.calcTotalScore();
    this.resetDice();
  });
  return score;
};

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
            <button type="button" className={this.state.firstRoll ? "roll-button hide" : "roll-button"} onClick={this.toggleD1Disabled}>{this.state.d1ButtonText}</button>
          </div>
          <div className={this.state.d2ButtonText === "Release" ? "die held" : "die"}>
            <Dice onRoll={(value) => this.setState({d2Value: value})} size="50" triggers={this.state.d2Trigger} />
            <button type="button" className={this.state.firstRoll ? "roll-button hide" : "roll-button"} onClick={this.toggleD2Disabled}>{this.state.d2ButtonText}</button>
          </div>
          <div className={this.state.d3ButtonText === "Release" ? "die held" : "die"}>
            <Dice onRoll={(value) => this.setState({d3Value: value})} size="50" triggers={this.state.d3Trigger} />
            <button type="button" className={this.state.firstRoll ? "roll-button hide" : "roll-button"} onClick={this.toggleD3Disabled}>{this.state.d3ButtonText}</button>
          </div>
          <div className={this.state.d4ButtonText === "Release" ? "die held" : "die"}>
            <Dice onRoll={(value) => this.setState({d4Value: value})} size="50" triggers={this.state.d4Trigger} />
            <button type="button" className={this.state.firstRoll ? "roll-button hide" : "roll-button"} onClick={this.toggleD4Disabled}>{this.state.d4ButtonText}</button>
          </div>
          <div className={this.state.d5ButtonText === "Release" ? "die held" : "die"}>
            <Dice onRoll={(value) => this.setState({d5Value: value})} size="50" triggers={this.state.d5Trigger} />
            <button type="button" className={this.state.firstRoll ? "roll-button hide" : "roll-button"} onClick={this.toggleD5Disabled}>{this.state.d5ButtonText}</button>
          </div> 
        </div>
        </div>
          <div className="categories-container">
            <Scorecard 
              calcAcesScore={this.calcAcesScore}
              calcTwosScore={this.calcTwosScore}
              calcThreesScore={this.calcThreesScore}
              calcFoursScore={this.calcFoursScore}
              calcFivesScore={this.calcFivesScore}
              calcSixesScore={this.calcSixesScore}

              calcThreeOfKind={this.calcThreeOfKind}
              calcFourOfKind={this.calcFourOfKind}
              calcFullHouse={this.calcFullHouse}
              calcSmStraight={this.calcSmStraight}
              calcLgStraight={this.calcLgStraight}
              calcFiveOfKind={this.calcFiveOfKind}
              calcChanceScore={this.calcChanceScore}
              { ...this.state}
              />
        </div>
    </div>
  )};
}

export default App;
