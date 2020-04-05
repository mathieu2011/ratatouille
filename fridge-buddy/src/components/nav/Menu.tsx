import React from "react";
import {Menu as MenuProps} from "../../model/nav/Menu"

class Menu extends React.Component<MenuProps> {
  render() {
    return <div>
      <h2>Hi, {this.props.user.name}</h2>
      <ul>
  {this.props.navigation.map((navitem, it) => <li key={"nav-item-" + it} onClick={navitem.action}>{navitem.label}</li>)}
      </ul>
    </div>
  }
};

export default Menu;
