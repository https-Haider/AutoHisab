import { expect, test } from "@playwright/test";

test.describe("fuel calculator", () => {
  test("recalculates results and reports invalid input", async ({ page }) => {
    await page.goto("/fuel-cost-calculator-pakistan");

    await expect(page.getByRole("heading", { level: 1, name: "Fuel Cost Calculator Pakistan" })).toBeVisible();
    await expect(page.getByText("Rs 28,000", { exact: true })).toBeVisible();

    await page.getByLabel("Monthly distance").fill("600");
    await page.getByLabel("Fuel economy").fill("15");
    await page.getByLabel("Petrol price").fill("300");
    await expect(page.getByText("Rs 12,000", { exact: true })).toBeVisible();
    await expect(page.getByText("Rs 144,000", { exact: true })).toBeVisible();

    await page.getByLabel("Fuel economy").fill("0");
    await expect(page.getByText("Enter a positive, non-zero number.", { exact: true })).toBeVisible();
    await expect(page.getByText("Complete all three fields with valid numbers to see your estimate.")).toBeVisible();
  });
});

test.describe("ownership calculator", () => {
  test("compares, changes duration, validates, and resets", async ({ page }) => {
    await page.goto("/car-ownership-cost-calculator");

    await expect(page.getByRole("heading", { level: 1, name: "Car Ownership Cost Calculator" })).toBeVisible();
    await expect(page.getByRole("heading", { level: 2, name: "Estimated 5-year ownership cost" })).toBeVisible();
    await expect(page.getByText("Lower estimated cost")).toBeVisible();

    await page.getByRole("button", { name: "3 years" }).click();
    await expect(page.getByRole("heading", { level: 2, name: "Estimated 3-year ownership cost" })).toBeVisible();
    await expect(page.getByRole("button", { name: "3 years" })).toHaveAttribute("aria-pressed", "true");

    await page.getByLabel("Purchase price").first().fill("100");
    await page.getByLabel("Expected resale value").first().fill("200");
    await expect(page.getByRole("alert").filter({ hasText: "Resale value cannot exceed purchase price" })).toBeVisible();
    await expect(page.getByText("Complete every field with a valid value to see the comparison.")).toBeVisible();

    await page.getByRole("button", { name: "Reset example" }).click();
    await expect(page.getByLabel("Purchase price").first()).toHaveValue("5000000");
    await expect(page.getByRole("button", { name: "5 years" })).toHaveAttribute("aria-pressed", "true");
    await expect(page.getByText("Lower estimated cost")).toBeVisible();
  });
});
