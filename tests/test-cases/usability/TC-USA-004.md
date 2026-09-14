# TC-USA-004: Maxlength của input fields

## Requirement ID
NFR-USA-001

## Module / Test type / Technique
Usability / Usability Testing / Boundary Value Analysis

## Preconditions
- User đang ở trang Basic Calculator
- Lần lượt chọn từng Build để test: 1, 2, 3, 4, 5, 6, 7, 8, 9

## Test data
| Field | Value |
|-------|-------|
| First number | 12345678901 (11 ký tự) |
| Second number | 1234567890 (10 ký tự) |

## Test steps
1. Click vào ô First number
2. Thử nhập "12345678901" (11 ký tự)
3. Kiểm tra số ký tự thực sự được nhập
4. Click vào ô Second number
5. Nhập "1234567890" (10 ký tự)
6. Kiểm tra số ký tự thực sự được nhập

## Expected result
- Ô First number chỉ chấp nhận tối đa 10 ký tự (maxlength=10), ký tự thứ 11 không được nhập
- Ô Second number chấp nhận đủ 10 ký tự
- Không có thông báo lỗi khi đạt giới hạn ký tự

## Status / Related bugs
Not Run / None
