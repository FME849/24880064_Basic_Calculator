# TC-DIV-004: Chia số 0 cho số khác 0

## Requirement ID
FR-CALC-004

## Module / Test type / Technique
Division / Functional / Boundary Value Analysis

## Preconditions
- User đang ở trang Basic Calculator
- Lần lượt chọn từng Build để test: 1, 2, 3, 4, 5, 6, 7, 8, 9

## Test data
| Field | Value |
|-------|-------|
| First number | 0 |
| Second number | 5 |
| Operation | Divide |

## Test steps
1. Nhập "0" vào ô First number
2. Nhập "5" vào ô Second number
3. Chọn Operation là "Divide"
4. Bấm nút "Calculate"

## Expected result
Ô Answer hiển thị kết quả là "0".

## Status / Related bugs
Not Run / None
