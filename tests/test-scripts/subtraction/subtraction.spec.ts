import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../pages/CalculatorPage';

const BUILDS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

for (const build of BUILDS) {
  test.describe(`Build ${build} - Subtraction`, () => {
    let calc: CalculatorPage;

    test.beforeEach(async ({ page }) => {
      calc = new CalculatorPage(page);
      await calc.goto();
      await calc.selectBuildVersion(build);
    });

    test('TC-SUB-001: Trừ hai số nguyên dương (kết quả dương)', async () => {
      await calc.calculate('10', '3', 'Subtract');
      await expect(calc.numberAnswerField).toHaveValue('7');
    });

    test('TC-SUB-002: Trừ hai số nguyên dương (kết quả âm)', async () => {
      await calc.calculate('3', '10', 'Subtract');
      await expect(calc.numberAnswerField).toHaveValue('-7');
    });

    test('TC-SUB-003: Trừ cho số 0', async () => {
      await calc.calculate('5', '0', 'Subtract');
      await expect(calc.numberAnswerField).toHaveValue('5');
    });

    test('TC-SUB-004: Trừ hai số bằng nhau', async () => {
      await calc.calculate('8', '8', 'Subtract');
      await expect(calc.numberAnswerField).toHaveValue('0');
    });

    test('TC-SUB-005: Trừ số thập phân', async () => {
      await calc.calculate('5.5', '2.3', 'Subtract');
      const answer = await calc.getAnswer();
      expect(parseFloat(answer)).toBeCloseTo(3.2, 5);
    });

    test('TC-SUB-006: Trừ số âm', async () => {
      await calc.calculate('5', '-3', 'Subtract');
      await expect(calc.numberAnswerField).toHaveValue('8');
    });
  });
}
