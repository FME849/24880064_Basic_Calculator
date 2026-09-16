# [BUG][Concatenation] Build 3 không vô hiệu hóa checkbox Integers only khi chọn Concatenate

## Found by Test Case
TC-CON-005

## Requirement liên quan
FR-CALC-005, FR-CALC-006

## Severity / Priority
Minor / P3

## Environment
- Browser: Chromium 131.0 (Headless / Playwright)
- OS: macOS Sonoma
- URL: https://testsheepnz.github.io/BasicCalculator.html
- Build: Build 3

## Steps to reproduce
1. Mở trang Basic Calculator
2. Chọn Build là "3"
3. Chọn Operation là "Concatenate"
4. Quan sát trạng thái checkbox "Integers only"

## Expected result
Checkbox "Integers only" bị vô hiệu hóa (disabled) và ẩn đi.

## Actual result
Checkbox "Integers only" vẫn hiển thị và cho phép người dùng thao tác.

## Evidence
- Test assertion failed: `expect(calc.integerSelect).toBeDisabled()` failed.
