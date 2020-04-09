import { Context } from "../models/Context";

export interface iPage {
  context: Context,
  render(): Function,
  destroy(): Function
}

export class Page implements iPage {
  context: Context;

  constructor(context: Context) {
    this.context = context;
  }

  render(): Function {

  }
  destroy(): Function {
    throw new Error("Method not implemented.");
  }

}
