# [BUG][Concatenation] Build 3 luôn ép kiểm tra giá trị số đối với phép nối chuỗi

## Found by Test Case
TC-CON-002, TC-CON-003, TC-CON-004, TC-SEC-001, TC-SEC-003

## Requirement liên quan
FR-CALC-005

## Severity / Priority
Major / P1

## Environment
- Browser: Chromium 131.0 (Headless / Playwright)
- OS: macOS Sonoma
- URL: https://testsheepnz.github.io/BasicCalculator.html
- Build: Build 3

## Steps to reproduce
1. Mở trang Basic Calculator
2. Chọn Build là "3"
3. Nhập "Hello" vào ô First number
4. Nhập "World" vào ô Second number
5. Chọn Operation là "Concatenate"
6. Bấm nút "Calculate"

## Expected result
Ô Answer hiển thị kết quả nối chuỗi "HelloWorld", không có lỗi xảy ra.

## Actual result
Hiển thị thông báo lỗi màu đỏ "Number 1 is not a number". Hệ thống không cho phép nối chuỗi chứa ký tự chữ.

## Evidence
- Test assertion failed: Expected "HelloWorld", Received error message "Number 1 is not a number".
- Mã nguồn:
```javascript
if (selectedBuild != 3) {
  isNumber = (selection != 4);
} else {
  isNumber = true; // Build 3 luôn ép isNumber = true
}
```
