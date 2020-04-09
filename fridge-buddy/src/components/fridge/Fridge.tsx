import { FridgeCategory } from "./FridgeCategory"
import React from "react";
import Provision from "../../models/fridge/Provision";
import { Context } from "../../models/Context";

class Fridge extends React.Component<FridgeContext> {
  render() {
    let fridgeCategories = this.props.context.fridge?.forEach(
      (category: Provision[], idx: number) => {
        return <FridgeCategory key={"fridge-cat-" + idx} title="some title" items={category}/>
      }
    );

    return <div>
      <h2>My Fridge</h2>
        {fridgeCategories}
    </div>
  }
}

export type FridgeContext = {
  context: Context
}

export default Fridge;
