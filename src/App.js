import React, { Component } from 'react';
import './App.css';
// change this import according to which exercise to render
//import JokeList from './19_DadJokes_Exercise/JokeList';

// import Chips from "./21_VendingMachine_Exercise/Chips";
// import Sardines from "./21_VendingMachine_Exercise/Sardines";
// import Soda from"./21_VendingMachine_Exercise/Soda";
// import Navbar from "./21_VendingMachine_Exercise/Navbar";
// import VendingMachine from "./21_VendingMachine_Exercise/VendingMachine";
import { Route, Switch } from "react-router-dom";

import Food from './22_ReactRouterPatterns/Food';
import Meal from './22_ReactRouterPatterns/Meal';
import Navbar from './22_ReactRouterPatterns/Navbar';
import FoodSearch from './22_ReactRouterPatterns/FoodSearch';

class App extends Component {
    
  render() {
    return (
    <div className="App">
      {/* change the component according to the exercise to render */}
        {/* Exercise 08
        <Lottery />
        <Lottery title="Mini Daily" maxNum={10} numBalls={4} /> */}
        
        {/* Exercise 21
        <Navbar />
        <Switch>
          <Route exact path='/' render={() => <VendingMachine />} />
          <Route exact path='/soda' render={() => <Soda />} />
          <Route exact path='/sardines' render={() => <Sardines />} />
          <Route exact path='/chips' render={() => <Chips />} />
        </Switch> */}

        <div className="App">
            {/* There is a problem if we try to push to the history from a component that is not associated with a Route. For instance this Navbar that we put outside the switch to always be on our page*/}
            <Navbar /> {/*  we can use withRouter to have access to history in a component out of Route */}
           <Switch>
                {/* the exact keyword ensure '/food/tacos' for instance, matches, but /food/tacos/stgelse doesn't */}
                {/* the render method is automatically passed some route information, 3 props but to use it we have 3 options*/}
                {/* OPTION ONE - extract the name and pass only the name as props
                <Route exact path="/food/:name" render={(routeProps) => <Food name={routeProps.match.params.name} />} /> */}

                {/* OPTION TWO - extract all 3 items, so routeProps will be passed down as 3 separate props to Food */}
                {/* <Route exact path="/food/:name" render={(routeProps) => <Food {...routeProps} />} /> */}

                {/* THIRD OPTION, React router automatically passes in as props to that component the match location in history */}
                {/* it is simpler but doesn't work if need to pass additional props */}
                <Route exact path="/food/:name" component={Food} />

                {/* Passing multiple parameters */}
                <Route exact path="/food/:foodName/drink/:drinkName" component={Meal} />

                <Route exact path="/" render={(routeProps) => <FoodSearch {...routeProps} />} />
                {/* Adding a 404 - Not found route - Need to wrap everything on a switch to work and the order matters, this needs to be the last route*/}
                <Route render={() => <h1>ERROR NOT FOUND!!</h1>} />
           </Switch>
        </div>
    </div>
    );
  }
}

export default App;
