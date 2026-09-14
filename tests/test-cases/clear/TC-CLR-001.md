# TC-CLR-001: Clear sau khi tính toán thành công

## Requirement ID
FR-CLR-001

## Module / Test type / Technique
Clear / Functional / Equivalence Partitioning

## Preconditions
- User đang ở trang Basic Calculator
- Lần lượt chọn từng Build để test: Prototype, 1, 2, 3, 4, 5, 6, 7, 8, 9
- Đã thực hiện phép tính 5 + 3 = 8 thành công

## Test data
| Field | Value |
|-------|-------|
| First number | 5 |
| Second number | 3 |
| Operation | Add |

## Test steps
1. Nhập "5" vào ô First number
2. Nhập "3" vào ô Second number
3. Chọn Operation là "Add"
4. Bấm nút "Calculate" → Answer = 8
5. Bấm nút "Clear"

## Expected result
- Ô Answer được xóa trắng (rỗng)
- Checkbox "Integers only" được untick
- Thông báo lỗi (nếu có) được xóa

## Status / Related bugs
Not Run / None
