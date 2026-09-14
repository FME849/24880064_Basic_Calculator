# TC-DIV-002: Chia hai số nguyên dương không chia hết

## Requirement ID
FR-CALC-004

## Module / Test type / Technique
Division / Functional / Equivalence Partitioning

## Preconditions
- User đang ở trang Basic Calculator
- Lần lượt chọn từng Build để test: Prototype, 1, 2, 3, 4, 5, 6, 7, 8, 9

## Test data
| Field | Value |
|-------|-------|
| First number | 10 |
| Second number | 3 |
| Operation | Divide |

## Test steps
1. Nhập "10" vào ô First number
2. Nhập "3" vào ô Second number
3. Chọn Operation là "Divide"
4. Bấm nút "Calculate"

## Expected result
Ô Answer hiển thị kết quả là "3.3333333333333335" (hoặc giá trị thập phân tương đương).

## Status / Related bugs
Not Run / None
