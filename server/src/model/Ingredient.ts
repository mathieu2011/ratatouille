import { Entity } from "./Entity"
import { Unit } from "./MeasureUnit"

export class Ingredient extends Entity {
  image?: String
  typeid?: Number
  quantity?: Number
  unit?: Unit
}
