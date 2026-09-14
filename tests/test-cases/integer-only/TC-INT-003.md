# TC-INT-003: Tick Integers only với kết quả nguyên

## Requirement ID
FR-CALC-006

## Module / Test type / Technique
Integer Only / Functional / Equivalence Partitioning

## Preconditions
- User đang ở trang Basic Calculator
- Lần lượt chọn từng Build để test: 1, 2, 3, 4, 5, 6, 7, 8, 9

## Test data
| Field | Value |
|-------|-------|
| First number | 10 |
| Second number | 2 |
| Operation | Divide |
| Integers only | Checked |

## Test steps
1. Nhập "10" vào ô First number
2. Nhập "2" vào ô Second number
3. Chọn Operation là "Divide"
4. Bấm nút "Calculate"
5. Tick checkbox "Integers only"

## Expected result
Ô Answer hiển thị kết quả là "5" (không thay đổi vì kết quả đã là số nguyên).

## Status / Related bugs
Not Run / None
