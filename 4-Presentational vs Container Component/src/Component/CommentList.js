// CommentList.js - Presenter

import * as React from "react";
const Commentlist = ({ comments, isLoading }) => (
  <ul>
    {isLoading && (
      <li>
        <span>Loading...</span>
      </li>
    )}
    {comments.map(({ body, author }) => (
      <li>
        {body}
        {author}
      </li>
    ))}
  </ul>
);

export default Commentlist;
