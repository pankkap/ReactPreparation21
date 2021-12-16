// CommentListContainer.js - Container

import * as React from "react";
import CommentList from "./CommentList";

class CommentListContainer extends React.Component {
  constructor() {
    super();
    this.state = { comments: [], isLoading: true };
  }
  componentDidMount() {
    fetch("/data.json")
      .then((res) => res.json())
      .then((comments) => this.setState({ comments, isLoading: false }));
  }
  render() {
    return (
      <CommentList
        comments={this.state.comments}
        isLoading={this.state.isLoading}
      />
    );
  }
}

export default CommentListContainer;
