# [BUG][Division] Build 8 hoán đổi vị trí Number 1 và Number 2 trong phép chia

## Found by Test Case
TC-DIV-001, TC-DIV-002, TC-DIV-003, TC-DIV-004, TC-DIV-005, TC-DIV-006, TC-DIV-007

## Requirement liên quan
FR-CALC-004, FR-ERR-001

## Severity / Priority
Critical / P1

## Environment
- Browser: Chromium 131.0 (Headless / Playwright)
- OS: macOS Sonoma
- URL: https://testsheepnz.github.io/BasicCalculator.html
- Build: Build 8

## Steps to reproduce
1. Mở trang Basic Calculator
2. Chọn Build là "8"
3. Nhập "10" vào ô First number
4. Nhập "2" vào ô Second number
5. Chọn Operation là "Divide"
6. Bấm nút "Calculate"

## Expected result
Ô Answer hiển thị kết quả là "5" (10 / 2 = 5).

## Actual result
Ô Answer hiển thị kết quả là "0.2" do tính 2 / 10 = 0.2. Ngoài ra, khi chia 10 / 0 thì hệ thống tính 0 / 10 = 0 và không phát hiện lỗi chia cho 0.

## Evidence
- Test assertion failed: `expect(locator).toHaveValue("5")` -> Received: `"0.2"`.
