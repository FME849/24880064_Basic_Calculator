import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../pages/CalculatorPage';

test.describe('Build Selection', () => {
  let calc: CalculatorPage;

  test.beforeEach(async ({ page }) => {
    calc = new CalculatorPage(page);
    await calc.goto();
  });

  test('TC-BUILD-001: Chọn build Prototype', async () => {
    await calc.selectBuildVersion('0');
    await calc.calculate('2', '3', 'Add');
    await expect(calc.numberAnswerField).toHaveValue('5');
  });

  test('TC-BUILD-002: Chuyển đổi giữa các build', async () => {
    // Test build 1
    await calc.selectBuildVersion('1');
    await calc.calculate('5', '3', 'Add');
    const answer1 = await calc.getAnswer();

    // Navigate fresh and test build 2
    await calc.goto();
    await calc.selectBuildVersion('2');
    await calc.calculate('5', '3', 'Add');
    const answer2 = await calc.getAnswer();

    // Navigate fresh and test Prototype (should give correct answer)
    await calc.goto();
    await calc.selectBuildVersion('0');
    await calc.calculate('5', '3', 'Add');
    await expect(calc.numberAnswerField).toHaveValue('8');

    // Verify builds can be switched without errors
    expect(answer1).toBeDefined();
    expect(answer2).toBeDefined();
  });

  test('TC-BUILD-003: Build mặc định là Prototype', async () => {
    // On page load, the default build should be Prototype (value="0")
    await expect(calc.selectBuild).toHaveValue('0');
  });
});
