import React, { Component } from "react";
import "./Message.css";

// A way of applying styles to multiple components
//we create a component for that, instead of manually styling each one
class Message extends Component {
  render() {
      //this.props.children tells react to display the content that was nested or passed down to it inside of the div
    return <div className='Message'>{this.props.children}</div>;
  }
}
export default Message;
