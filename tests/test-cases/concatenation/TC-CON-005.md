# TC-CON-005: Integers only bị vô hiệu hóa khi Concatenate

## Requirement ID
FR-CALC-005, FR-CALC-006

## Module / Test type / Technique
Concatenation / Functional / Equivalence Partitioning

## Preconditions
- User đang ở trang Basic Calculator
- Build được chọn là "Prototype"

## Test data
| Field | Value |
|-------|-------|
| First number | 12 |
| Second number | 34 |
| Operation | Concatenate |

## Test steps
1. Nhập "12" vào ô First number
2. Nhập "34" vào ô Second number
3. Chọn Operation là "Concatenate"
4. Quan sát trạng thái checkbox "Integers only"
5. Thử tick checkbox "Integers only"
6. Bấm nút "Calculate"

## Expected result
Checkbox "Integers only" bị vô hiệu hóa (disabled) khi chọn phép Concatenate. Không thể tick checkbox. Kết quả hiển thị là "1234".

## Status / Related bugs
Not Run / None
