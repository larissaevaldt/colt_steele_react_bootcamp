import React, { Component } from 'react';
import "./Todo.css";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        }
        this.toggleForm = this.toggleForm.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    
    /** hides the form when a task being updated and displays when it isn't */
    toggleForm() {
        this.setState({
            isEditing: !this.state.isEditing
        });
    }
    /** called when the update form is submitted */
    handleUpdate(evt) {
        evt.preventDefault(); //prevents the page from reloading
        this.props.updateTodo(this.props.id, this.state.task) //passing the new task data up to the parent
        this.setState({ isEditing: false }); //showing the task lis again and hiding the update form
    }

    /** updates the state as the input text changes */
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleToggle(evt) {
        this.props.toggleTodo(this.props.id);
    }
    
    handleRemove() {
        this.props.removeTodo(this.props.id);
    }
    render() { 
        let result;
        if (this.state.isEditing) {
            result = (
                <div className="Todo">
                    <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                        <input 
                            type="text"
                            name="task"
                            value={this.state.task}
                            onChange={this.handleChange} 
                        />
                        <button>Save</button>
                    </form>
                </div>
            );
        } else {
            result = (
                <div className="Todo">
                    <li className={this.props.completed ? "Todo-task completed" : "Todo-task"} onClick={this.handleToggle}>{this.props.task}</li>
                    <div className="Todo-buttons">
                        <button onClick={this.toggleForm}>
                            <i class='fas fa-pen'></i>
                        </button>
                        <button onClick={this.handleRemove}>
                            <i class='fas fa-trash'></i>
                        </button>
                    </div>
                </div>
            );
        }
        return result;
    }
}

export default Todo;
