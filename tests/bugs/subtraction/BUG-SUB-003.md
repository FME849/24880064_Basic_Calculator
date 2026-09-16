# [BUG][Subtraction] Build 8 hoán đổi vị trí Number 1 và Number 2 dẫn đến kết quả phép trừ bị đổi dấu

## Found by Test Case
TC-SUB-001, TC-SUB-002, TC-SUB-003, TC-SUB-005, TC-SUB-006

## Requirement liên quan
FR-CALC-002

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
4. Nhập "3" vào ô Second number
5. Chọn Operation là "Subtract"
6. Bấm nút "Calculate"

## Expected result
Ô Answer hiển thị kết quả là "7" (10 - 3 = 7).

## Actual result
Ô Answer hiển thị kết quả là "-7" do hệ thống đảo hai số và tính 3 - 10 = -7.

## Evidence
- Test assertion failed: `expect(locator).toHaveValue("7")` -> Received: `"-7"`.
- Mã nguồn: `if (selectedBuild == 8) { var temp = num1; num1 = num2; num2 = temp; }`.
