type Measurement = {
  value: number,
  unit: Unit
}

export enum Unit {
  KG = "kg",
  MG = "mg",
  LBS = "lbs",
  PCS = "pcs",
  L = "l",
  ML = "ml"
}

export default Measurement
