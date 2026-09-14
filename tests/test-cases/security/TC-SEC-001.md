# TC-SEC-001: Nhập script tag vào input fields (XSS)

## Requirement ID
NFR-SEC-001

## Module / Test type / Technique
Security / Security Testing / Injection Testing

## Preconditions
- User đang ở trang Basic Calculator
- Build được chọn là "Prototype"

## Test data
| Field | Value |
|-------|-------|
| First number | <script>alert('XSS')</script> |
| Second number | 5 |
| Operation | Concatenate |

## Test steps
1. Nhập `<script>alert('XSS')</script>` vào ô First number
2. Nhập "5" vào ô Second number
3. Chọn Operation là "Concatenate"
4. Bấm nút "Calculate"
5. Quan sát xem có popup alert xuất hiện không

## Expected result
- Không có popup alert xuất hiện (XSS attack bị chặn)
- Script tag được xử lý như chuỗi văn bản thông thường
- Ứng dụng không bị crash hoặc lỗi bảo mật
- Kết quả hiển thị chuỗi text an toàn trong ô Answer

## Status / Related bugs
Not Run / None
