# TC-CLR-004: Clear reset checkbox Integers only

## Requirement ID
FR-CLR-001, FR-CALC-006

## Module / Test type / Technique
Clear / Functional / Equivalence Partitioning

## Preconditions
- User đang ở trang Basic Calculator
- Lần lượt chọn từng Build để test: 1, 2, 3, 4, 5, 6, 7, 8, 9

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
5. Tick checkbox "Integers only" → Answer = 3
6. Bấm nút "Clear"

## Expected result
- Ô Answer được xóa trắng
- Checkbox "Integers only" tự động untick
- Lần tính toán tiếp theo không bị ảnh hưởng bởi Integers only

## Status / Related bugs
Not Run / None
