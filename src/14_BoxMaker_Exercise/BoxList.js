import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

/** Render all of the Box Components along with the NewBoxForm component */
class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {boxes: []}
        this.create = this.create.bind(this);
    }

    remove(id) {
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        })
    }

    /** Take data from the form and add to the state */
    create(newBox) {
        this.setState({
            boxes: [...this.state.boxes, newBox]
        })
    }

    render() {
        const boxes = this.state.boxes.map(box => (
            <Box 
                key={box.id} 
                id={box.id} 
                width={box.width} 
                height={box.height} 
                color={box.color } 
                removeBox={() => this.remove(box.id)} //demonstrating another way of doing the same thing but with an arrow function we can just pass removeBox() to onClick in the Box Component
            />
        ))
        return (
            <div>
                <h1>Color Box Maker Thingy</h1>
                <NewBoxForm createBox={this.create}/>
                {boxes}
            </div>
        )
    }
}

export default BoxList;
