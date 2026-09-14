# TC-CON-003: Nối chuỗi rỗng

## Requirement ID
FR-CALC-005

## Module / Test type / Technique
Concatenation / Functional / Boundary Value Analysis

## Preconditions
- User đang ở trang Basic Calculator
- Lần lượt chọn từng Build để test: 1, 2, 3, 4, 5, 6, 7, 8, 9

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
