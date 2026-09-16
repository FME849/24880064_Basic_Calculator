# [BUG][Addition] Build 2 thực hiện phép nối chuỗi (Concatenate) thay vì phép cộng (Add)

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
- Build: Build 2

## Steps to reproduce
1. Mở trang Basic Calculator
2. Chọn Build là "2"
3. Nhập "5" vào ô First number
4. Nhập "3" vào ô Second number
5. Chọn Operation là "Add"
6. Bấm nút "Calculate"

## Expected result
Ô Answer hiển thị kết quả là "8" (5 + 3 = 8).

## Actual result
Ô Answer hiển thị kết quả là "53". Hệ thống thực hiện phép nối chuỗi thay vì phép cộng hai số.

## Evidence
- Test assertion failed: `expect(locator).toHaveValue("8")` -> Received: `"53"`
- Mã nguồn JavaScript của trang web:
```javascript
if (selectedBuild == 2) {
  if (selection == 0) {
    selection = 4; // Add (0) bị chuyển thành Concatenate (4)
    isNumber = false;
  }
}
```
