import User from "./User";
import Provision from "./fridge/Provision";

export class Context {
  user?: User;
  fridge?: Provision[][];

  constructor(user?: User, fridge?: Provision[][]) {
    if (user) this.user = user;
    if (fridge) this.fridge = fridge;
  }

  setUser(user: User) {
    this.user = user;
  }

  setFridge(fridge: Provision[][]) {
    this.fridge = fridge;
  }
}
