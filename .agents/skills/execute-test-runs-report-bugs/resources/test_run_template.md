# Test Run Template

Mỗi file test run được lưu tại `tests/test-runs/TR-[Build]-[Number].md` và tuân theo template sau:

```markdown
# Test Run TR-[Build]-[Number] - Build [Build]

## 1. Overview

| Thông tin | Chi tiết |
|---|---|
| **Test Run ID** | TR-[Build]-[Number] |
| **Build** | Build [Build] |
| **Tester** | [Tester Name / Playwright Automation] |
| **Date** | YYYY-MM-DD |
| **Environment** | - Browser: [Browser & Version]<br>- OS: [OS]<br>- URL: [App URL]<br>- Framework: Playwright Test |
| **Execution Summary** | **Total**: X \| **Passed**: P \| **Failed**: F \| **Blocked**: B \| **Not Run**: N<br>**Pass Rate**: XX.XX% |

## 2. Execution Summary

- **Tổng số test cases**: X
- **Passed**: P (XX.XX%)
- **Failed**: F (XX.XX%)
- **Blocked**: B (XX.XX%)
- **Not Run**: N (XX.XX%)

### Danh sách Bugs phát hiện trên Build [Build]

| Bug ID | Mức độ nghiêm trọng | Mô tả lỗi | Test Case liên quan |
|---|---|---|---|
| [BUG-XXX-001](../bugs/<module>/BUG-XXX-001.md) | [Severity / Priority] | [Mô tả ngắn gọn] | [Danh sách TC IDs] |

## 3. Test Results

| No. | Test case ID | Module | Tester | Result | Related Bug | Note |
|---|---|---|---|---|---|---|
| 01 | [TC-XXX-001](../test-cases/<module>/TC-XXX-001.md) | Module Name | Playwright Automation | Pass | - | - |
| 02 | [TC-XXX-002](../test-cases/<module>/TC-XXX-002.md) | Module Name | Playwright Automation | Fail | [BUG-XXX-001](../bugs/<module>/BUG-XXX-001.md) | [Mô tả nguyên nhân Fail] |
| 03 | [TC-XXX-003](../test-cases/<module>/TC-XXX-003.md) | Module Name | Playwright Automation | Block | [BUG-YYY-001](../bugs/<module>/BUG-YYY-001.md) | [Lý do bị chặn thực thi] |
| 04 | [TC-XXX-004](../test-cases/<module>/TC-XXX-004.md) | Module Name | Playwright Automation | Not Run | - | Chưa thực thi trong đợt này |
```
