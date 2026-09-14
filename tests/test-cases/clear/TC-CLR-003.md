# TC-CLR-003: Clear khi chưa tính toán

## Requirement ID
FR-CLR-001

## Module / Test type / Technique
Clear / Functional / Equivalence Partitioning

## Preconditions
- User đang ở trang Basic Calculator
- Lần lượt chọn từng Build để test: 1, 2, 3, 4, 5, 6, 7, 8, 9
- Chưa thực hiện phép tính nào

## Test data
Không có dữ liệu test cụ thể.

## Test steps
1. Mở trang Basic Calculator
2. Không nhập gì vào các ô
3. Bấm nút "Clear"

## Expected result
- Trang không bị lỗi hoặc crash
- Ô Answer vẫn trống
- Checkbox "Integers only" vẫn untick

## Status / Related bugs
Not Run / None
