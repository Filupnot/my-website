import { test, expect } from "@playwright/test";

test.describe("oh hell layout", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("round board matches game card width", async ({ page }) => {
    await page.goto("/games");

    const card = page.locator(".game-card").first();
    await expect(card).toBeVisible();
    const cardBox = await card.boundingBox();
    expect(cardBox).not.toBeNull();

    await page.goto("/games/oh-hell");
    const board = page.locator(".board");
    await expect(board).toBeVisible();
    const boardBox = await board.boundingBox();
    expect(boardBox).not.toBeNull();

    const widthDelta = Math.abs((cardBox?.width ?? 0) - (boardBox?.width ?? 0));
    expect(widthDelta).toBeLessThan(1);
  });

  test("row width stays stable after entering scores", async ({ page }) => {
    await page.goto("/games/oh-hell");

    await page.getByRole("button", { name: /Start rounds/i }).click();

    const row = page.locator(".player-score-row").first();
    await expect(row).toBeVisible();

    const before = await row.boundingBox();
    expect(before).not.toBeNull();

    await row.locator("input[type=number]").first().fill("3");
    await page.getByRole("button", { name: /Lock bids/i }).click();
    await row.locator("input[type=number]").nth(1).fill("3");

    const after = await row.boundingBox();
    expect(after).not.toBeNull();

    const delta = Math.abs((before?.width ?? 0) - (after?.width ?? 0));
    expect(delta).toBeLessThan(1);
  });
});
