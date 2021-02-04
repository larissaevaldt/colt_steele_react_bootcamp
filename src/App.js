import React, { Component } from 'react';
import Navbar from './23_DogApp_Exercise/Navbar';
import Routes from './23_DogApp_Exercise/Routes';
import whiskey from './23_DogApp_Exercise/img/whiskey.jpg'
import tubby from './23_DogApp_Exercise/img/tubby.jpg'
import hazel from './23_DogApp_Exercise/img/hazel.jpg'
import './App.css';
// change this import according to which exercise to render

class App extends Component {
    static defaultProps = {
        dogs: [
        {
            name: "Whiskey",
            age: 5,
            src: whiskey,
            facts: [
            "Whiskey loves eating popcorn.",
            "Whiskey is a terrible guard dog.",
            "Whiskey wants to cuddle with you!"
            ]
        },
        {
            name: "Hazel",
            age: 3,
            src: hazel,
            facts: [
            "Hazel has soooo much energy!",
            "Hazel is highly intelligent.",
            "Hazel loves people more than dogs."
            ]
        },
        {
            name: "Tubby",
            age: 4,
            src: tubby,
            facts: [
            "Tubby is not the brightest dog",
            "Tubby does not like walks or exercise.",
            "Tubby loves eating food."
            ]
        }
        ]
    };
    
  render() {
    
    return (
        <div className="App">
            <Navbar dogs={this.props.dogs} />
            <div className="container">
                <Routes dogs={this.props.dogs} />
            </div>
        </div>
    );
  }
}

export default App;
