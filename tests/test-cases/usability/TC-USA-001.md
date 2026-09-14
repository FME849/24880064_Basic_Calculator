# TC-USA-001: Tab navigation giữa các fields

## Requirement ID
NFR-USA-001

## Module / Test type / Technique
Usability / Usability Testing / Exploratory Testing

## Preconditions
- User đang ở trang Basic Calculator
- Lần lượt chọn từng Build để test: Prototype, 1, 2, 3, 4, 5, 6, 7, 8, 9

## Test data
Không có dữ liệu test cụ thể.

## Test steps
1. Mở trang Basic Calculator
2. Click vào ô First number
3. Bấm phím Tab để di chuyển đến ô Second number
4. Bấm phím Tab để di chuyển đến dropdown Operation
5. Bấm phím Tab để di chuyển đến nút Calculate
6. Tiếp tục bấm Tab qua các thành phần còn lại

## Expected result
- Phím Tab di chuyển focus theo thứ tự logic: First number → Second number → Operation → Calculate → Answer (skip vì read-only) → Integers only → Clear
- Mỗi thành phần được focus có viền hoặc highlight rõ ràng
- Có thể quay lại bằng Shift+Tab

## Status / Related bugs
Not Run / None
