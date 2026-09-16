# [BUG][Addition] Build 4 tự động làm tròn kết quả phép cộng thành số nguyên

## Found by Test Case
TC-ADD-005

## Requirement liên quan
FR-CALC-001, FR-CALC-006

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
3. Nhập "1.5" vào ô First number
4. Nhập "2.3" vào ô Second number
5. Chọn Operation là "Add"
6. Bấm nút "Calculate"

## Expected result
Ô Answer hiển thị kết quả là "3.8" (1.5 + 2.3 = 3.8).

## Actual result
Ô Answer hiển thị kết quả là "3". Hệ thống tự động làm tròn về số nguyên do checkbox "Integers only" bị khóa cố định ở trạng thái checked.

## Evidence
- Test assertion failed: `expect(locator).toHaveValue("3.8")` -> Received: `"3"`
- Checkbox `#integerSelect` bị disabled và checked vĩnh viễn trong Build 4.
