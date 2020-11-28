import React, { Component } from "react";
import './App.css';
import Dice from 'react-dice-roll';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      d1Trigger: "r",
      d1ButtonText: "Hold",
      d2Trigger: "r",
      d3Trigger: "r",
      d4Trigger: "r",
      d5Trigger: "r"
    }
  }


toggleD1Disabled = () => {
  if (this.state.d1Trigger === "r") {
    this.setState({d1Trigger: "a"});
    this.setState({d1ButtonText: "Release"});
  } else {
    this.setState({d1Trigger: "r"});
    this.setState({d1ButtonText: "Hold"});
  }
};

toggleD2Disabled = () => {
  if (this.state.d2Trigger === "r") {
    this.setState({d2Trigger: "a"});
  } else {
    this.setState({d2Trigger: "r"})
  }
}

toggleD3Disabled = () => {
  if (this.state.d3Trigger === "r") {
    this.setState({d3Trigger: "a"});
  } else {
    this.setState({d3Trigger: "r"})
  }
}

toggleD4Disabled = () => {
  if (this.state.d4Trigger === "r") {
    this.setState({d4Trigger: "a"});
  } else {
    this.setState({d4Trigger: "r"})
  }
};

toggleD5Disabled = () => {
  if (this.state.d5Trigger === "r") {
    this.setState({d5Trigger: "a"});
  } else {
    this.setState({d5Trigger: "r"})
  }
};

  


render(){
  return (
    <div className="App">

      <Dice onRoll={(value) => console.log(value)} size="50" triggers={this.state.d1Trigger} />
      <button type="button" id="rollButton" onClick={this.toggleD1Disabled}>{this.state.d1ButtonText}</button>

      <Dice onRoll={(value) => console.log(value)} size="50" triggers={this.state.d2Trigger} />
      <button type="button" id="rollButton" onClick={this.toggleD2Disabled}>Click to roll</button>

      <Dice onRoll={(value) => console.log(value)} size="50" triggers={this.state.d3Trigger} />
      <button type="button" id="rollButton" onClick={this.toggleD3Disabled}>Click to roll</button>

      <Dice onRoll={(value) => console.log(value)} size="50" triggers={this.state.d4Trigger} />
      <button type="button" id="rollButton" onClick={this.toggleD4Disabled}>Click to roll</button>

      <Dice onRoll={(value) => console.log(value)} size="50" triggers={this.state.d5Trigger} />
      <button type="button" id="rollButton" onClick={this.toggleD5Disabled}>Click to roll</button>

    </div>
  )};
}

export default App;
