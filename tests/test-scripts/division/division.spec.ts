import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../pages/CalculatorPage';

const BUILDS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

for (const build of BUILDS) {
  test.describe(`Build ${build} - Division`, () => {
    let calc: CalculatorPage;

    test.beforeEach(async ({ page }) => {
      calc = new CalculatorPage(page);
      await calc.goto();
      await calc.selectBuildVersion(build);
    });

    test('TC-DIV-001: Chia hai số nguyên dương chia hết', async () => {
      await calc.calculate('10', '2', 'Divide');
      await expect(calc.numberAnswerField).toHaveValue('5');
    });

    test('TC-DIV-002: Chia hai số nguyên dương không chia hết', async () => {
      await calc.calculate('10', '3', 'Divide');
      const answer = await calc.getAnswer();
      expect(parseFloat(answer)).toBeCloseTo(10 / 3, 5);
    });

    test('TC-DIV-003: Chia cho 0', async () => {
      await calc.calculate('10', '0', 'Divide');
      const errorMsg = await calc.getErrorMessage();
      expect(errorMsg).toContain('Divide by zero error!');
    });

    test('TC-DIV-004: Chia số 0 cho số khác 0', async () => {
      await calc.calculate('0', '5', 'Divide');
      await expect(calc.numberAnswerField).toHaveValue('0');
    });

    test('TC-DIV-005: Chia số âm', async () => {
      await calc.calculate('-10', '2', 'Divide');
      await expect(calc.numberAnswerField).toHaveValue('-5');
    });

    test('TC-DIV-006: Chia hai số thập phân', async () => {
      await calc.calculate('7.5', '2.5', 'Divide');
      await expect(calc.numberAnswerField).toHaveValue('3');
    });

    test('TC-DIV-007: Chia cho 1', async () => {
      await calc.calculate('15', '1', 'Divide');
      await expect(calc.numberAnswerField).toHaveValue('15');
    });
  });
}
