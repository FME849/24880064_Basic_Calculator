# [BUG][Error Handling] Build 8 báo sai trường bị lỗi do hoán đổi Number 1 và Number 2

## Found by Test Case
TC-ERR-001, TC-ERR-002, TC-ERR-003, TC-SEC-002

## Requirement liên quan
FR-ERR-001

## Severity / Priority
Major / P2

## Environment
- Browser: Chromium 131.0 (Headless / Playwright)
- OS: macOS Sonoma
- URL: https://testsheepnz.github.io/BasicCalculator.html
- Build: Build 8

## Steps to reproduce
1. Mở trang Basic Calculator
2. Chọn Build là "8"
3. Nhập "abc" vào ô First number
4. Nhập "5" vào ô Second number
5. Chọn Operation là "Add"
6. Bấm nút "Calculate"

## Expected result
Hiển thị thông báo lỗi "Number 1 is not a number" màu đỏ.

## Actual result
Hiển thị thông báo lỗi "Number 2 is not a number" do hệ thống tráo đổi hai số trước khi kiểm tra tính hợp lệ.

## Evidence
- Test assertion failed: Expected "Number 1 is not a number", Received "Number 2 is not a number".
