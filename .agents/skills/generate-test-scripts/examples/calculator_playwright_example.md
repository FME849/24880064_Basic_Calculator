# Ví dụ mẫu: Playwright Test Scripts cho Basic Calculator

Dưới đây là các đoạn code thực tế từ dự án Basic Calculator.

## 1. Page Object Model (`pages/CalculatorPage.ts`)

```typescript
import { type Page, type Locator } from '@playwright/test';

export class CalculatorPage {
  readonly page: Page;
  readonly selectBuild: Locator;
  readonly number1Field: Locator;
  readonly number2Field: Locator;
  readonly selectOperation: Locator;
  readonly calculateButton: Locator;
  readonly numberAnswerField: Locator;
  readonly integerSelect: Locator;
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
    this.clearButton = page.locator('#clearButton');
    this.errorMsgField = page.locator('#errorMsgField');
  }

  async goto() {
    await this.page.goto('https://testsheepnz.github.io/BasicCalculator.html');
  }

  async selectBuildVersion(build: string) {
    await this.selectBuild.selectOption(build);
  }

  async clickCalculate() {
    await this.calculateButton.click();
    try {
      await this.page.waitForFunction(() => {
        const calcForm = document.getElementById('calcForm');
        const errorMsg = document.getElementById('errorMsgField');
        return (!calcForm?.hidden) || (errorMsg?.textContent?.trim().length > 0);
      }, { timeout: 3000 });
    } catch {
      await this.page.waitForTimeout(1500);
    }
  }

  async calculate(num1: string, num2: string, operation: string) {
    await this.number1Field.fill(num1);
    await this.number2Field.fill(num2);
    const opMap: Record<string, string> = {
      'Add': '0', 'Subtract': '1', 'Multiply': '2', 'Divide': '3', 'Concatenate': '4'
    };
    await this.selectOperation.selectOption(opMap[operation] ?? operation);
    await this.clickCalculate();
  }
}
```

## 2. Spec file Data-Driven (`addition/addition.spec.ts`)

```typescript
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

    test('TC-ADD-005: Cộng hai số thập phân', async () => {
      await calc.calculate('1.5', '2.3', 'Add');
      await expect(calc.numberAnswerField).toHaveValue('3.8');
    });
  });
}
```
