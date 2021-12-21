import React from "react";

function VirtualDom() {
  const [last, setlast] = React.useState(5);
  return (
    <div className="container">
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item {last}</li>
      </ul>
      <button onClick={() => setlast(6)}>Update Item</button>
    </div>
  );
}
export default VirtualDom;
