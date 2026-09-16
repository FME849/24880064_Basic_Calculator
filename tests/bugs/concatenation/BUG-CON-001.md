# [BUG][Concatenation] Build 2 thực hiện phép cộng (Add) thay vì nối chuỗi (Concatenate)

## Found by Test Case
TC-CON-001, TC-CON-002, TC-CON-003, TC-CON-004, TC-CON-005, TC-SEC-001, TC-SEC-003

## Requirement liên quan
FR-CALC-005

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
3. Nhập "12" vào ô First number
4. Nhập "34" vào ô Second number
5. Chọn Operation là "Concatenate"
6. Bấm nút "Calculate"

## Expected result
Ô Answer hiển thị kết quả nối chuỗi là "1234".

## Actual result
Ô Answer hiển thị kết quả là "46" (thực hiện phép tính 12 + 34 = 46). Khi nhập chuỗi ký tự chữ thì bị báo lỗi "Number 1 is not a number".

## Evidence
- Test assertion failed: `expect(locator).toHaveValue("1234")` -> Received: `"46"`.
- Mã nguồn: Concatenate (4) bị đổi thành Add (0) trong Build 2.
