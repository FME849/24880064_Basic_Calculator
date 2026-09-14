# TC-INT-001: Tick Integers only với kết quả thập phân

## Requirement ID
FR-CALC-006

## Module / Test type / Technique
Integer Only / Functional / Equivalence Partitioning

## Preconditions
- User đang ở trang Basic Calculator
- Lần lượt chọn từng Build để test: Prototype, 1, 2, 3, 4, 5, 6, 7, 8, 9

## Test data
| Field | Value |
|-------|-------|
| First number | 10 |
| Second number | 3 |
| Operation | Divide |
| Integers only | Checked |

## Test steps
1. Nhập "10" vào ô First number
2. Nhập "3" vào ô Second number
3. Chọn Operation là "Divide"
4. Bấm nút "Calculate"
5. Tick checkbox "Integers only"

## Expected result
Ô Answer hiển thị kết quả là "3" (parseInt từ 3.333...).

## Status / Related bugs
Not Run / None
