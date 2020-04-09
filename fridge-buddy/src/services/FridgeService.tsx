import { Service } from "./Service";
import Provision from "../models/fridge/Provision";
import { Unit } from "../models/fridge/Measurement";

class FridgeService implements Service {
  get(): Provision[] {
    let vegetables: Provision[] = [
      {name: "Tomatoes", quantity: {value: 5, unit: Unit.PCS}},
      {name: "Carrots", quantity: {value: 3, unit: Unit.PCS}},
      {name: "Celery", quantity: {value: 1, unit: Unit.PCS}},
      {name: "Potatoes", quantity: {value: 1, unit: Unit.LBS}}
    ];
    return vegetables;
  };
  add() {
    // Create a new Provision
  };
  remove() {
    // Remove a Provision
  };
}


export default FridgeService;
