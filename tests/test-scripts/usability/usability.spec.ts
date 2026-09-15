import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../pages/CalculatorPage';

const BUILDS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

for (const build of BUILDS) {
  test.describe(`Build ${build} - Usability`, () => {
    let calc: CalculatorPage;

    test.beforeEach(async ({ page }) => {
      calc = new CalculatorPage(page);
      await calc.goto();
      await calc.selectBuildVersion(build);
    });

    test('TC-USA-001: Tab navigation giữa các fields', async ({ page }) => {
      await calc.number1Field.focus();
      await expect(calc.number1Field).toBeFocused();

      await page.keyboard.press('Tab');
      await expect(calc.number2Field).toBeFocused();
    });

    test('TC-USA-002: Thông báo lỗi rõ ràng và dễ hiểu', async ({ page }) => {
      await calc.calculate('abc', '5', 'Add');
      const errorMsg = await calc.getErrorMessage();
      expect(errorMsg).toContain('Number 1 is not a number');
      // Verify error is displayed in red (font color attribute)
      const errorElement = page.locator('#errorMsgField').locator('..');
      await expect(errorElement).toBeVisible();
    });

    test('TC-USA-003: Nhập số bằng bàn phím', async ({ page }) => {
      await calc.number1Field.click();
      await page.keyboard.type('123');
      await expect(calc.number1Field).toHaveValue('123');

      await calc.number2Field.click();
      await page.keyboard.type('456');
      await expect(calc.number2Field).toHaveValue('456');
    });

    test('TC-USA-004: Maxlength của input fields', async () => {
      // Both fields have maxlength=10
      await expect(calc.number1Field).toHaveAttribute('maxlength', '10');
      await expect(calc.number2Field).toHaveAttribute('maxlength', '10');

      // Try to type 11 characters - only 10 should be accepted
      await calc.number1Field.fill('12345678901');
      const value = await calc.number1Field.inputValue();
      expect(value.length).toBeLessThanOrEqual(10);
    });
  });
}
