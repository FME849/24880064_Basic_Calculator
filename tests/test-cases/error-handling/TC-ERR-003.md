# TC-ERR-003: Nhập ký tự đặc biệt vào number fields

## Requirement ID
FR-ERR-001

## Module / Test type / Technique
Error Handling / Functional / Equivalence Partitioning

## Preconditions
- User đang ở trang Basic Calculator
- Build được chọn là "Prototype"

## Test data
| Field | Value |
|-------|-------|
| First number | @#$ |
| Second number | 5 |
| Operation | Multiply |

## Test steps
1. Nhập "@#$" vào ô First number
2. Nhập "5" vào ô Second number
3. Chọn Operation là "Multiply"
4. Bấm nút "Calculate"

## Expected result
Hiển thị thông báo lỗi "Number 1 is not a number" màu đỏ. Không hiển thị kết quả trong ô Answer.

## Status / Related bugs
Not Run / None
