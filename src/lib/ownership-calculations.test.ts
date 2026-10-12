import assert from "node:assert/strict";
import test from "node:test";
import { calculateOwnershipCost, compareOwnershipCosts, type VehicleOwnershipInputs } from "./ownership-calculations.ts";

const vehicle: VehicleOwnershipInputs = { purchasePrice: 5_000_000, fuelEfficiencyKmPerLiter: 12, annualMaintenance: 120_000, annualInsurance: 100_000, annualTaxesAndFees: 25_000, resaleValue: 3_500_000, oneTimeCosts: 50_000 };

test("calculates every three-year ownership component consistently", () => {
  const result = calculateOwnershipCost(vehicle, { annualDistanceKm: 15_000, petrolPricePerLiter: 280, years: 3 });
  assert.equal(result.annualFuelCost, 350_000);
  assert.equal(result.totalFuelCost, 1_050_000);
  assert.equal(result.totalMaintenance, 360_000);
  assert.equal(result.totalInsurance, 300_000);
  assert.equal(result.totalTaxesAndFees, 75_000);
  assert.equal(result.depreciation, 1_500_000);
  assert.equal(result.totalOwnershipCost, 3_335_000);
  assert.equal(result.averageMonthlyCost, 3_335_000 / 36);
  assert.equal(result.costPerKilometre, 3_335_000 / 45_000);
});

test("scales recurring costs and distance across five years", () => {
  const result = calculateOwnershipCost(vehicle, { annualDistanceKm: 15_000, petrolPricePerLiter: 280, years: 5 });
  assert.equal(result.totalFuelCost, 1_750_000);
  assert.equal(result.totalMaintenance, 600_000);
  assert.equal(result.totalDistanceKm, 75_000);
  assert.equal(result.totalOwnershipCost, 4_525_000);
});

test("supports zero optional and annual expenses", () => {
  const result = calculateOwnershipCost({ ...vehicle, annualMaintenance: 0, annualInsurance: 0, annualTaxesAndFees: 0, oneTimeCosts: 0 }, { annualDistanceKm: 1, petrolPricePerLiter: 1, years: 3 });
  assert.equal(result.oneTimeCosts, 0);
  assert.equal(result.totalOwnershipCost, 1_500_000.25);
});

test("compares vehicles and reports the absolute difference", () => {
  const comparison = compareOwnershipCosts(vehicle, { ...vehicle, fuelEfficiencyKmPerLiter: 15 }, { annualDistanceKm: 15_000, petrolPricePerLiter: 280, years: 3 });
  assert.equal(comparison.lowerCost, "b");
  assert.equal(comparison.difference, 210_000);
});

test("reports equal estimates as a tie", () => {
  const comparison = compareOwnershipCosts(vehicle, vehicle, { annualDistanceKm: 15_000, petrolPricePerLiter: 280, years: 3 });
  assert.equal(comparison.lowerCost, "tie");
  assert.equal(comparison.difference, 0);
});

test("rejects invalid inputs and unreasonable assumptions", () => {
  const shared = { annualDistanceKm: 15_000, petrolPricePerLiter: 280, years: 3 as const };
  assert.throws(() => calculateOwnershipCost({ ...vehicle, fuelEfficiencyKmPerLiter: 0 }, shared));
  assert.throws(() => calculateOwnershipCost({ ...vehicle, purchasePrice: -1 }, shared));
  assert.throws(() => calculateOwnershipCost({ ...vehicle, resaleValue: vehicle.purchasePrice + 1 }, shared));
  assert.throws(() => calculateOwnershipCost(vehicle, { ...shared, annualDistanceKm: 0 }));
  assert.throws(() => calculateOwnershipCost(vehicle, { ...shared, petrolPricePerLiter: Number.NaN }));
  assert.throws(() => calculateOwnershipCost(vehicle, { ...shared, years: 4 as 3 }));
  assert.throws(() => calculateOwnershipCost(vehicle, { ...shared, annualDistanceKm: 200_001 }));
});

test("preserves mathematical consistency with decimal inputs", () => {
  const result = calculateOwnershipCost({ ...vehicle, fuelEfficiencyKmPerLiter: 13.7, oneTimeCosts: 0 }, { annualDistanceKm: 12_345.6, petrolPricePerLiter: 281.34, years: 5 });
  assert.ok(Math.abs(result.totalFuelCost - result.annualFuelCost * 5) < 1e-9);
  assert.ok(Math.abs(result.averageMonthlyCost * 60 - result.totalOwnershipCost) < 1e-8);
  assert.ok(Math.abs(result.costPerKilometre * result.totalDistanceKm - result.totalOwnershipCost) < 1e-8);
});
