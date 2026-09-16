# [BUG][Concatenation] Build 8 hoán đổi vị trí Number 1 và Number 2 trong phép nối chuỗi

## Found by Test Case
TC-CON-001, TC-CON-002, TC-CON-004

## Requirement liên quan
FR-CALC-005

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
3. Nhập "12" vào ô First number
4. Nhập "34" vào ô Second number
5. Chọn Operation là "Concatenate"
6. Bấm nút "Calculate"

## Expected result
Ô Answer hiển thị "1234".

## Actual result
Ô Answer hiển thị "3412" do chuỗi thứ hai bị ghép trước chuỗi thứ nhất.

## Evidence
- Test assertion failed: `expect(locator).toHaveValue("1234")` -> Received: `"3412"`.
