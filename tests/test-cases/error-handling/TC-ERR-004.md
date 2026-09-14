# TC-ERR-004: Để trống cả hai ô số

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
| First number | (để trống) |
| Second number | (để trống) |
| Operation | Add |

## Test steps
1. Để trống ô First number
2. Để trống ô Second number
3. Chọn Operation là "Add"
4. Bấm nút "Calculate"

## Expected result
Hiển thị thông báo lỗi hoặc ô Answer hiển thị "0" (do chuỗi rỗng được chuyển thành 0). Hệ thống xử lý không bị crash.

## Status / Related bugs
Not Run / None
