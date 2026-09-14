# TC-PERF-001: Thời gian phản hồi khi Calculate

## Requirement ID
NFR-PERF-001

## Module / Test type / Technique
Performance / Performance Testing / Benchmark

## Preconditions
- User đang ở trang Basic Calculator
- Build được chọn là "Prototype"
- Kết nối mạng ổn định

## Test data
| Field | Value |
|-------|-------|
| First number | 100 |
| Second number | 200 |
| Operation | Add |

## Test steps
1. Nhập "100" vào ô First number
2. Nhập "200" vào ô Second number
3. Chọn Operation là "Add"
4. Ghi nhận thời điểm bắt đầu
5. Bấm nút "Calculate"
6. Ghi nhận thời điểm kết quả hiển thị trong ô Answer
7. Tính thời gian phản hồi

## Expected result
- Kết quả hiển thị trong ô Answer trong vòng 2 giây
- Nút Calculate bị disabled trong lúc đang xử lý (tránh double-click)
- Kết quả hiển thị là "300"

## Status / Related bugs
Not Run / None
