import React, { Component } from 'react';
import './App.css';
// change this import according to which exercise to render
import Pokegame from './05_Pokedex_Exercise/Pokegame';

class App extends Component {
  render() {
    return (
    <div className="App">
      {/* change the component according to the exercise to render */}
      <Pokegame />
    </div>
    );
  }
}

export default App;
