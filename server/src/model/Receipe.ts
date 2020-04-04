import { Entity } from "./Entity";
import { Ingredient } from "./Ingredient";

export class Receipe extends Entity {
  description: String
  rating?: Number
  challenge?: Number
  timeNeeded?: TimeRanges
  image?: String
  ingredients: Ingredient[]
}
