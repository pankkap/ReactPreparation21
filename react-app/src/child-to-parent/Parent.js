import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor() {
    super();
    this.state = {
      parentUnit: "kg",
    };
  }
  changeUnit(item) {
    this.setState({ unit: item });
  }
  render() {
    return (
      <div>
        <h1>Pass data from child to parent</h1>
        <Child
          data={{
            unit: this.state.parentUnit,
            changeunit: this.changeUnit.bind(this),
          }}
          // Here data is the prop to pass to child
          // and we pass multiple props in the form of an Object
        />
      </div>
    );
  }
}

export default Parent;
