import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../pages/CalculatorPage';

const BUILDS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

for (const build of BUILDS) {
  test.describe(`Build ${build} - Integer Only`, () => {
    let calc: CalculatorPage;

    test.beforeEach(async ({ page }) => {
      calc = new CalculatorPage(page);
      await calc.goto();
      await calc.selectBuildVersion(build);
    });

    test('TC-INT-001: Tick Integers only với kết quả thập phân', async () => {
      await calc.calculate('10', '3', 'Divide');
      await calc.checkIntegersOnly();
      await expect(calc.numberAnswerField).toHaveValue('3');
    });

    test('TC-INT-002: Untick Integers only sau khi đã tick', async () => {
      await calc.calculate('10', '3', 'Divide');
      await calc.checkIntegersOnly();
      await expect(calc.numberAnswerField).toHaveValue('3');
      await calc.uncheckIntegersOnly();
      const answer = await calc.getAnswer();
      expect(parseFloat(answer)).toBeCloseTo(10 / 3, 5);
    });

    test('TC-INT-003: Tick Integers only với kết quả nguyên', async () => {
      await calc.calculate('10', '2', 'Divide');
      await calc.checkIntegersOnly();
      await expect(calc.numberAnswerField).toHaveValue('5');
    });

    test('TC-INT-004: Tick Integers only với kết quả âm thập phân', async () => {
      await calc.calculate('-10', '3', 'Divide');
      await calc.checkIntegersOnly();
      await expect(calc.numberAnswerField).toHaveValue('-3');
    });

    test('TC-INT-005: Integers only không ảnh hưởng input', async () => {
      await calc.checkIntegersOnly();
      await calc.calculate('2.5', '3.5', 'Add');
      await expect(calc.numberAnswerField).toHaveValue('6');
    });
  });
}
