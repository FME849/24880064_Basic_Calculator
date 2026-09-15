import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../pages/CalculatorPage';

const BUILDS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

for (const build of BUILDS) {
  test.describe(`Build ${build} - Error Handling`, () => {
    let calc: CalculatorPage;

    test.beforeEach(async ({ page }) => {
      calc = new CalculatorPage(page);
      await calc.goto();
      await calc.selectBuildVersion(build);
    });

    test('TC-ERR-001: Nhập chữ vào First number', async () => {
      await calc.calculate('abc', '5', 'Add');
      const errorMsg = await calc.getErrorMessage();
      expect(errorMsg).toContain('Number 1 is not a number');
    });

    test('TC-ERR-002: Nhập chữ vào Second number', async () => {
      await calc.calculate('5', 'xyz', 'Add');
      const errorMsg = await calc.getErrorMessage();
      expect(errorMsg).toContain('Number 2 is not a number');
    });

    test('TC-ERR-003: Nhập ký tự đặc biệt vào number fields', async () => {
      await calc.calculate('@#$', '5', 'Multiply');
      const errorMsg = await calc.getErrorMessage();
      expect(errorMsg).toContain('Number 1 is not a number');
    });

    test('TC-ERR-004: Để trống cả hai ô số', async () => {
      await calc.enterFirstNumber('');
      await calc.enterSecondNumber('');
      await calc.selectOperationType('Add');
      await calc.clickCalculate();
      // Empty string converts to 0 in JS: 0 + 0 = 0, or an error is shown
      const errorMsg = await calc.getErrorMessage();
      const answer = await calc.getAnswer();
      // Either shows error or calculates with 0
      expect(errorMsg.length > 0 || answer === '0').toBeTruthy();
    });

    test('TC-ERR-005: Để trống First number', async () => {
      await calc.enterFirstNumber('');
      await calc.enterSecondNumber('5');
      await calc.selectOperationType('Add');
      await calc.clickCalculate();
      const errorMsg = await calc.getErrorMessage();
      const answer = await calc.getAnswer();
      // Either shows error or calculates: 0 + 5 = 5
      expect(errorMsg.length > 0 || answer === '5').toBeTruthy();
    });

    test('TC-ERR-006: Để trống Second number', async () => {
      await calc.enterFirstNumber('5');
      await calc.enterSecondNumber('');
      await calc.selectOperationType('Add');
      await calc.clickCalculate();
      const errorMsg = await calc.getErrorMessage();
      const answer = await calc.getAnswer();
      // Either shows error or calculates: 5 + 0 = 5
      expect(errorMsg.length > 0 || answer === '5').toBeTruthy();
    });
  });
}
