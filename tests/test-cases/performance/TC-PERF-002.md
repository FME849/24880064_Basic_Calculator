# TC-PERF-002: Tính toán liên tục nhiều lần

## Requirement ID
NFR-PERF-001

## Module / Test type / Technique
Performance / Performance Testing / Stress Testing

## Preconditions
- User đang ở trang Basic Calculator
- Lần lượt chọn từng Build để test: 1, 2, 3, 4, 5, 6, 7, 8, 9

## Test data
| Field | Value |
|-------|-------|
| First number | 10 |
| Second number | 5 |
| Operation | Add, Subtract, Multiply, Divide (lần lượt) |

## Test steps
1. Thực hiện 20 phép tính liên tục:
   - Lần 1-5: Add (10 + 5)
   - Lần 6-10: Subtract (10 - 5)
   - Lần 11-15: Multiply (10 * 5)
   - Lần 16-20: Divide (10 / 5)
2. Mỗi lần: nhập số, chọn phép toán, bấm Calculate, chờ kết quả
3. Ghi nhận thời gian phản hồi và kết quả của mỗi lần

## Expected result
- Tất cả 20 phép tính cho kết quả đúng
- Thời gian phản hồi không tăng đáng kể qua các lần tính
- Ứng dụng không bị lag, freeze hoặc crash
- Bộ nhớ trình duyệt không tăng bất thường

## Status / Related bugs
Not Run / None
