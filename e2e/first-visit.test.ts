import { test, expect } from "@playwright/test";

test("first-visit", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page.getByTestId("cta-watchlist-guide")).toBeVisible();
  await expect(page.getByTestId("copy-search-header")).toBeVisible();
  await expect(page.getByTestId("input-search-companies")).toBeVisible();
});
