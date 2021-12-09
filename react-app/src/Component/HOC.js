import React, { Component } from "react";
const UpdatedComponent = (OrigionalComponent) => {
  class NewComponent extends Component {
    constructor() {
      super();
      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState((previousState) => {
        return { count: previousState.count + 1 };
      });
    };
    render() {
      return (
        <OrigionalComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }
  return NewComponent;
};
export default UpdatedComponent;
