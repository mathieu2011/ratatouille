import React from "react";
import Button from "../generic/Button";
import Provision from "../../models/fridge/Provision";

export class FridgeCategory extends React.Component<FridgeCategoryProps> {
  render() {
    return (
      <div className="fridge-category">
        <h2>{this.props.title}</h2>
        <ul>
          {this.props.items.map(item => <li>{item.name} ({item.quantity.value + " " + item.quantity.unit})</li>)}
        </ul>
        <Button caption="Add more" parent={this}/>
      </div>
    )
  }
}

type FridgeCategoryProps = {
  title: String,
  items: Provision[]
}
