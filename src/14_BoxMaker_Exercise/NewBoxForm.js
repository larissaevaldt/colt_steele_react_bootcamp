import React, { Component } from 'react'
import { v4 as uuidv4 } from "uuid"; //using a library to create unique ids

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: "",
            width: "",
            color: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**Takes the data from the form that is currently in NewBoxForm state and pass it up to BoxList and call some method there that will take that data and add to the BoxList state */
    handleSubmit(evt) {
        evt.preventDefault();
        const newBox = {...this.state, id: uuidv4()}
        this.props.createBox(newBox);
        this.setState({
            height: "",
            width: "",
            color: ""
        })
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    /** render a form that when submitted creates a new Box */
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='height'>Height: </label>
                    <input 
                        type='text'
                        id='height' //needs to match htmlFor
                        name='height' //needs to match what we are putting in state
                        value={this.state.height}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='width'>Width: </label>
                    <input
                        type='text'
                        id='width' //id and htmlFor should match
                        name='width'
                        value={this.state.width}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='color'>Color: </label>
                    <input
                        type='text'
                        id='color'
                        name='color'
                        value={this.state.color}
                        onChange={this.handleChange}
                    />
                </div>
                
                <button>Add a New Box!</button>
            </form>
        )
    }
}

export default NewBoxForm;
