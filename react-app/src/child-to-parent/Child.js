import React, { Component } from "react";

// Child can pass the data to parent by calling function that he recieve as props from parent

class Child extends Component {
  constructor() {
    super();
    this.state = {
      childUnit: "pound",
    };
  }
  render() {
    return (
      <div>
        <h3>Unit is: {this.props.data.unit}</h3>
        <button
          onClick={() => this.props.data.changeunit(this.state.childUnit)}
        >
          Click
        </button>
      </div>
    );
  }
}

export default Child;
