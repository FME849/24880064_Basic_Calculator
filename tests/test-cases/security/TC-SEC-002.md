# TC-SEC-002: Nhập SQL injection vào input fields

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
| First number | 1' OR '1'='1 |
| Second number | 5 |
| Operation | Add |

## Test steps
1. Nhập `1' OR '1'='1` vào ô First number
2. Nhập "5" vào ô Second number
3. Chọn Operation là "Add"
4. Bấm nút "Calculate"

## Expected result
- Hiển thị thông báo lỗi "Number 1 is not a number" (vì input không phải số)
- Không có lỗi SQL injection xảy ra
- Ứng dụng xử lý input bất thường một cách an toàn

## Status / Related bugs
Not Run / None
