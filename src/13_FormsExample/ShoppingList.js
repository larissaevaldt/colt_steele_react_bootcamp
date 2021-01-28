import React, { Component } from "react";
import ShoppingListForm from "./ShoppingListForm";
import { v4 as uuidv4 } from "uuid"; //using a library to create unique ids

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "Milk", qty: "2 gallons", id: uuidv4() },
        { name: "Bread", qty: "2 loaves", id: uuidv4() }
      ]
    };
    this.addItem = this.addItem.bind(this);
  }

  /** adds a new item to the items array in the state */
 //method is passed to the ShoppingListForm, which will be called with state from the form
  addItem(item) {
    let newItem = { ...item, id: uuidv4() }; //taking the existing item with only name and id coming from the form and adding an id field
    this.setState(state => ({
      items: [...state.items, newItem] //spread operator syntax, it sets items to be all the existing state items plus the new item
    }));
  }
  renderItems() {
    return (
      <ul>
        {this.state.items.map(item => (
          <li key={item.id}>
            {item.name}:{item.qty}
          </li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div>
        <h1>Shopping List</h1>
        {this.renderItems()}
        <ShoppingListForm addItem={this.addItem} />
      </div>
    );
  }
}
export default ShoppingList;
