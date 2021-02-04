import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

import Chips from "./21_VendingMachine_Exercise/Chips";
import Sardines from "./21_VendingMachine_Exercise/Sardines";
import Soda from"./21_VendingMachine_Exercise/Soda";
import Navbar from "./21_VendingMachine_Exercise/Navbar";
import VendingMachine from "./21_VendingMachine_Exercise/VendingMachine";

class App extends Component {
    
  render() {
    return (
        <div className="App">
        
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
