# TC-DIV-003: Chia cho 0

## Requirement ID
FR-CALC-004, FR-ERR-001

## Module / Test type / Technique
Division / Functional / Boundary Value Analysis

## Preconditions
- User đang ở trang Basic Calculator
- Lần lượt chọn từng Build để test: Prototype, 1, 2, 3, 4, 5, 6, 7, 8, 9

## Test data
| Field | Value |
|-------|-------|
| First number | 10 |
| Second number | 0 |
| Operation | Divide |

## Test steps
1. Nhập "10" vào ô First number
2. Nhập "0" vào ô Second number
3. Chọn Operation là "Divide"
4. Bấm nút "Calculate"

## Expected result
Hiển thị thông báo lỗi "Divide by zero error!" màu đỏ. Ô Answer không hiển thị kết quả.

## Status / Related bugs
Not Run / None
