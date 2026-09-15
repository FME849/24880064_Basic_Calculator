import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../pages/CalculatorPage';

const BUILDS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

for (const build of BUILDS) {
  test.describe(`Build ${build} - Concatenation`, () => {
    let calc: CalculatorPage;

    test.beforeEach(async ({ page }) => {
      calc = new CalculatorPage(page);
      await calc.goto();
      await calc.selectBuildVersion(build);
    });

    test('TC-CON-001: Nối hai chuỗi số', async () => {
      await calc.calculate('12', '34', 'Concatenate');
      await expect(calc.numberAnswerField).toHaveValue('1234');
    });

    test('TC-CON-002: Nối chuỗi chữ', async () => {
      await calc.calculate('Hello', 'World', 'Concatenate');
      await expect(calc.numberAnswerField).toHaveValue('HelloWorld');
    });

    test('TC-CON-003: Nối chuỗi rỗng', async () => {
      await calc.enterFirstNumber('Hello');
      await calc.enterSecondNumber('');
      await calc.selectOperationType('Concatenate');
      await calc.clickCalculate();
      await expect(calc.numberAnswerField).toHaveValue('Hello');
    });

    test('TC-CON-004: Nối chuỗi có ký tự đặc biệt', async () => {
      await calc.calculate('@#$', '%^&', 'Concatenate');
      await expect(calc.numberAnswerField).toHaveValue('@#$%^&');
    });

    test('TC-CON-005: Integers only bị vô hiệu hóa khi Concatenate', async () => {
      await calc.selectOperationType('Concatenate');
      // Verify the Integers only checkbox is disabled when Concatenate is selected
      await expect(calc.integerSelect).toBeDisabled();
    });
  });
}
