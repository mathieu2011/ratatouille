import { User } from "../User";
import { NavItem } from "./NavItem";

export type Menu = {
  user: User
  navigation: NavItem[]
}

export default Menu
