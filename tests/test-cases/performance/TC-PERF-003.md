# TC-PERF-003: Thời gian tải trang

## Requirement ID
NFR-PERF-001

## Module / Test type / Technique
Performance / Performance Testing / Benchmark

## Preconditions
- Kết nối mạng ổn định (tốc độ >= 10 Mbps)
- Trình duyệt Chrome/Firefox/Safari phiên bản mới nhất
- Cache trình duyệt đã được xóa

## Test data
| URL | https://testsheepnz.github.io/BasicCalculator.html |

## Test steps
1. Xóa cache trình duyệt
2. Mở DevTools (F12) → tab Network
3. Truy cập URL trang Basic Calculator
4. Ghi nhận thời gian tải trang (Load event)
5. Kiểm tra số lượng requests và tổng dung lượng
6. Lặp lại 3 lần và tính trung bình

## Expected result
- Trang tải hoàn chỉnh trong vòng 3 giây
- Tất cả resources (CSS, JS, images) tải thành công (status 200)
- Không có lỗi console nào xuất hiện
- Tổng dung lượng tải < 5MB

## Status / Related bugs
Not Run / None
