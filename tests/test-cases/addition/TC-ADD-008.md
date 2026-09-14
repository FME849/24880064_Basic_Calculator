# TC-ADD-008: Cộng với kết quả Integers only

## Requirement ID
FR-CALC-001, FR-CALC-006

## Module / Test type / Technique
Addition / Functional / Equivalence Partitioning

## Preconditions
- User đang ở trang Basic Calculator
- Lần lượt chọn từng Build để test: Prototype, 1, 2, 3, 4, 5, 6, 7, 8, 9

## Test data
| Field | Value |
|-------|-------|
| First number | 1.5 |
| Second number | 2.7 |
| Operation | Add |
| Integers only | Checked |

## Test steps
1. Nhập "1.5" vào ô First number
2. Nhập "2.7" vào ô Second number
3. Chọn Operation là "Add"
4. Bấm nút "Calculate"
5. Tick checkbox "Integers only"

## Expected result
Ô Answer hiển thị kết quả là "4" (làm tròn xuống từ 4.2).

## Status / Related bugs
Not Run / None
