import React, { Component } from 'react';

/** display a div with a backgroundColor, width and height based on the props passed to it */
class Box extends Component {
    render() {
        return (
            <div>
                <div style={{
                    height: `${this.props.height}em`,
                    width: `${this.props.width}em`,
                    backgroundColor: this.props.color
                    }} 
                />
                <button onClick={this.props.removeBox}>X</button>          
            </div>      
        )
    }
}

export default Box;
