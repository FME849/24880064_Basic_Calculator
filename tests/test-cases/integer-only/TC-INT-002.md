# TC-INT-002: Untick Integers only sau khi đã tick

## Requirement ID
FR-CALC-006

## Module / Test type / Technique
Integer Only / Functional / Equivalence Partitioning

## Preconditions
- User đang ở trang Basic Calculator
- Build được chọn là "Prototype"
- Đã thực hiện phép tính 10 / 3 và tick "Integers only"

## Test data
| Field | Value |
|-------|-------|
| First number | 10 |
| Second number | 3 |
| Operation | Divide |
| Integers only | Unchecked (sau khi đã checked) |

## Test steps
1. Nhập "10" vào ô First number
2. Nhập "3" vào ô Second number
3. Chọn Operation là "Divide"
4. Bấm nút "Calculate"
5. Tick checkbox "Integers only" → Answer = "3"
6. Untick checkbox "Integers only"

## Expected result
Ô Answer quay lại hiển thị kết quả đầy đủ "3.3333333333333335".

## Status / Related bugs
Not Run / None
