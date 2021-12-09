import React, { Component } from "react";
import UpdatedComponent from "./HOC";

class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h1 onMouseOver={incrementCount}>Hovered {count} Times</h1>
      </div>
    );
  }
}

export default UpdatedComponent(HoverCounter);
