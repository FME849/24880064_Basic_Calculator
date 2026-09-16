# [BUG][Subtraction] Build 7 sử dụng answer thay vì Number 1 trong phép trừ dẫn đến kết quả sai

## Found by Test Case
TC-SUB-001, TC-SUB-002, TC-SUB-003, TC-SUB-004, TC-SUB-005, TC-SUB-006

## Requirement liên quan
FR-CALC-002

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
4. Nhập "3" vào ô Second number
5. Chọn Operation là "Subtract"
6. Bấm nút "Calculate"

## Expected result
Ô Answer hiển thị kết quả là "7" (10 - 3 = 7).

## Actual result
Ô Answer hiển thị kết quả là "-3" (do num1 bị thay thế bằng answer ban đầu là rỗng 0 - 3 = -3).

## Evidence
- Test assertion failed: `expect(locator).toHaveValue("7")` -> Received: `"-3"`.
