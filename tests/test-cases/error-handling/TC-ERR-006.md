# TC-ERR-006: Để trống Second number

## Requirement ID
FR-ERR-001

## Module / Test type / Technique
Error Handling / Functional / Boundary Value Analysis

## Preconditions
- User đang ở trang Basic Calculator
- Build được chọn là "Prototype"

## Test data
| Field | Value |
|-------|-------|
| First number | 5 |
| Second number | (để trống) |
| Operation | Add |

## Test steps
1. Nhập "5" vào ô First number
2. Để trống ô Second number
3. Chọn Operation là "Add"
4. Bấm nút "Calculate"

## Expected result
Hiển thị thông báo lỗi hoặc ô Answer hiển thị "5" (chuỗi rỗng = 0, 5 + 0 = 5). Hệ thống xử lý không bị crash.

## Status / Related bugs
Not Run / None
