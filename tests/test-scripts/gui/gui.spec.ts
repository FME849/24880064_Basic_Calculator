import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../pages/CalculatorPage';

const BUILDS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

for (const build of BUILDS) {
  test.describe(`Build ${build} - GUI`, () => {
    let calc: CalculatorPage;

    test.beforeEach(async ({ page }) => {
      calc = new CalculatorPage(page);
      await calc.goto();
      await calc.selectBuildVersion(build);
    });

    test('TC-GUI-001: Hiển thị đầy đủ các thành phần giao diện', async () => {
      await expect(calc.selectBuild).toBeVisible();
      await expect(calc.number1Field).toBeVisible();
      await expect(calc.number2Field).toBeVisible();
      await expect(calc.selectOperation).toBeVisible();
      await expect(calc.calculateButton).toBeVisible();
      await expect(calc.numberAnswerField).toBeVisible();
      await expect(calc.integerSelect).toBeVisible();
      await expect(calc.clearButton).toBeVisible();
    });

    test('TC-GUI-002: Label hiển thị đúng', async ({ page }) => {
      await expect(page.locator('label:has-text("First number")')).toBeVisible();
      await expect(page.locator('label:has-text("Second number")')).toBeVisible();
      await expect(page.locator('label:has-text("Operation")')).toBeVisible();
      await expect(page.locator('label:has-text("Answer")')).toBeVisible();
      await expect(page.locator('label:has-text("Integers only")')).toBeVisible();
      await expect(page.locator('label:has-text("Build")')).toBeVisible();
    });

    test('TC-GUI-003: Answer field là read-only', async () => {
      await expect(calc.numberAnswerField).toHaveAttribute('readonly', '');
    });

    test('TC-GUI-004: Dropdown Operation hiển thị đủ 5 phép toán', async () => {
      const options = calc.selectOperation.locator('option');
      await expect(options).toHaveCount(5);
      await expect(options.nth(0)).toHaveText('Add');
      await expect(options.nth(1)).toHaveText('Subtract');
      await expect(options.nth(2)).toHaveText('Multiply');
      await expect(options.nth(3)).toHaveText('Divide');
      await expect(options.nth(4)).toHaveText('Concatenate');
    });

    test('TC-GUI-005: Responsive trên các kích thước màn hình', async ({ page }) => {
      // Desktop
      await page.setViewportSize({ width: 1920, height: 1080 });
      await expect(calc.calculateButton).toBeVisible();
      await expect(calc.number1Field).toBeVisible();

      // Tablet
      await page.setViewportSize({ width: 768, height: 1024 });
      await expect(calc.calculateButton).toBeVisible();
      await expect(calc.number1Field).toBeVisible();

      // Mobile
      await page.setViewportSize({ width: 375, height: 667 });
      await expect(calc.calculateButton).toBeVisible();
      await expect(calc.number1Field).toBeVisible();
    });
  });
}
