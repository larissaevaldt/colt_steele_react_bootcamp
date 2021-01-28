import React, { Component } from 'react';
import Box from  './Box';
import './BoxContainer.css';

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 18,
        allColors: ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51", "#e63946", "#f1faee",
                    "#a8dadc", "#457b9d", "#1d3557", "#f72585", "#b5179e", "#7209b7", "#3f37c9"]
    }

    render() {
        const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
        <Box colors={this.props.allColors} />
        ));
        return (
            <div className='BoxContainer'>{boxes}</div>
        )
    }
}

export default BoxContainer;