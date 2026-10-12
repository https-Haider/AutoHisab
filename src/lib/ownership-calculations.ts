export const OWNERSHIP_LIMITS = {
  money: 1_000_000_000,
  annualDistanceKm: 200_000,
  fuelEfficiencyKmPerLiter: 100,
  petrolPricePerLiter: 10_000,
} as const;

export type ComparisonYears = 3 | 5;

export type VehicleOwnershipInputs = {
  purchasePrice: number;
  fuelEfficiencyKmPerLiter: number;
  annualMaintenance: number;
  annualInsurance: number;
  annualTaxesAndFees: number;
  resaleValue: number;
  oneTimeCosts: number;
};

export type OwnershipSharedInputs = {
  annualDistanceKm: number;
  petrolPricePerLiter: number;
  years: ComparisonYears;
};

export type OwnershipResult = {
  annualFuelCost: number;
  totalFuelCost: number;
  totalMaintenance: number;
  totalInsurance: number;
  totalTaxesAndFees: number;
  depreciation: number;
  oneTimeCosts: number;
  totalOwnershipCost: number;
  averageMonthlyCost: number;
  costPerKilometre: number;
  totalDistanceKm: number;
};

function assertFiniteInRange(label: string, value: number, maximum: number, allowZero = true) {
  if (!Number.isFinite(value) || value < 0 || (!allowZero && value === 0)) {
    throw new Error(`${label} must be ${allowZero ? "zero or a positive" : "a positive, non-zero"} finite number.`);
  }
  if (value > maximum) throw new Error(`${label} exceeds the supported planning range.`);
}

export function calculateOwnershipCost(vehicle: VehicleOwnershipInputs, shared: OwnershipSharedInputs): OwnershipResult {
  if (shared.years !== 3 && shared.years !== 5) throw new Error("Comparison duration must be three or five years.");
  assertFiniteInRange("Annual distance", shared.annualDistanceKm, OWNERSHIP_LIMITS.annualDistanceKm, false);
  assertFiniteInRange("Petrol price", shared.petrolPricePerLiter, OWNERSHIP_LIMITS.petrolPricePerLiter, false);
  assertFiniteInRange("Purchase price", vehicle.purchasePrice, OWNERSHIP_LIMITS.money, false);
  assertFiniteInRange("Fuel efficiency", vehicle.fuelEfficiencyKmPerLiter, OWNERSHIP_LIMITS.fuelEfficiencyKmPerLiter, false);
  assertFiniteInRange("Annual maintenance", vehicle.annualMaintenance, OWNERSHIP_LIMITS.money);
  assertFiniteInRange("Annual insurance", vehicle.annualInsurance, OWNERSHIP_LIMITS.money);
  assertFiniteInRange("Annual taxes and fees", vehicle.annualTaxesAndFees, OWNERSHIP_LIMITS.money);
  assertFiniteInRange("Expected resale value", vehicle.resaleValue, OWNERSHIP_LIMITS.money);
  assertFiniteInRange("One-time costs", vehicle.oneTimeCosts, OWNERSHIP_LIMITS.money);
  if (vehicle.resaleValue > vehicle.purchasePrice) throw new Error("Expected resale value cannot exceed the purchase price in this simplified model.");

  const annualFuelCost = (shared.annualDistanceKm / vehicle.fuelEfficiencyKmPerLiter) * shared.petrolPricePerLiter;
  const totalFuelCost = annualFuelCost * shared.years;
  const totalMaintenance = vehicle.annualMaintenance * shared.years;
  const totalInsurance = vehicle.annualInsurance * shared.years;
  const totalTaxesAndFees = vehicle.annualTaxesAndFees * shared.years;
  const depreciation = vehicle.purchasePrice - vehicle.resaleValue;
  const totalDistanceKm = shared.annualDistanceKm * shared.years;
  const totalOwnershipCost = depreciation + totalFuelCost + totalMaintenance + totalInsurance + totalTaxesAndFees + vehicle.oneTimeCosts;
  const result = {
    annualFuelCost,
    totalFuelCost,
    totalMaintenance,
    totalInsurance,
    totalTaxesAndFees,
    depreciation,
    oneTimeCosts: vehicle.oneTimeCosts,
    totalOwnershipCost,
    averageMonthlyCost: totalOwnershipCost / (shared.years * 12),
    costPerKilometre: totalOwnershipCost / totalDistanceKm,
    totalDistanceKm,
  };
  if (!Object.values(result).every(Number.isFinite)) throw new Error("The inputs produce a result that is too large to display.");
  return result;
}

export function compareOwnershipCosts(vehicleA: VehicleOwnershipInputs, vehicleB: VehicleOwnershipInputs, shared: OwnershipSharedInputs) {
  const a = calculateOwnershipCost(vehicleA, shared);
  const b = calculateOwnershipCost(vehicleB, shared);
  return { a, b, difference: Math.abs(a.totalOwnershipCost - b.totalOwnershipCost), lowerCost: a.totalOwnershipCost === b.totalOwnershipCost ? "tie" as const : a.totalOwnershipCost < b.totalOwnershipCost ? "a" as const : "b" as const };
}
