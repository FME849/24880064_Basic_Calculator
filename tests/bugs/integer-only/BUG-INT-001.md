# [BUG][Integer Only] Build 4 khóa cố định checkbox Integers only ở trạng thái checked và disabled

## Found by Test Case
TC-INT-002

## Requirement liên quan
FR-CALC-006

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
3. Quan sát checkbox "Integers only"
4. Thử bỏ tick (uncheck) checkbox

## Expected result
Người dùng có thể bật hoặc tắt checkbox "Integers only" theo nhu cầu.

## Actual result
Checkbox bị disabled và luôn ở trạng thái checked, người dùng không thể bỏ chọn để nhận kết quả số thập phân.

## Evidence
- Mã nguồn trang web:
```javascript
document.getElementById('integerSelect').disabled = true;
document.getElementById('integerSelect').checked = true;
```
