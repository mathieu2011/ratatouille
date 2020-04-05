import React from "react";

export class FridgeCategory extends React.Component {
  render() {
    return (
      <div className="fridge-category">
        <h2>Title</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        <button>Add more</button>
      </div>
    )
  }
}
