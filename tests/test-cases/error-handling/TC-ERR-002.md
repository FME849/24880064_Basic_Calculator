# TC-ERR-002: Nhập chữ vào Second number

## Requirement ID
FR-ERR-001

## Module / Test type / Technique
Error Handling / Functional / Equivalence Partitioning

## Preconditions
- User đang ở trang Basic Calculator
- Lần lượt chọn từng Build để test: 1, 2, 3, 4, 5, 6, 7, 8, 9

## Test data
| Field | Value |
|-------|-------|
| First number | 5 |
| Second number | xyz |
| Operation | Add |

## Test steps
1. Nhập "5" vào ô First number
2. Nhập "xyz" vào ô Second number
3. Chọn Operation là "Add"
4. Bấm nút "Calculate"

## Expected result
Hiển thị thông báo lỗi "Number 2 is not a number" màu đỏ. Không hiển thị kết quả trong ô Answer.

## Status / Related bugs
Not Run / None
