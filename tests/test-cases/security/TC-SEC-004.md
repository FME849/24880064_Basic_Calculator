# TC-SEC-004: Nhập chuỗi quá dài vào input fields

## Requirement ID
NFR-SEC-001

## Module / Test type / Technique
Security / Security Testing / Fuzzing

## Preconditions
- User đang ở trang Basic Calculator
- Lần lượt chọn từng Build để test: Prototype, 1, 2, 3, 4, 5, 6, 7, 8, 9

## Test data
| Field | Value |
|-------|-------|
| First number | 9999999999 (10 ký tự - giới hạn maxlength) |
| Second number | 9999999999 (10 ký tự - giới hạn maxlength) |
| Operation | Add |

## Test steps
1. Nhập "9999999999" (10 ký tự) vào ô First number
2. Nhập "9999999999" (10 ký tự) vào ô Second number
3. Chọn Operation là "Add"
4. Bấm nút "Calculate"
5. Thử bypass maxlength bằng DevTools:
   - Mở DevTools (F12)
   - Sửa maxlength thành 100
   - Nhập chuỗi dài hơn 10 ký tự
   - Bấm Calculate

## Expected result
- Với maxlength=10: ô input chỉ chấp nhận tối đa 10 ký tự
- Kết quả phép cộng hiển thị đúng: "19999999998"
- Khi bypass maxlength: ứng dụng vẫn xử lý đúng hoặc hiển thị lỗi, không bị crash
- Không xảy ra buffer overflow hoặc lỗi bảo mật

## Status / Related bugs
Not Run / None
