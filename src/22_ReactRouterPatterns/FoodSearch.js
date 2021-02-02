import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FoodSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {query: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(evt) {
        this.setState({query: evt.target.value});
    }
    handleClick() {
        //obviously we would replace this alert with some method to do something
        //Do Something
        alert("Saved your food to DB!");
        //Redirect somewhere else
        this.props.history.push(`food/${this.state.query}`);
        //the history object is essentially a LinkedList, and when we push something onto it, React Router takes care of basically redirecting us to the next item/next route. In order to use history we need to make sure we have history in the props
    }
    render() {
        return (
            <div>
                <h1>Search for a Food: </h1>
                <input type="text" placeholder="Search for a food" value={this.state.query} onChange={this.handleChange} />
                {/* A link works to just send the user to another page, but if we wanted to store something in the database or send data to an API, or just do anything before redirecting, a link will not work */}
                <Link to={`/food/${this.state.query}`}>Go!!</Link>
                {/* we could instead add a button tag that instead of just linking us to some route, it's calling some code that could do a bunch of things, It could save to a database, could update the state and then redirect*/}
                <button onClick={this.handleClick}>Save New Food</button>
            </div>
        )
    }
}

export default FoodSearch;
