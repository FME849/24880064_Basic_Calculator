# [BUG][Addition] Build 7 sử dụng kết quả trước đó (answer) thay vì Number 1 trong phép cộng

## Found by Test Case
TC-ADD-001, TC-ADD-002, TC-ADD-003, TC-ADD-004, TC-ADD-005, TC-ADD-006, TC-ADD-007, TC-ADD-008

## Requirement liên quan
FR-CALC-001

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
3. Nhập "5" vào ô First number
4. Nhập "3" vào ô Second number
5. Chọn Operation là "Add"
6. Bấm nút "Calculate"

## Expected result
Ô Answer hiển thị kết quả là "8" (5 + 3 = 8).

## Actual result
Ô Answer hiển thị kết quả là "3". Giá trị Number 1 (5) bị bỏ qua, hệ thống lấy giá trị answer trước đó (chuỗi rỗng "" tương đương 0) để cộng với 3, ra 3.

## Evidence
- Test assertion failed: `expect(locator).toHaveValue("8")` -> Received: `"3"`
- Mã nguồn trang web:
```javascript
if (selectedBuild == 7) {
  num1 = answer; // Ghi đè num1 bằng answer trước đó
}
```
