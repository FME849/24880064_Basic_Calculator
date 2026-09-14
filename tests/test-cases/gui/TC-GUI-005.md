# TC-GUI-005: Responsive trên các kích thước màn hình

## Requirement ID
NFR-GUI-001

## Module / Test type / Technique
GUI / GUI Testing / Checklist

## Preconditions
- User đang ở trang Basic Calculator
- Lần lượt chọn từng Build để test: 1, 2, 3, 4, 5, 6, 7, 8, 9

## Test data
| Kích thước | Resolution |
|------------|------------|
| Desktop | 1920x1080 |
| Tablet | 768x1024 |
| Mobile | 375x667 |

## Test steps
1. Mở trang Basic Calculator trên trình duyệt desktop (1920x1080)
2. Kiểm tra layout hiển thị đúng
3. Resize trình duyệt xuống kích thước tablet (768x1024)
4. Kiểm tra layout hiển thị đúng
5. Resize trình duyệt xuống kích thước mobile (375x667)
6. Kiểm tra layout hiển thị đúng

## Expected result
- Tất cả thành phần giao diện hiển thị đầy đủ ở mọi kích thước
- Không bị tràn, chồng chéo, hoặc cắt nội dung
- Các nút và ô nhập vẫn có thể tương tác được

## Status / Related bugs
Not Run / None
