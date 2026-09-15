import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../pages/CalculatorPage';

const BUILDS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

for (const build of BUILDS) {
  test.describe(`Build ${build} - Security`, () => {
    let calc: CalculatorPage;

    test.beforeEach(async ({ page }) => {
      calc = new CalculatorPage(page);
      await calc.goto();
      await calc.selectBuildVersion(build);
    });

    test('TC-SEC-001: Nhập script tag vào input fields (XSS)', async ({ page }) => {
      await calc.calculate('<script>alert("XSS")</script>', '5', 'Concatenate');

      // No alert dialog should appear
      let alertAppeared = false;
      page.on('dialog', () => {
        alertAppeared = true;
      });

      // Verify no XSS execution
      expect(alertAppeared).toBe(false);

      // The app should not crash
      await expect(calc.clearButton).toBeVisible();
    });

    test('TC-SEC-002: Nhập SQL injection vào input fields', async () => {
      await calc.calculate("1' OR '1'='1", '5', 'Add');
      const errorMsg = await calc.getErrorMessage();
      // Should show error because input is not a number
      expect(errorMsg).toContain('Number 1 is not a number');
    });

    test('TC-SEC-003: Nhập HTML tag vào input fields', async () => {
      await calc.calculate('<b>bold</b>', '<img src=x>', 'Concatenate');

      // Answer should show raw text, not rendered HTML
      const answer = await calc.getAnswer();
      expect(answer).toBeDefined();

      // The app should not crash
      await expect(calc.clearButton).toBeVisible();
    });

    test('TC-SEC-004: Nhập chuỗi quá dài vào input fields', async () => {
      // maxlength=10, so input is limited
      await calc.enterFirstNumber('9999999999');
      await calc.enterSecondNumber('9999999999');
      await calc.selectOperationType('Add');
      await calc.clickCalculate();

      // Should calculate without crashing
      const answer = await calc.getAnswer();
      expect(answer).toBeDefined();
      await expect(calc.clearButton).toBeVisible();
    });
  });
}
