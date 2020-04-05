import { FridgeCategory } from "./FridgeCategory"
import React from "react";

export class Fridge extends React.Component {
  render() {
    let fridgeCategories = [
      <FridgeCategory key="Veggies"/>,
      <FridgeCategory key="Meat"/>,
      <FridgeCategory key="Fruits"/>
    ];

    return <div>
      <h2>My Fridge</h2>
      {fridgeCategories}
    </div>
  }
}
