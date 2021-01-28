import React, { Component } from 'react';
import './App.css';
// change this import according to which exercise to render
import Lottery from './08_Lottery_Exercise/Lottery';

class App extends Component {
  render() {
    return (
    <div className="App">
      {/* change the component according to the exercise to render */}
        <Lottery />
        <Lottery title="Mini Daily" maxNum={10} numBalls={4} />
    </div>
    );
  }
}

export default App;
