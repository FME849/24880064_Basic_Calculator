# [BUG][Division] Build 7 sử dụng answer thay vì Number 1 khiến phép chia ban đầu luôn bằng 0

## Found by Test Case
TC-DIV-001, TC-DIV-002, TC-DIV-005, TC-DIV-006, TC-DIV-007

## Requirement liên quan
FR-CALC-004

## Severity / Priority
Critical / P1

## Environment
- Browser: Chromium 131.0 (Headless / Playwright)
- OS: macOS Sonoma
- URL: https://testsheepnz.github.io/BasicCalculator.html
- Build: Build 7

## Steps to reproduce
1. Mở trang Basic Calculator
2. Chọn Build là "7"
3. Nhập "10" vào ô First number
4. Nhập "2" vào ô Second number
5. Chọn Operation là "Divide"
6. Bấm nút "Calculate"

## Expected result
Ô Answer hiển thị kết quả là "5" (10 / 2 = 5).

## Actual result
Ô Answer hiển thị kết quả là "0" do num1 bị thay bằng answer rỗng (0 / 2 = 0).

## Evidence
- Test assertion failed: `expect(locator).toHaveValue("5")` -> Received: `"0"`.
