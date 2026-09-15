import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../pages/CalculatorPage';

const BUILDS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

for (const build of BUILDS) {
  test.describe(`Build ${build} - Performance`, () => {
    let calc: CalculatorPage;

    test.beforeEach(async ({ page }) => {
      calc = new CalculatorPage(page);
      await calc.goto();
      await calc.selectBuildVersion(build);
    });

    test('TC-PERF-001: Thời gian phản hồi khi Calculate', async () => {
      await calc.enterFirstNumber('100');
      await calc.enterSecondNumber('200');
      await calc.selectOperationType('Add');

      const startTime = Date.now();
      await calc.clickCalculate();
      const endTime = Date.now();
      const responseTime = endTime - startTime;

      // Response time should be under 2 seconds
      expect(responseTime).toBeLessThan(2000);
      await expect(calc.numberAnswerField).toHaveValue('300');
    });

    test('TC-PERF-002: Tính toán liên tục nhiều lần', async () => {
      const operations = [
        { num1: '10', num2: '5', op: 'Add', expected: '15' },
        { num1: '10', num2: '5', op: 'Subtract', expected: '5' },
        { num1: '10', num2: '5', op: 'Multiply', expected: '50' },
        { num1: '10', num2: '5', op: 'Divide', expected: '2' },
      ];

      for (let i = 0; i < 5; i++) {
        for (const { num1, num2, op, expected } of operations) {
          await calc.calculate(num1, num2, op);
          await expect(calc.numberAnswerField).toHaveValue(expected);
        }
      }
    });
  });
}

// TC-PERF-003: Page load time (run once, not per build)
test('TC-PERF-003: Thời gian tải trang', async ({ page }) => {
  const startTime = Date.now();
  await page.goto('https://testsheepnz.github.io/BasicCalculator.html');
  await page.locator('#calculateButton').waitFor({ state: 'visible' });
  const loadTime = Date.now() - startTime;

  // Page should load within 3 seconds
  expect(loadTime).toBeLessThan(3000);

  // Verify no console errors
  const consoleErrors: string[] = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  // Reload to capture any console errors
  await page.reload();
  await page.locator('#calculateButton').waitFor({ state: 'visible' });
  expect(consoleErrors.length).toBe(0);
});
