import React, { Component } from "react";
class Employee extends Component {
  render() {
    return (
      <>
        <h1>This is Class Component</h1>
        <h2>Props Recieved: {this.props.name}</h2>
      </>
    );
  }
}
export default Employee;
