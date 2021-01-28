import React, { Component } from "react";

// Simple Form Component
class ShoppingListForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", qty: "" }; // used to manage the form, so react know what is going on
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault(); //prevents the page from reloading
    this.props.addItem(this.state); //addItem is the method in the ShoppingList passed in as props. It updates the parent state.
    this.setState({ name: "", qty: "" }); //resets the form inputs
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* htmlFor needs to match input name attribute   */}
        <label htmlFor='name'>Name: </label>
        <input
          id='name'
          name='name' //needs to match what we are putting in state
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor='qty'>Quantity: </label>
        <input
          id='qty'
          name='qty'
          value={this.state.qty}
          onChange={this.handleChange}
        />
        <button>Add Item!</button>
      </form>
    );
  }
}
export default ShoppingListForm;
