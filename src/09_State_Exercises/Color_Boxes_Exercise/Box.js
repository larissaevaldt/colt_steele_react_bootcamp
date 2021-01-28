import React, { Component } from 'react';
import { choice } from '../helpers';
import './Box.css';

// ideally Box is going to be a stateless component but we haven't learned how to do that yet
class Box extends Component {
    
    constructor(props) {
        super(props);
        this.state = { color: choice(this.props.colors) };
        this.handleClick = this.handleClick.bind(this);
    }

    pickColor() {
        let newColor;
        do{
            newColor = choice(this.props.colors);
        } while (newColor === this.state.color)
        
        this.setState({color: newColor});
    }

    handleClick(e) {
        this.pickColor();
    }

    render() {
        return (
            <div className="Box" onClick={this.handleClick} style={{backgroundColor: this.state.color} }>
                
            </div>
        )
    }
}

export default Box;
