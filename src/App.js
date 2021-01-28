import React, { Component } from 'react';
import './App.css';
// change this import according to which exercise to render
import RollDice from './07_Dice_Exercise/RollDice';

class App extends Component {
  render() {
    return (
    <div className="App">
      {/* change the component according to the exercise to render */}
      <RollDice />
    </div>
    );
  }
}

export default App;
