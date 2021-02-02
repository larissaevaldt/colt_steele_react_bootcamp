import React, { Component } from 'react';
//a way of connecting components that didn't have have anything to do with React Router
import { withRouter } from 'react-router-dom'; //used to have access to this.props.history
import './Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin() {
        alert("LOGGED YOU IN!");
        // this will not work without withRouter, we will get an error saying history is undefined
        this.props.history.push("/food/salmon");
    }
   
        
    render() {
        return (
            <div className="Navbar">
                <button onClick={this.handleLogin} >Log in</button>
                <button onClick={this.props.history.goBack}>Go Back</button> {/* history has a goBack and goForward method that we can use like in this example */}
            </div>
        )
    }
}

//all we need to do is import withRouter at the top and then export like this:
export default withRouter(Navbar);
