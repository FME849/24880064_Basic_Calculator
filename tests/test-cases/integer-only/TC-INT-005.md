# TC-INT-005: Integers only không ảnh hưởng input

## Requirement ID
FR-CALC-006

## Module / Test type / Technique
Integer Only / Functional / Equivalence Partitioning

## Preconditions
- User đang ở trang Basic Calculator
- Build được chọn là "Prototype"

## Test data
| Field | Value |
|-------|-------|
| First number | 2.5 |
| Second number | 3.5 |
| Operation | Add |
| Integers only | Checked |

## Test steps
1. Tick checkbox "Integers only" trước khi tính
2. Nhập "2.5" vào ô First number
3. Nhập "3.5" vào ô Second number
4. Chọn Operation là "Add"
5. Bấm nút "Calculate"

## Expected result
Ô Answer hiển thị kết quả là "6". Integers only chỉ ảnh hưởng hiển thị kết quả (Answer), không làm tròn input trước khi tính.

## Status / Related bugs
Not Run / None
