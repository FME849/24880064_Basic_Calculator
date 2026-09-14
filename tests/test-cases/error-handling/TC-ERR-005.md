# TC-ERR-005: Để trống First number

## Requirement ID
FR-ERR-001

## Module / Test type / Technique
Error Handling / Functional / Boundary Value Analysis

## Preconditions
- User đang ở trang Basic Calculator
- Lần lượt chọn từng Build để test: 1, 2, 3, 4, 5, 6, 7, 8, 9

## Test data
| Field | Value |
|-------|-------|
| First number | (để trống) |
| Second number | 5 |
| Operation | Add |

## Test steps
1. Để trống ô First number
2. Nhập "5" vào ô Second number
3. Chọn Operation là "Add"
4. Bấm nút "Calculate"

## Expected result
Hiển thị thông báo lỗi hoặc ô Answer hiển thị "5" (chuỗi rỗng = 0, 0 + 5 = 5). Hệ thống xử lý không bị crash.

## Status / Related bugs
Not Run / None
