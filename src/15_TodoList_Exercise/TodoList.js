import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {todos: []}
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
        this.remove = this.remove.bind(this);
    }

    /** Receives data from the form and updates the state to be the current state plus the data received*/
    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }

    /**Receives the id of the task to update and the updated task from the form */
    update(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, task: updatedTask}
            }
            return todo;
        });
        //update state
        this.setState({
            todos: updatedTodos
        });
    }

    /** completed is a boolean which is used to add or remove a css class to the Todos */
    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, completed: !todo.completed}
            }
            return todo;
        });
        //update state
        this.setState({
            todos: updatedTodos
        });
    }

    remove(id) {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        })
    }
    render() {
        
        const todos = this.state.todos.map(todo => (
            <Todo
                key={todo.id}
                id={todo.id} 
                task={todo.task}
                completed={todo.completed}
                removeTodo={this.remove}
                updateTodo={this.update}
                toggleTodo={this.toggleCompletion} 
            />
        ))

        return (
            <div className="TodoList">
                <h1>
                    Todo List! <span>A Simple React Todo List App.</span>
                </h1>
                <ul>
                    {todos}
                </ul>
                <NewTodoForm createTodo={this.create} />
            </div>
        )
    }
}

export default TodoList;