export type FuelInputs = { monthlyDistanceKm: number; kmPerLiter: number; pricePerLiter: number };
export type FuelResults = { monthlyLiters: number; monthlyCost: number; yearlyCost: number; costPerKm: number };
export function calculateFuelCosts({ monthlyDistanceKm, kmPerLiter, pricePerLiter }: FuelInputs): FuelResults {
  if (![monthlyDistanceKm, kmPerLiter, pricePerLiter].every(Number.isFinite)) throw new Error("All inputs must be finite numbers.");
  if (monthlyDistanceKm < 0 || pricePerLiter < 0 || kmPerLiter <= 0) throw new Error("Distance and price cannot be negative, and fuel economy must be greater than zero.");
  const monthlyLiters = monthlyDistanceKm / kmPerLiter;
  const monthlyCost = monthlyLiters * pricePerLiter;
  const results = { monthlyLiters, monthlyCost, yearlyCost: monthlyCost * 12, costPerKm: pricePerLiter / kmPerLiter };
  if (!Object.values(results).every(Number.isFinite)) throw new Error("The inputs produce a result that is too large to display.");
  return results;
}
export function parsePositiveNumber(value: string, allowZero = true): number | null { if (value.trim() === "") return null; const parsed = Number(value); return !Number.isFinite(parsed) || parsed < 0 || (!allowZero && parsed === 0) ? null : parsed; }
