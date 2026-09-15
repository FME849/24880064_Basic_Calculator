import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../pages/CalculatorPage';

const BUILDS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

for (const build of BUILDS) {
  test.describe(`Build ${build} - Clear`, () => {
    let calc: CalculatorPage;

    test.beforeEach(async ({ page }) => {
      calc = new CalculatorPage(page);
      await calc.goto();
      await calc.selectBuildVersion(build);
    });

    test('TC-CLR-001: Clear sau khi tính toán thành công', async () => {
      await calc.calculate('5', '3', 'Add');
      await expect(calc.numberAnswerField).toHaveValue('8');
      await calc.clickClear();
      await expect(calc.numberAnswerField).toHaveValue('');
      await expect(calc.integerSelect).not.toBeChecked();
    });

    test('TC-CLR-002: Clear sau khi có lỗi', async () => {
      await calc.calculate('abc', '5', 'Add');
      const errorMsg = await calc.getErrorMessage();
      expect(errorMsg.length).toBeGreaterThan(0);
      await calc.clickClear();
      const errorAfterClear = await calc.getErrorMessage();
      expect(errorAfterClear.trim()).toBe('');
      await expect(calc.numberAnswerField).toHaveValue('');
    });

    test('TC-CLR-003: Clear khi chưa tính toán', async () => {
      await calc.clickClear();
      await expect(calc.numberAnswerField).toHaveValue('');
      await expect(calc.integerSelect).not.toBeChecked();
    });

    test('TC-CLR-004: Clear reset checkbox Integers only', async () => {
      await calc.calculate('10', '3', 'Divide');
      await calc.checkIntegersOnly();
      await expect(calc.numberAnswerField).toHaveValue('3');
      await calc.clickClear();
      await expect(calc.numberAnswerField).toHaveValue('');
      await expect(calc.integerSelect).not.toBeChecked();
    });
  });
}
