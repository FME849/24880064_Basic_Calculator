# [BUG][Multiplication] Build 7 sử dụng answer thay vì Number 1 khiến phép nhân ban đầu luôn bằng 0

## Found by Test Case
TC-MUL-001, TC-MUL-003, TC-MUL-004, TC-MUL-005, TC-MUL-006

## Requirement liên quan
FR-CALC-003

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
3. Nhập "4" vào ô First number
4. Nhập "5" vào ô Second number
5. Chọn Operation là "Multiply"
6. Bấm nút "Calculate"

## Expected result
Ô Answer hiển thị kết quả là "20" (4 * 5 = 20).

## Actual result
Ô Answer hiển thị kết quả là "0" do num1 bị thay bằng answer rỗng (0 * 5 = 0).

## Evidence
- Test assertion failed: `expect(locator).toHaveValue("20")` -> Received: `"0"`.
