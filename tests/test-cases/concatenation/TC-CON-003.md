# TC-CON-003: Nối chuỗi rỗng

## Requirement ID
FR-CALC-005

## Module / Test type / Technique
Concatenation / Functional / Boundary Value Analysis

## Preconditions
- User đang ở trang Basic Calculator
- Build được chọn là "Prototype"

## Test data
| Field | Value |
|-------|-------|
| First number | Hello |
| Second number | (để trống) |
| Operation | Concatenate |

## Test steps
1. Nhập "Hello" vào ô First number
2. Để trống ô Second number
3. Chọn Operation là "Concatenate"
4. Bấm nút "Calculate"

## Expected result
Ô Answer hiển thị kết quả là "Hello".

## Status / Related bugs
Not Run / None
