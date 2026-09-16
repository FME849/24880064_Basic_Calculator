# [BUG][Multiplication] Build 4 tự động làm tròn kết quả phép nhân thành số nguyên

## Found by Test Case
TC-MUL-005

## Requirement liên quan
FR-CALC-003, FR-CALC-006

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
3. Nhập "2.5" vào ô First number
4. Nhập "4.2" vào ô Second number
5. Chọn Operation là "Multiply"
6. Bấm nút "Calculate"

## Expected result
Ô Answer hiển thị kết quả là "10.5" (2.5 * 4.2 = 10.5).

## Actual result
Ô Answer hiển thị kết quả là "10" do bị ép thành số nguyên.

## Evidence
- Test assertion failed: Expected ~10.5, Received "10".
