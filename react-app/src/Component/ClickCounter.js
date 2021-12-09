import React, { Component } from "react";
import UpdatedComponent from "./HOC";

class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div className="Center-Button">
        <h1>{count}</h1>
        <button onClick={incrementCount}>You press {count} times</button>
      </div>
    );
  }
}
export default UpdatedComponent(ClickCounter);
