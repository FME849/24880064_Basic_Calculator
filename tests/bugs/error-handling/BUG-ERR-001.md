# [BUG][Error Handling] Build 1 không kiểm tra tính hợp lệ của số khi nhập ký tự không phải số

## Found by Test Case
TC-ERR-001, TC-ERR-002, TC-ERR-003, TC-SEC-002, TC-USA-002

## Requirement liên quan
FR-ERR-001

## Severity / Priority
Critical / P1

## Environment
- Browser: Chromium 131.0 (Headless / Playwright)
- OS: macOS Sonoma
- URL: https://testsheepnz.github.io/BasicCalculator.html
- Build: Build 1

## Steps to reproduce
1. Mở trang Basic Calculator
2. Chọn Build là "1"
3. Nhập "abc" vào ô First number
4. Nhập "5" vào ô Second number
5. Chọn Operation là "Add"
6. Bấm nút "Calculate"

## Expected result
Hiển thị thông báo lỗi "Number 1 is not a number" màu đỏ, ô Answer không hiển thị kết quả.

## Actual result
Không có thông báo lỗi nào xuất hiện, hệ thống tính toán ra kết quả "NaN".

## Evidence
- Test assertion failed: `expect(errorMsg).toContain("Number 1 is not a number")` -> Received empty string.
- Mã nguồn: `if(isNaN(num1) && isNumber && selectedBuild != 1)` bỏ qua hoàn toàn việc kiểm tra số hợp lệ trong Build 1.
