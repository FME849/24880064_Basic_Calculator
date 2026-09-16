# [BUG][Subtraction] Build 4 tự động làm tròn kết quả phép trừ thành số nguyên

## Found by Test Case
TC-SUB-005

## Requirement liên quan
FR-CALC-002, FR-CALC-006

## Severity / Priority
Major / P2

## Environment
- Browser: Chromium 131.0 (Headless / Playwright)
- OS: macOS Sonoma
- URL: https://testsheepnz.github.io/BasicCalculator.html
- Build: Build 4

## Steps to reproduce
1. Mở trang Basic Calculator
2. Chọn Build là "4"
3. Nhập "5.5" vào ô First number
4. Nhập "2.3" vào ô Second number
5. Chọn Operation là "Subtract"
6. Bấm nút "Calculate"

## Expected result
Ô Answer hiển thị kết quả là "3.2" (5.5 - 2.3 = 3.2).

## Actual result
Ô Answer hiển thị kết quả là "3" do bị ép kiểu số nguyên qua `parseInt(answer)`.

## Evidence
- Test assertion failed: Expected ~3.2, Received "3". Checkbox Integers only bị locked.
