import React, { Component } from 'react';
import './App.css';
// change this import according to which exercise to render
import BoxContainer from './09_State_Exercises/Color_Boxes_Exercise/BoxContainer';

class App extends Component {
  render() {
    return (
    <div className="App">
      {/* change the component according to the exercise to render */}
        {/* <Lottery />
        <Lottery title="Mini Daily" maxNum={10} numBalls={4} /> */}
        <BoxContainer />
    </div>
    );
  }
}

export default App;
