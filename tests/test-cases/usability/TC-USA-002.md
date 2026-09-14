# TC-USA-002: Thông báo lỗi rõ ràng và dễ hiểu

## Requirement ID
NFR-USA-001

## Module / Test type / Technique
Usability / Usability Testing / Heuristic Evaluation

## Preconditions
- User đang ở trang Basic Calculator
- Lần lượt chọn từng Build để test: 1, 2, 3, 4, 5, 6, 7, 8, 9

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
5. Quan sát thông báo lỗi

## Expected result
- Thông báo lỗi hiển thị rõ ràng, dễ đọc
- Nội dung lỗi mô tả chính xác vấn đề: "Number 1 is not a number"
- Thông báo lỗi có màu đỏ nổi bật để user dễ nhận biết
- Vị trí hiển thị lỗi ở nơi dễ thấy (phía trên form)

## Status / Related bugs
Not Run / None
