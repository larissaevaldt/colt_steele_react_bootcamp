import React, { Component } from 'react';
import './App.css';
// change this import according to which exercise to render
//import JokeList from './19_DadJokes_Exercise/JokeList';

import Chips from "./21_VendingMachine_Exercise/Chips";
import Sardines from "./21_VendingMachine_Exercise/Sardines";
import Soda from"./21_VendingMachine_Exercise/Soda";
import Navbar from "./21_VendingMachine_Exercise/Navbar";
import VendingMachine from "./21_VendingMachine_Exercise/VendingMachine";
import { Route, Switch } from "react-router-dom";

class App extends Component {
    
  render() {
    return (
    <div className="App">
      {/* change the component according to the exercise to render */}
        {/* <Lottery />
        <Lottery title="Mini Daily" maxNum={10} numBalls={4} /> */}
        <Navbar />
        <Switch>
          <Route exact path='/' render={() => <VendingMachine />} />
          <Route exact path='/soda' render={() => <Soda />} />
          <Route exact path='/sardines' render={() => <Sardines />} />
          <Route exact path='/chips' render={() => <Chips />} />
        </Switch>
    </div>
    );
  }
}

export default App;
