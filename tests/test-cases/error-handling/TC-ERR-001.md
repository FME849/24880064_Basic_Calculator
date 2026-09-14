# TC-ERR-001: Nhập chữ vào First number

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
| First number | abc |
| Second number | 5 |
| Operation | Add |

## Test steps
1. Nhập "abc" vào ô First number
2. Nhập "5" vào ô Second number
3. Chọn Operation là "Add"
4. Bấm nút "Calculate"

## Expected result
Hiển thị thông báo lỗi "Number 1 is not a number" màu đỏ. Không hiển thị kết quả trong ô Answer.

## Status / Related bugs
Not Run / None
