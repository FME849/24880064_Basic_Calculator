---
name: generate-test-scripts
description: >-
  Skill để tự động phát sinh Playwright test scripts từ danh sách test cases đã thiết kế.
  Sử dụng skill này khi user yêu cầu viết script tự động hóa kiểm thử (automation test scripts),
  xây dựng Page Object Model (POM), cấu hình Playwright test, sinh spec files theo từng module,
  thực hiện data-driven testing (qua nhiều builds hoặc environments), và chạy xác thực scripts.
---

# Generate Test Scripts with Playwright

Skill này hướng dẫn quy trình phát sinh tự động các script kiểm thử Playwright (TypeScript) từ tài liệu đặc tả test cases có sẵn.

---

## Quy trình thực hiện

### Bước 1: Phân tích Test Cases & Ứng dụng mục tiêu

1. **Đọc danh sách test cases**:
   - Quét toàn bộ thư mục `tests/test-cases/` để nắm số lượng modules và từng test case file (`TC-[MODULE]-[NUMBER].md`).
   - Xác định: Input data, các bước thao tác (steps), điều kiện tiên quyết (preconditions), và kết quả mong đợi (expected results).
2. **Khảo sát giao diện & Source code của ứng dụng**:
   - Xác định selectors cho từng phần tử: ưu tiên `data-testid`, `#id`, `name`, role, hoặc CSS selector ổn định.
   - Phân tích cơ chế hoạt động: hành vi bất đồng bộ, AJAX, random timeout, lock/unlock UI, validation logic, thông báo lỗi.

---

### Bước 2: Thiết lập Hạ tầng Kiểm thử (Infrastructure)

Tạo thư mục `tests/test-scripts/` chứa 3 file nền tảng:

1. **`package.json`**:
   Khai báo dependency `@playwright/test` và các scripts chạy test (`test`, `test:headed`, `test:ui`, `test:report`).
2. **`playwright.config.ts`**:
   - `baseURL`: URL gốc của ứng dụng cần test.
   - `testDir`: Thư mục chứa spec files (`.`).
   - `timeout`: Thời gian tối đa cho 1 test (mặc định 30s).
   - `retries`: Đặt 0 khi cần phát hiện lỗi thực tế của ứng dụng (không retry để tránh che giấu bug).
   - `use`: Cấu hình browser (Chromium, Firefox, WebKit), chụp screenshot khi failure (`only-on-failure`), trace.
3. **`pages/CalculatorPage.ts` (Page Object Model - POM)**:
   - Gom toàn bộ locators và hành động người dùng vào một class duy nhất.
   - Khởi tạo các `Locator` trong `constructor`.
   - Viết các methods nghiệp vụ: `goto()`, nhập dữ liệu, click thao tác, lấy giá trị kết quả, lấy thông báo lỗi.
   - **Smart Wait**: Xây dựng phương thức chờ thông minh (ví dụ chờ form mở khóa hoặc xuất hiện thông báo lỗi) thay vì dùng hardcoded sleep cố định.

---

### Bước 3: Thiết kế Spec Files theo từng Module

1. **Cấu trúc thư mục**: Mirror cấu trúc của `tests/test-cases/`:
   ```text
   tests/test-scripts/
   ├── package.json
   ├── playwright.config.ts
   ├── pages/
   │   └── <App>Page.ts
   ├── <module-1>/
   │   └── <module-1>.spec.ts
   ├── <module-2>/
   │   └── <module-2>.spec.ts
   └── ...
   ```
2. **Quy tắc viết Spec File**:
   - Tên test mô tả rõ ID và tên ca kiểm thử: `test('TC-ADD-001: Cộng hai số nguyên dương', async () => { ... })`.
   - **Data-driven Testing**: Nếu bài toán yêu cầu kiểm thử qua nhiều bản build hoặc môi trường, sử dụng vòng lặp:
     ```typescript
     const BUILDS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
     for (const build of BUILDS) {
       test.describe(`Build ${build} - Module`, () => {
         test.beforeEach(async ({ page }) => {
           calc = new CalculatorPage(page);
           await calc.goto();
           await calc.selectBuildVersion(build);
         });
         // test cases...
       });
     }
     ```
   - Trường hợp ngoại lệ: Các bài kiểm tra chuyển đổi build hoặc tải trang toàn cục không cần lặp lại theo từng build.

---

### Bước 4: Chiến lược Xử lý Bất đồng bộ & Smart Wait

- Tuyệt đối hạn chế `page.waitForTimeout()` cứng trừ trường hợp fallback.
- Sử dụng `page.waitForFunction()` để chờ các trạng thái DOM động:
  ```typescript
  await this.page.waitForFunction(() => {
    const calcForm = document.getElementById('calcForm');
    const errorMsg = document.getElementById('errorMsgField');
    const formVisible = calcForm && !calcForm.hidden;
    const hasError = errorMsg && errorMsg.textContent?.trim().length > 0;
    return formVisible || hasError;
  }, { timeout: 3000 });
  ```
- Kiểm tra navigation chính xác: Tránh lỗi `page.goto('/')` khi `baseURL` chứa cả pathname. Đảm bảo hàm `goto()` điều hướng trực tiếp đến đúng URL trang web.

---

### Bước 5: Thực thi & Xác minh Scripts

1. Liệt kê danh sách tests để kiểm tra cú pháp và cấu trúc:
   ```bash
   npx playwright test --list
   ```
2. Chạy thử nghiệm một test case tiêu biểu để xác thực POM và cấu hình:
   ```bash
   npx playwright test addition/addition.spec.ts -g "TC-ADD-001"
   ```
3. Xác minh kết quả bắt lỗi (assertions):
   - Sử dụng `expect(locator).toHaveValue(...)` cho ô input.
   - Sử dụng `expect(locator).toContainText(...)` cho thông báo lỗi.
   - Sử dụng `toBeCloseTo()` đối với số thực có sai số làm tròn thập phân.

---

### Bước 6: Tối ưu hóa khi Tạo Số Lượng Lớn

- Khi có nhiều modules (> 5 files spec), sử dụng **subagents song song** để sinh code đồng thời theo từng nhóm module.
- Mỗi subagent nhận nhiệm vụ sinh 3-4 file spec hoàn chỉnh kèm code POM đã chuẩn hóa.
