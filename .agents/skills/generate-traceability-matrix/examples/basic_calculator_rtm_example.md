# Ví dụ RTM: Basic Calculator

Đây là trích đoạn mẫu từ file `tests/traceability-matrix/traceability-matrix.md` của dự án Basic Calculator.

## Tóm tắt coverage (ví dụ)

- **Tổng số Requirements**: 13 (9 Functional + 4 Non-Functional)
- **Tổng số Test Cases**: 66
- **Tổng số lượt thực thi**: 594 (66 TCs x 9 builds)
- **Passed (Done)**: 436 (73.4%)
- **Failed (Open)**: 105 (17.7%)
- **Blocked**: 53 (8.9%)

### Bảng phân tích độ phủ theo Requirement (trích)

| Requirement ID | Số Test Cases | Số lần thực thi | Pass | Fail | Block | Tỷ lệ Pass |
|---|---|---|---|---|---|---|
| FR-CALC-001 | 8 | 72 | 47 | 17 | 8 | 65.3% |
| FR-CALC-002 | 6 | 54 | 36 | 12 | 6 | 66.7% |
| FR-ERR-001  | 7 | 63 | 45 | 11 | 7 | 71.4% |
| NFR-GUI-001 | 5 | 45 | 42 | 3  | 0 | 93.3% |

---

## Bảng truy vết (trích)

| No. | Requirement | Test case | Build | Result | Bug issue | Status |
|---|---|---|---|---|---|---|
| 1 | FR-CALC-001 | [TC-ADD-001](../test-cases/addition/TC-ADD-001.md) | Build-1 | Pass | - | Done |
| 2 | FR-CALC-001 | [TC-ADD-001](../test-cases/addition/TC-ADD-001.md) | Build-2 | Fail | [BUG-ADD-001](../bugs/addition/BUG-ADD-001.md) | Open |
| 3 | FR-CALC-001 | [TC-ADD-001](../test-cases/addition/TC-ADD-001.md) | Build-3 | Pass | - | Done |
| 4 | FR-CALC-001 | [TC-ADD-001](../test-cases/addition/TC-ADD-001.md) | Build-4 | Pass | - | Done |
| 5 | FR-CALC-001 | [TC-ADD-001](../test-cases/addition/TC-ADD-001.md) | Build-5 | Pass | - | Done |
| 6 | FR-CALC-001 | [TC-ADD-001](../test-cases/addition/TC-ADD-001.md) | Build-6 | Pass | - | Done |
| 7 | FR-CALC-001 | [TC-ADD-001](../test-cases/addition/TC-ADD-001.md) | Build-7 | Fail | [BUG-ADD-003](../bugs/addition/BUG-ADD-003.md) | Open |
| 8 | FR-CALC-001 | [TC-ADD-001](../test-cases/addition/TC-ADD-001.md) | Build-8 | Pass | - | Done |
| 9 | FR-CALC-001 | [TC-ADD-001](../test-cases/addition/TC-ADD-001.md) | Build-9 | Block | - | Blocked |
| 10 | FR-ERR-001 | [TC-ERR-001](../test-cases/error-handling/TC-ERR-001.md) | Build-1 | Fail | [BUG-ERR-001](../bugs/error-handling/BUG-ERR-001.md) | Open |
| 11 | FR-ERR-001 | [TC-ERR-001](../test-cases/error-handling/TC-ERR-001.md) | Build-2 | Pass | - | Done |

---

## Ghi chú về cấu trúc

Mỗi dòng trong bảng truy vết đại diện cho:
- **1 TC** chạy trên **1 Build** = 1 lần thực thi riêng biệt
- KHÔNG gộp nhiều builds vào 1 dòng
- Link trong cột "Test case" trỏ đến file TC cụ thể
- Link trong cột "Bug issue" trỏ đến file Bug report cụ thể
