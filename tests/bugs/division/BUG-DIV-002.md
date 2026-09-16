# [BUG][Division] Build 4 tự động làm tròn kết quả phép chia thành số nguyên

## Found by Test Case
TC-DIV-002

## Requirement liên quan
FR-CALC-004, FR-CALC-006

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
3. Nhập "10" vào ô First number
4. Nhập "3" vào ô Second number
5. Chọn Operation là "Divide"
6. Bấm nút "Calculate"

## Expected result
Ô Answer hiển thị kết quả là số thập phân "3.3333333333333335".

## Actual result
Ô Answer hiển thị kết quả là "3". Checkbox Integers only bị khóa bật khiến kết quả bị làm tròn nguyên.

## Evidence
- Test assertion failed: Expected ~3.33333, Received "3".
