import React, { Component } from 'react';

import './App.css';
// change this import according to which exercise to render
import CounterClass from './32_Introducing_React_Hooks/CounterClass';
import CounterHooks from './32_Introducing_React_Hooks/CounterHooks';
class App extends Component {
    
  render() {
    
    return (
        <div className="App">
            <CounterClass />
            <CounterHooks />
        </div>
    );
  }
}

export default App;
