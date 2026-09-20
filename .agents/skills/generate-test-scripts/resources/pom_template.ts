import { type Page, type Locator } from '@playwright/test';

/**
 * Page Object Model Template for Web Applications.
 * Đóng gói toàn bộ selectors và hành vi người dùng trên trang.
 */
export class BasePage {
  readonly page: Page;
  // Locators
  readonly inputField1: Locator;
  readonly inputField2: Locator;
  readonly submitButton: Locator;
  readonly resultField: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    // Khởi tạo locators bằng data-testid hoặc id
    this.inputField1 = page.locator('#field1');
    this.inputField2 = page.locator('#field2');
    this.submitButton = page.locator('#submitBtn');
    this.resultField = page.locator('#result');
    this.errorMessage = page.locator('#errorMsg');
  }

  /** Điều hướng đến trang */
  async goto(url: string) {
    await this.page.goto(url);
  }

  /** Nhập liệu và submit */
  async performAction(val1: string, val2: string) {
    await this.inputField1.clear();
    await this.inputField1.fill(val1);
    await this.inputField2.clear();
    await this.inputField2.fill(val2);
    await this.submitButton.click();
    await this.waitForResponse();
  }

  /** Chờ phản hồi thông minh (tránh wait cứng) */
  async waitForResponse() {
    await this.page.waitForFunction(() => {
      const res = document.getElementById('result');
      const err = document.getElementById('errorMsg');
      return (res && res.textContent?.trim().length) || (err && err.textContent?.trim().length);
    }, { timeout: 5000 });
  }

  /** Lấy kết quả hiển thị */
  async getResult(): Promise<string> {
    return await this.resultField.inputValue();
  }

  /** Lấy thông báo lỗi */
  async getErrorText(): Promise<string> {
    return await this.errorMessage.innerText();
  }
}
