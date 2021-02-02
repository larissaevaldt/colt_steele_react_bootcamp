import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'; //Redirect component is one of the ways to redirect somebody / change their location
import './Food.css';

class Food extends Component {
    
    render() {
        const name = this.props.match.params.name;
        const url = `https://source.unsplash.com/1600x900/?${name}`;
        return (
            <div className="Food">
                {/* AN EXAMPLE OF USING REDIRECT */}
                {/* check if the name contains a number, if it contains redirect to home, otherwise display the h1 and img */}
                {/\d/.test(name) ? (<Redirect to="/" />) : (
                    <div>
                    <h1>I love to eat {name} </h1>
                    <img src={url} alt=""/>
                    </div>
                    )
                }
            </div>
        )
    }
}

export default Food;
