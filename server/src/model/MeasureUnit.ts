export enum Unit {
  KG = "kg",
  MG = "mg",
  LBS = "lbs",
  PCS = "pcs",
  L = "l",
  ML = "ml"
}

export class Measurement {
  value: number
  unit: Unit
}

export class MeasurementConverter {
  toLitre(originalMeasurement:Measurement): Measurement {
    const newMeasurement: Measurement = {
      value: originalMeasurement.value,
      unit: Unit.L
    }

    switch (originalMeasurement.unit) {
      case Unit.LBS:
        newMeasurement.value = originalMeasurement.value * 2;
        break;
      case Unit.ML:
      case Unit.MG:
        newMeasurement.value = originalMeasurement.value / 1000;
        break;
      default:
        break;
    }

    return newMeasurement;
  }
}
