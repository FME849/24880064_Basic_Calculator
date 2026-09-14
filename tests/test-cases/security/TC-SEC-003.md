# TC-SEC-003: Nhập HTML tag vào input fields

## Requirement ID
NFR-SEC-001

## Module / Test type / Technique
Security / Security Testing / Injection Testing

## Preconditions
- User đang ở trang Basic Calculator
- Lần lượt chọn từng Build để test: 1, 2, 3, 4, 5, 6, 7, 8, 9

## Test data
| Field | Value |
|-------|-------|
| First number | <b>bold</b> |
| Second number | <img src=x> |
| Operation | Concatenate |

## Test steps
1. Nhập `<b>bold</b>` vào ô First number
2. Nhập `<img src=x>` vào ô Second number
3. Chọn Operation là "Concatenate"
4. Bấm nút "Calculate"

## Expected result
- HTML tags được xử lý như chuỗi văn bản, không được render thành HTML
- Ô Answer hiển thị chuỗi text thuần, không có HTML rendering
- Không có hình ảnh hoặc định dạng bold xuất hiện
- Ứng dụng không bị lỗi hoặc crash

## Status / Related bugs
Not Run / None
