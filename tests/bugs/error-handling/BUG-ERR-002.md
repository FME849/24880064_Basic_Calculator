# [BUG][Error Handling] Build 7 không phát hiện lỗi khi Number 1 không phải là số

## Found by Test Case
TC-ERR-001, TC-ERR-003

## Requirement liên quan
FR-ERR-001

## Severity / Priority
Major / P2

## Environment
- Browser: Chromium 131.0 (Headless / Playwright)
- OS: macOS Sonoma
- URL: https://testsheepnz.github.io/BasicCalculator.html
- Build: Build 7

## Steps to reproduce
1. Mở trang Basic Calculator
2. Chọn Build là "7"
3. Nhập "abc" vào ô First number
4. Nhập "5" vào ô Second number
5. Chọn Operation là "Add"
6. Bấm nút "Calculate"

## Expected result
Hiển thị thông báo lỗi "Number 1 is not a number" màu đỏ.

## Actual result
Không hiển thị lỗi do biến `num1` đã bị ghi đè bằng giá trị `answer` trước đó (`""`). Do `isNaN("")` bằng false nên hệ thống không báo lỗi.

## Evidence
- Test assertion failed: `expect(errorMsg).toContain("Number 1 is not a number")` -> Received empty string.
