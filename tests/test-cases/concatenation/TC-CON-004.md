# TC-CON-004: Nối chuỗi có ký tự đặc biệt

## Requirement ID
FR-CALC-005

## Module / Test type / Technique
Concatenation / Functional / Equivalence Partitioning

## Preconditions
- User đang ở trang Basic Calculator
- Lần lượt chọn từng Build để test: Prototype, 1, 2, 3, 4, 5, 6, 7, 8, 9

## Test data
| Field | Value |
|-------|-------|
| First number | @#$ |
| Second number | %^& |
| Operation | Concatenate |

## Test steps
1. Nhập "@#$" vào ô First number
2. Nhập "%^&" vào ô Second number
3. Chọn Operation là "Concatenate"
4. Bấm nút "Calculate"

## Expected result
Ô Answer hiển thị kết quả là "@#$%^&".

## Status / Related bugs
Not Run / None
