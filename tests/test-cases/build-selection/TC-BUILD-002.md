# TC-BUILD-002: Chuyển đổi giữa các build

## Requirement ID
FR-BUILD-001

## Module / Test type / Technique
Build Selection / Functional / Equivalence Partitioning

## Preconditions
- User đang ở trang Basic Calculator
- Build hiện tại là "Prototype"

## Test data
| Field | Value |
|-------|-------|
| Build | 1, 2, 3 (lần lượt) |
| First number | 5 |
| Second number | 3 |
| Operation | Add |

## Test steps
1. Chọn Build "1" từ dropdown
2. Nhập "5" và "3", chọn Add, bấm Calculate
3. Ghi nhận kết quả
4. Chọn Build "2" từ dropdown
5. Nhập "5" và "3", chọn Add, bấm Calculate
6. Ghi nhận kết quả
7. Chuyển lại Build "Prototype"
8. Nhập "5" và "3", chọn Add, bấm Calculate

## Expected result
- Có thể chuyển đổi giữa các build mà không bị lỗi
- Mỗi build có thể cho kết quả khác nhau (builds 1-8 có lỗi)
- Build Prototype luôn cho kết quả đúng "8"

## Status / Related bugs
Not Run / None
