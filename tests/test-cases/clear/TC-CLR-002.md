# TC-CLR-002: Clear sau khi có lỗi

## Requirement ID
FR-CLR-001

## Module / Test type / Technique
Clear / Functional / Equivalence Partitioning

## Preconditions
- User đang ở trang Basic Calculator
- Lần lượt chọn từng Build để test: 1, 2, 3, 4, 5, 6, 7, 8, 9
- Đã thực hiện phép tính gây lỗi (ví dụ: chia cho 0)

## Test data
| Field | Value |
|-------|-------|
| First number | 10 |
| Second number | 0 |
| Operation | Divide |

## Test steps
1. Nhập "10" vào ô First number
2. Nhập "0" vào ô Second number
3. Chọn Operation là "Divide"
4. Bấm nút "Calculate" → Hiển thị lỗi "Divide by zero error!"
5. Bấm nút "Clear"

## Expected result
- Thông báo lỗi "Divide by zero error!" biến mất
- Ô Answer được xóa trắng
- Checkbox "Integers only" được untick

## Status / Related bugs
Not Run / None
