import { type Page, type Locator } from '@playwright/test';

/**
 * Page Object Model for the Basic Calculator application.
 * URL: https://testsheepnz.github.io/BasicCalculator.html
 */
export class CalculatorPage {
  readonly page: Page;
  readonly selectBuild: Locator;
  readonly number1Field: Locator;
  readonly number2Field: Locator;
  readonly selectOperation: Locator;
  readonly calculateButton: Locator;
  readonly numberAnswerField: Locator;
  readonly integerSelect: Locator;
  readonly intSelectionLabel: Locator;
  readonly clearButton: Locator;
  readonly errorMsgField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.selectBuild = page.locator('#selectBuild');
    this.number1Field = page.locator('#number1Field');
    this.number2Field = page.locator('#number2Field');
    this.selectOperation = page.locator('#selectOperationDropdown');
    this.calculateButton = page.locator('#calculateButton');
    this.numberAnswerField = page.locator('#numberAnswerField');
    this.integerSelect = page.locator('#integerSelect');
    this.intSelectionLabel = page.locator('#intSelectionLabel');
    this.clearButton = page.locator('#clearButton');
    this.errorMsgField = page.locator('#errorMsgField');
  }

  /** Navigate to the Basic Calculator page */
  async goto() {
    await this.page.goto('https://testsheepnz.github.io/BasicCalculator.html');
  }

  /** Select a build version from the Build dropdown */
  async selectBuildVersion(build: string) {
    await this.selectBuild.selectOption(build);
  }

  /** Enter a value into the First number field */
  async enterFirstNumber(value: string) {
    await this.number1Field.clear();
    await this.number1Field.fill(value);
  }

  /** Enter a value into the Second number field */
  async enterSecondNumber(value: string) {
    await this.number2Field.clear();
    await this.number2Field.fill(value);
  }

  /**
   * Select an operation from the Operation dropdown.
   * @param operation - One of: 'Add', 'Subtract', 'Multiply', 'Divide', 'Concatenate'
   */
  async selectOperationType(operation: string) {
    const operationMap: Record<string, string> = {
      'Add': '0',
      'Subtract': '1',
      'Multiply': '2',
      'Divide': '3',
      'Concatenate': '4',
    };
    const value = operationMap[operation];
    if (value !== undefined) {
      await this.selectOperation.selectOption(value);
    } else {
      await this.selectOperation.selectOption(operation);
    }
  }

  /**
   * Click the Calculate button and wait for the calculation to complete.
   * Waits until either the form unlocks (calcForm visible) or an error message appears.
   */
  async clickCalculate() {
    await this.calculateButton.click();
    try {
      await this.page.waitForFunction(() => {
        const calcForm = document.getElementById('calcForm') as HTMLElement | null;
        const errorMsg = document.getElementById('errorMsgField');
        const formVisible = calcForm && !calcForm.hidden;
        const hasError = errorMsg && errorMsg.textContent && errorMsg.textContent.trim().length > 0;
        return formVisible || hasError;
      }, { timeout: 3000 });
    } catch {
      // Fallback: wait briefly if neither condition is met
      await this.page.waitForTimeout(1500);
    }
  }

  /** Click the Clear button */
  async clickClear() {
    await this.clearButton.click();
  }

  /** Check the "Integers only" checkbox */
  async checkIntegersOnly() {
    await this.integerSelect.check();
  }

  /** Uncheck the "Integers only" checkbox */
  async uncheckIntegersOnly() {
    await this.integerSelect.uncheck();
  }

  /** Get the current value of the Answer field */
  async getAnswer(): Promise<string> {
    return await this.numberAnswerField.inputValue();
  }

  /** Get the current error message text */
  async getErrorMessage(): Promise<string> {
    return await this.errorMsgField.innerText();
  }

  /**
   * Convenience method: enter two numbers, select operation, and calculate.
   */
  async calculate(num1: string, num2: string, operation: string) {
    await this.enterFirstNumber(num1);
    await this.enterSecondNumber(num2);
    await this.selectOperationType(operation);
    await this.clickCalculate();
  }
}
