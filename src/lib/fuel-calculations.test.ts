import assert from "node:assert/strict";
import test from "node:test";
import { calculateFuelCosts, parsePositiveNumber } from "./fuel-calculations.ts";
test("calculates the example fuel costs", () => { assert.deepEqual(calculateFuelCosts({ monthlyDistanceKm: 1200, kmPerLiter: 12, pricePerLiter: 280 }), { monthlyLiters: 100, monthlyCost: 28000, yearlyCost: 336000, costPerKm: 280 / 12 }); });
test("supports decimals and zero distance", () => { const result = calculateFuelCosts({ monthlyDistanceKm: 0, kmPerLiter: 13.5, pricePerLiter: 279.75 }); assert.equal(result.monthlyCost, 0); assert.equal(result.yearlyCost, 0); assert.equal(result.costPerKm, 279.75 / 13.5); });
test("rejects zero economy, negatives, and non-finite inputs", () => { assert.throws(() => calculateFuelCosts({ monthlyDistanceKm: 100, kmPerLiter: 0, pricePerLiter: 280 })); assert.throws(() => calculateFuelCosts({ monthlyDistanceKm: -1, kmPerLiter: 10, pricePerLiter: 280 })); assert.throws(() => calculateFuelCosts({ monthlyDistanceKm: 1, kmPerLiter: 10, pricePerLiter: Number.NaN })); });
test("parses valid values and rejects blank or invalid values", () => { assert.equal(parsePositiveNumber("12.5"), 12.5); assert.equal(parsePositiveNumber(""), null); assert.equal(parsePositiveNumber("-1"), null); assert.equal(parsePositiveNumber("0", false), null); assert.equal(parsePositiveNumber("0", true), 0); });
