# TC-ADD-006: Cộng số rất lớn

## Requirement ID
FR-CALC-001

## Module / Test type / Technique
Addition / Functional / Boundary Value Analysis

## Preconditions
- User đang ở trang Basic Calculator
- Build được chọn là "Prototype"

## Test data
| Field | Value |
|-------|-------|
| First number | 999999999 |
| Second number | 1 |
| Operation | Add |

## Test steps
1. Nhập "999999999" vào ô First number
2. Nhập "1" vào ô Second number
3. Chọn Operation là "Add"
4. Bấm nút "Calculate"

## Expected result
Ô Answer hiển thị kết quả là "1000000000".

## Status / Related bugs
Not Run / None
