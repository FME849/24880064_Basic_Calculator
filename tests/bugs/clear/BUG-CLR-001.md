# [BUG][Clear] Build 5 vô hiệu hóa nút Clear, không thể xóa kết quả tính toán

## Found by Test Case
TC-CLR-001, TC-CLR-002, TC-CLR-003, TC-CLR-004

## Requirement liên quan
FR-CLR-001

## Severity / Priority
Major / P2

## Environment
- Browser: Chromium 131.0 (Headless / Playwright)
- OS: macOS Sonoma
- URL: https://testsheepnz.github.io/BasicCalculator.html
- Build: Build 5

## Steps to reproduce
1. Mở trang Basic Calculator
2. Chọn Build là "5"
3. Nhập số và bấm Calculate để hiển thị kết quả
4. Bấm nút "Clear"

## Expected result
Nút Clear có thể click được và xóa trắng kết quả trong ô Answer.

## Actual result
Nút Clear bị vô hiệu hóa (`disabled = true`), không thể click được.

## Evidence
- Mã nguồn: `if (selectedBuild == 5) { document.getElementById('clearButton').disabled = true; }`.
