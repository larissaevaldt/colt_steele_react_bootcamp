import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './DogList.css';

class DogList extends Component {
    render() {
        return (
            <div className="DogList">
                <h1 className="display-1 text-center my-5">Dog List</h1>
                {/* in bootstrap when you're using the grid system you have to wrap everything in a container class */}
                    <div className="row">
                        {/* there are 12 columns in total, we set each div to take up 4, meaning we end up we 3 columns */}
                        {this.props.dogs.map( d => (
                            <div className=" Dog col-lg-4 text-center" key={d.name} >
                                <img src={d.src} alt={d.name} />
                                <h3 className="mt-3"><Link className="underline" to={`/dogs/${d.name}`}>{d.name}</Link></h3>
                            </div>
                        ))}
                    </div>
                </div>
        )
    }
}

export default DogList;
