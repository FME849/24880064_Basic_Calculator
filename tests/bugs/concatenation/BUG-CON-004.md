# [BUG][Concatenation] Build 7 sử dụng answer thay vì Number 1 trong phép nối chuỗi

## Found by Test Case
TC-CON-001, TC-CON-002, TC-CON-003, TC-CON-004

## Requirement liên quan
FR-CALC-005

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
3. Nhập "12" vào ô First number
4. Nhập "34" vào ô Second number
5. Chọn Operation là "Concatenate"
6. Bấm nút "Calculate"

## Expected result
Ô Answer hiển thị "1234".

## Actual result
Ô Answer hiển thị "34" (do num1 bị thay bằng answer rỗng "" + "34" = "34").

## Evidence
- Test assertion failed: `expect(locator).toHaveValue("1234")` -> Received: `"34"`.
