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
    };
  }

// * Functions to disable the rolling of each individual die (D1 - D5)
// * D1 roll disable funtion
toggleD1Disabled = () => {
  if (this.state.d1Trigger === "r") {
    this.setState({d1Trigger: "a"});
    this.setState({d1ButtonText: "Release"});
  } else {
    this.setState({d1Trigger: "r"});
    this.setState({d1ButtonText: "Hold"});
  }
};

// * D2 rolldisable funtion
toggleD2Disabled = () => {
  if (this.state.d2Trigger === "r") {
    this.setState({d2Trigger: "a"});
    this.setState({d2ButtonText: "Release"});
  } else {
    this.setState({d2Trigger: "r"});
    this.setState({d2ButtonText: "Hold"});
  }
};

// * D3 roll disable funtion
toggleD3Disabled = () => {
  if (this.state.d3Trigger === "r") {
    this.setState({d3Trigger: "a"});
    this.setState({d3ButtonText: "Release"});
  } else {
    this.setState({d3Trigger: "r"});
    this.setState({d3ButtonText: "Hold"});
  }
};

// * D4 roll disable funtion
toggleD4Disabled = () => {
  if (this.state.d4Trigger === "r") {
    this.setState({d4Trigger: "a"});
    this.setState({d4ButtonText: "Release"});
  } else {
    this.setState({d4Trigger: "r"});
    this.setState({d4ButtonText: "Hold"});
  }
};

// * D5 roll disable funtion
toggleD5Disabled = () => {
  if (this.state.d5Trigger === "r") {
    this.setState({d5Trigger: "a"});
    this.setState({d5ButtonText: "Release"});
  } else {
    this.setState({d5Trigger: "r"});
    this.setState({d5ButtonText: "Hold"});
  }
};


// Function to decrement the roll count if the keyup event is the r key.
rollCount = (event) => {
  if (event.key === "r") {
    this.setState({rollsLeft: (this.state.rollsLeft - 1)});
  }
};

// Add global event listener for keyup.
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
            <Dice onRoll={(value) => console.log(value)} size="50" triggers={this.state.d1Trigger} />
            <button type="button" className="roll-button" onClick={this.toggleD1Disabled}>{this.state.d1ButtonText}</button>
          </div>
          <div className={this.state.d2ButtonText === "Release" ? "die held" : "die"}>
            <Dice onRoll={(value) => console.log(value)} size="50" triggers={this.state.d2Trigger} />
            <button type="button" className="roll-button" onClick={this.toggleD2Disabled}>{this.state.d2ButtonText}</button>
          </div>
          <div className={this.state.d3ButtonText === "Release" ? "die held" : "die"}>
            <Dice onRoll={(value) => console.log(value)} size="50" triggers={this.state.d3Trigger} />
            <button type="button" className="roll-button" onClick={this.toggleD3Disabled}>{this.state.d3ButtonText}</button>
          </div>
          <div className={this.state.d4ButtonText === "Release" ? "die held" : "die"}>
            <Dice onRoll={(value) => console.log(value)} size="50" triggers={this.state.d4Trigger} />
            <button type="button" className="roll-button" onClick={this.toggleD4Disabled}>{this.state.d4ButtonText}</button>
          </div>
          <div className={this.state.d5ButtonText === "Release" ? "die held" : "die"}>
            <Dice onRoll={(value) => console.log(value)} size="50" triggers={this.state.d5Trigger} />
            <button type="button" className="roll-button" onClick={this.toggleD5Disabled}>{this.state.d5ButtonText}</button>
          </div> 
        </div>
        </div>
          <div className="categories-container">
            <Categories />
        </div>
    </div>
  )};
}

export default App;
