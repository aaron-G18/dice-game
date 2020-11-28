import React, { Component } from "react";
import './App.css';
import Dice from 'react-dice-roll';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.setState({d2ButtonText: "Release"});
  } else {
    this.setState({d2Trigger: "r"});
    this.setState({d2ButtonText: "Hold"});
  }
};

toggleD3Disabled = () => {
  if (this.state.d3Trigger === "r") {
    this.setState({d3Trigger: "a"});
    this.setState({d3ButtonText: "Release"});
  } else {
    this.setState({d3Trigger: "r"});
    this.setState({d3ButtonText: "Hold"});
  }
};

toggleD4Disabled = () => {
  if (this.state.d4Trigger === "r") {
    this.setState({d4Trigger: "a"});
    this.setState({d4ButtonText: "Release"});
  } else {
    this.setState({d4Trigger: "r"});
    this.setState({d4ButtonText: "Hold"});
  }
};

toggleD5Disabled = () => {
  if (this.state.d5Trigger === "r") {
    this.setState({d5Trigger: "a"});
    this.setState({d5ButtonText: "Release"});
  } else {
    this.setState({d5Trigger: "r"});
    this.setState({d5ButtonText: "Hold"});
  }
};



  


render(){
  return (
    <div className="App">

      <Dice onRoll={(value) => console.log(value)} size="50" triggers={this.state.d1Trigger} />
      <button type="button" id="rollButton" onClick={this.toggleD1Disabled}>{this.state.d1ButtonText}</button>

      <Dice onRoll={(value) => console.log(value)} size="50" triggers={this.state.d2Trigger} />
      <button type="button" id="rollButton" onClick={this.toggleD2Disabled}>{this.state.d2ButtonText}</button>

      <Dice onRoll={(value) => console.log(value)} size="50" triggers={this.state.d3Trigger} />
      <button type="button" id="rollButton" onClick={this.toggleD3Disabled}>{this.state.d3ButtonText}</button>

      <Dice onRoll={(value) => console.log(value)} size="50" triggers={this.state.d4Trigger} />
      <button type="button" id="rollButton" onClick={this.toggleD4Disabled}>{this.state.d4ButtonText}</button>

      <Dice onRoll={(value) => console.log(value)} size="50" triggers={this.state.d5Trigger} />
      <button type="button" id="rollButton" onClick={this.toggleD5Disabled}>{this.state.d5ButtonText}</button>

    </div>
  )};
}

export default App;
