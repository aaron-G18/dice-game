import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Dice from 'react-dice-roll';


// const rollDice = () => {
//   let roll = document.createEvent(KeyboardEvent);
//   roll.initEvent("a", true, true);
//   document.getElementById("rollButton").dispatchEvent(roll);
// }



class App extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }


  triggerKeyPress() {
    let spaceEvnt = new KeyboardEvent('keyup', {"key": "a", "code": "kVK_ANSI_A (0x00)"});
    document.dispatchEvent(spaceEvnt);
    console.log(spaceEvnt);
    
  }

  


render(){
  return (
    <div className="App">

<Dice onRoll={(value) => console.log(value)} size="50" triggers="a" />
<button type="button" id="rollButton" onClick={this.triggerKeyPress}>Click to roll</button>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )};
}

export default App;
