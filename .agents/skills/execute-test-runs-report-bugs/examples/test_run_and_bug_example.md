# Ví dụ mẫu: Test Run & Bug Report từ Basic Calculator

## 1. Ví dụ Bug Report: `BUG-ERR-001.md`

```markdown
# Title: [BUG][Error Handling] Build 1 không kiểm tra tính hợp lệ của số khi nhập ký tự không phải số

## Found by Test Case
TC-ERR-001, TC-ERR-002, TC-ERR-003, TC-SEC-002, TC-USA-002

## Requirement liên quan
FR-ERR-001

## Severity / Priority
Critical / P1

## Environment
- Browser: Chromium 131.0 (Headless / Playwright)
- OS: macOS Sonoma
- URL: https://testsheepnz.github.io/BasicCalculator.html
- Build: Build 1

## Steps to reproduce
1. Mở trang Basic Calculator
2. Chọn Build là "1"
3. Nhập "abc" vào ô First number
4. Nhập "5" vào ô Second number
5. Chọn Operation là "Add"
6. Bấm nút "Calculate"

## Expected result
Hiển thị thông báo lỗi "Number 1 is not a number" màu đỏ, ô Answer không hiển thị kết quả.

## Actual result
Không có thông báo lỗi nào xuất hiện, hệ thống tính toán ra kết quả "NaN".

## Evidence
- Test assertion failed: expect(errorMsg).toContain("Number 1 is not a number") -> Received empty string.
- Mã nguồn: `if(isNaN(num1) && isNumber && selectedBuild != 1)` bỏ qua hoàn toàn việc kiểm tra số hợp lệ trong Build 1.
```

## 2. Ví dụ Dòng Test Case trong Test Run: `TR-1-001.md`

| No. | Test case ID | Module | Tester | Result | Related Bug | Note |
|---|---|---|---|---|---|---|
| 01 | [TC-ADD-001](../test-cases/addition/TC-ADD-001.md) | Addition | Playwright Automation | Pass | - | Kết quả đúng 8 |
| 28 | [TC-ERR-001](../test-cases/error-handling/TC-ERR-001.md) | Error Handling | Playwright Automation | Fail | [BUG-ERR-001](../bugs/error-handling/BUG-ERR-001.md) | Không báo lỗi "Number 1 is not a number", tính ra NaN |
```
