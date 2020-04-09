import React from "react";
import User from "../../models/User";
import Menu from "./Menu";
import NavItem from "../../models/nav/NavItem";

export class NavBar extends React.Component {
  render() {
    const user: User = {
      name: "Mathias",
      isLoggedIn: true
    }
    const navigation: NavItem[] = [
      {
        action: (e) => {console.log("clicked", e.target)},
        label: "Menu item 1"
      },
      {
        action: (e) => {console.log("clicked", e.target)},
        label: "Menu item 2"
      }
    ]
    return <div className="nav-bar">
      <div>
        <img src="#" alt="Ratatouille logo"/>
      </div>
      <Menu user={user} navigation={navigation}/>
    </div>
  }
}
