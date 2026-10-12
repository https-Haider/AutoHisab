import { expect, test } from "@playwright/test";

const guides = [
  ["/guides/how-to-calculate-fuel-average", "How to calculate your car’s fuel average"],
  ["/guides/monthly-petrol-expense-pakistan", "How to estimate monthly petrol expense in Pakistan"],
  ["/guides/petrol-vs-hybrid-cost-pakistan", "Petrol vs hybrid: compare fuel cost fairly"],
  ["/guides/total-car-ownership-cost-pakistan", "How to compare total car ownership cost"],
] as const;

for (const [path, heading] of guides) {
  test(`guide renders with canonical and related navigation: ${path}`, async ({ page }) => {
    await page.goto(path);
    await expect(page.getByRole("heading", { level: 1, name: heading })).toBeVisible();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://autohisab.vercel.app${path}`);
    await expect(page.getByRole("navigation", { name: "Related guides" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Use the fuel cost calculator" })).toHaveAttribute("href", "/fuel-cost-calculator-pakistan");
  });
}

test("metadata endpoints expose every calculator and guide", async ({ request }) => {
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBeTruthy();
  const xml = await sitemap.text();
  for (const path of [
    "/fuel-cost-calculator-pakistan",
    "/car-ownership-cost-calculator",
    ...guides.map(([path]) => path),
  ]) expect(xml).toContain(`https://autohisab.vercel.app${path}`);

  const robots = await request.get("/robots.txt");
  expect(robots.ok()).toBeTruthy();
  await expect(robots.text()).resolves.toContain("Sitemap: https://autohisab.vercel.app/sitemap.xml");
});

test("mobile pages fit the viewport and retain primary navigation", async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.startsWith("mobile"), "Mobile-only layout assertion");

  for (const path of ["/", "/fuel-cost-calculator-pakistan", "/car-ownership-cost-calculator", ...guides.map(([guidePath]) => guidePath)]) {
    await page.goto(path);
    await expect(page.getByRole("navigation", { name: "Main navigation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Fuel cost", exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Compare cars", exact: true })).toBeVisible();

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow, `${path} should not create page-level horizontal overflow`).toBeLessThanOrEqual(1);
  }
});
