import React, { Component } from 'react';
import './App.css';
// change this import according to which exercise to render
import Clicker from './06_Clicker_Exercise/Clicker';

class App extends Component {
  render() {
    return (
    <div className="App">
      {/* change the component according to the exercise to render */}
      <Clicker />
    </div>
    );
  }
}

export default App;
