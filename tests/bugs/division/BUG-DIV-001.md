# [BUG][Division] Build 6 không bắt lỗi chia cho 0, hiển thị kết quả Infinity

## Found by Test Case
TC-DIV-003

## Requirement liên quan
FR-CALC-004, FR-ERR-001

## Severity / Priority
Critical / P1

## Environment
- Browser: Chromium 131.0 (Headless / Playwright)
- OS: macOS Sonoma
- URL: https://testsheepnz.github.io/BasicCalculator.html
- Build: Build 6

## Steps to reproduce
1. Mở trang Basic Calculator
2. Chọn Build là "6"
3. Nhập "10" vào ô First number
4. Nhập "0" vào ô Second number
5. Chọn Operation là "Divide"
6. Bấm nút "Calculate"

## Expected result
Hiển thị thông báo lỗi "Divide by zero error!" màu đỏ, ô Answer không hiển thị kết quả.

## Actual result
Không có thông báo lỗi nào xuất hiện, ô Answer hiển thị kết quả "Infinity".

## Evidence
- Test assertion failed: `expect(errorMsg).toContain("Divide by zero error!")` -> Received empty string.
- Mã nguồn: `if(num2==0 && selectedBuild != 6 )` loại trừ Build 6 khỏi việc kiểm tra chia cho 0.
