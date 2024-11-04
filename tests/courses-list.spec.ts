import { test, expect } from "@playwright/test";

test("create delete course list", async ({ page }) => {
  await page.goto("/");
  await page.getByPlaceholder("название...").click();
  await page.getByPlaceholder("название...").fill("test course");
  await page.getByPlaceholder("описание...").click();
  await page.getByPlaceholder("описание...").fill("test description");
  await page.getByRole("button", { name: "Добавить" }).click();
  await expect(
    page.getByText("test coursetest descriptionУдалить")
  ).toBeVisible();

  await page.getByRole("button", { name: "Удалить" }).click();

  await expect(
    page.getByText("test coursetest descriptionУдалить")
  ).not.toBeVisible();
});
