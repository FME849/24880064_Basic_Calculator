import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../pages/CalculatorPage';

const BUILDS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

for (const build of BUILDS) {
  test.describe(`Build ${build} - Addition`, () => {
    let calc: CalculatorPage;

    test.beforeEach(async ({ page }) => {
      calc = new CalculatorPage(page);
      await calc.goto();
      await calc.selectBuildVersion(build);
    });

    test('TC-ADD-001: Cộng hai số nguyên dương', async () => {
      await calc.calculate('5', '3', 'Add');
      await expect(calc.numberAnswerField).toHaveValue('8');
    });

    test('TC-ADD-002: Cộng hai số nguyên âm', async () => {
      await calc.calculate('-5', '-3', 'Add');
      await expect(calc.numberAnswerField).toHaveValue('-8');
    });

    test('TC-ADD-003: Cộng số dương và số âm', async () => {
      await calc.calculate('10', '-3', 'Add');
      await expect(calc.numberAnswerField).toHaveValue('7');
    });

    test('TC-ADD-004: Cộng với số 0', async () => {
      await calc.calculate('7', '0', 'Add');
      await expect(calc.numberAnswerField).toHaveValue('7');
    });

    test('TC-ADD-005: Cộng hai số thập phân', async () => {
      await calc.calculate('1.5', '2.3', 'Add');
      await expect(calc.numberAnswerField).toHaveValue('3.8');
    });

    test('TC-ADD-006: Cộng số rất lớn', async () => {
      await calc.calculate('999999999', '1', 'Add');
      await expect(calc.numberAnswerField).toHaveValue('1000000000');
    });

    test('TC-ADD-007: Cộng số rất nhỏ (âm lớn)', async () => {
      await calc.calculate('-99999999', '-1', 'Add');
      await expect(calc.numberAnswerField).toHaveValue('-100000000');
    });

    test('TC-ADD-008: Cộng với kết quả Integers only', async () => {
      await calc.calculate('1.5', '2.7', 'Add');
      await calc.checkIntegersOnly();
      await expect(calc.numberAnswerField).toHaveValue('4');
    });
  });
}
