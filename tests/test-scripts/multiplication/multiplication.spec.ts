import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../pages/CalculatorPage';

const BUILDS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

for (const build of BUILDS) {
  test.describe(`Build ${build} - Multiplication`, () => {
    let calc: CalculatorPage;

    test.beforeEach(async ({ page }) => {
      calc = new CalculatorPage(page);
      await calc.goto();
      await calc.selectBuildVersion(build);
    });

    test('TC-MUL-001: Nhân hai số nguyên dương', async () => {
      await calc.calculate('4', '5', 'Multiply');
      await expect(calc.numberAnswerField).toHaveValue('20');
    });

    test('TC-MUL-002: Nhân với số 0', async () => {
      await calc.calculate('7', '0', 'Multiply');
      await expect(calc.numberAnswerField).toHaveValue('0');
    });

    test('TC-MUL-003: Nhân hai số âm', async () => {
      await calc.calculate('-4', '-3', 'Multiply');
      await expect(calc.numberAnswerField).toHaveValue('12');
    });

    test('TC-MUL-004: Nhân số dương với số âm', async () => {
      await calc.calculate('6', '-2', 'Multiply');
      await expect(calc.numberAnswerField).toHaveValue('-12');
    });

    test('TC-MUL-005: Nhân hai số thập phân', async () => {
      await calc.calculate('2.5', '4.2', 'Multiply');
      const answer = await calc.getAnswer();
      expect(parseFloat(answer)).toBeCloseTo(10.5, 5);
    });

    test('TC-MUL-006: Nhân với số 1', async () => {
      await calc.calculate('9', '1', 'Multiply');
      await expect(calc.numberAnswerField).toHaveValue('9');
    });
  });
}
