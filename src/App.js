import React, { Component } from 'react';
import './App.css';
// change this import according to which exercise to render
import TodoList from './15_TodoList_Exercise/TodoList';

class App extends Component {
  render() {
    return (
    <div className="App">
      {/* change the component according to the exercise to render */}
        {/* <Lottery />
        <Lottery title="Mini Daily" maxNum={10} numBalls={4} /> */}
        <TodoList />
    </div>
    );
  }
}

export default App;
