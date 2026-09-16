# [BUG][GUI] Build 9 làm biến mất và vô hiệu hóa trường Number 2 cùng nút Calculate

## Found by Test Case
TC-GUI-001, TC-GUI-005, TC-USA-001, TC-USA-003, TC-USA-004, và chặn (Block) 58 functional test cases

## Requirement liên quan
NFR-GUI-001

## Severity / Priority
Blocker / P1

## Environment
- Browser: Chromium 131.0 (Headless / Playwright)
- OS: macOS Sonoma
- URL: https://testsheepnz.github.io/BasicCalculator.html
- Build: Build 9

## Steps to reproduce
1. Mở trang Basic Calculator
2. Chọn Build là "9"
3. Quan sát giao diện

## Expected result
Trường "Second number" và nút "Calculate" hiển thị bình thường và có thể tương tác.

## Actual result
Trường Second number và nút Calculate bị ẩn hoàn toàn (`hidden = true`) và bị vô hiệu hóa (`disabled = true`). Người dùng không thể thực hiện bất kỳ phép tính nào.

## Evidence
- Test assertion failed: `#calculateButton` is hidden, `#number2Field` is hidden.
- Mã nguồn:
```javascript
if (selectedBuild == 9) {
  document.getElementById('number2Field').hidden = true;
  document.getElementById('number2Field').disabled = true;
  document.getElementById('calculateButton').hidden = true;
  document.getElementById('calculateButton').disabled = true;
}
```
