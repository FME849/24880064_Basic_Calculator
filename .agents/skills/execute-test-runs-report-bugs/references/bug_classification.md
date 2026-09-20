# Tiêu chuẩn Phân loại Bugs & Trạng thái Kiểm thử

## 1. Trạng thái Kiểm thử (Test Case Status)

| Trạng thái | Định nghĩa | Hành động tiếp theo |
|---|---|---|
| **Pass** | Test case thực thi thành công, kết quả thực tế trùng khớp với kết quả mong đợi. | Cột `Related Bug` để `-`, `Note` để `-` hoặc mô tả kết quả đúng. |
| **Fail** | Test case thực thi được nhưng kết quả thực tế sai lệch so với yêu cầu (tính sai, hiển thị sai, thiếu validation). | Bắt buộc phải có `Related Bug` liên kết tới file bug tương ứng và `Note` nêu nguyên nhân lỗi. |
| **Block** | Test case không thể thực thi được do một lỗi khác làm chặn luồng (nút bấm bị ẩn/disable, form không mở, trang web crash). | Bắt buộc phải có `Related Bug` chỉ ra bug gây tắc nghẽn và `Note` nêu rõ lý do bị chặn. |
| **Not Run** | Test case chưa được chạy trong phiên kiểm thử này. | Nêu lý do chưa thực thi trong cột `Note`. |

---

## 2. Mức độ Nghiêm trọng (Severity)

| Severity | Ý nghĩa | Ví dụ |
|---|---|---|
| **Blocker** | Làm tê liệt toàn bộ hệ thống hoặc chặn hoàn toàn một module lớn, không có giải pháp tạm thời. | Mất nút Calculate trong Build 9 khiến toàn bộ chức năng tính toán bị block. |
| **Critical** | Chức năng cốt lõi bị sai lệch nghiêm trọng, mất tính toàn vẹn dữ liệu, lỗ hổng bảo mật nghiêm trọng. | 5 + 3 ra 53 (Build 2); chia cho 0 ra Infinity (Build 6); num1 bị thay bằng answer (Build 7). |
| **Major** | Chức năng hoạt động sai nhưng không làm sập luồng chính, có giải pháp thay thế tạm thời. | Kết quả thập phân luôn bị làm tròn thành số nguyên (Build 4); nút Clear bị disabled (Build 5). |
| **Minor** | Lỗi nhỏ về giao diện, hiển thị, hoặc lỗi phụ không ảnh hưởng đến luồng nghiệp vụ chính. | Checkbox Integers only không bị disabled khi chọn Concatenate (Build 3). |
| **Trivial** | Lỗi chính tả, căn lề nhẹ, định dạng font chữ không chuẩn. | Sai chính tả trong câu gợi ý giao diện. |

---

## 3. Độ Ưu tiên (Priority)

| Priority | Ý nghĩa | Mốc thời gian khắc phục |
|---|---|---|
| **P1 (Urgent)** | Cần sửa ngay lập tức, chặn release/deploy. | Đi kèm với Blocker hoặc Critical bugs ảnh hưởng trực tiếp người dùng. |
| **P2 (High)** | Ưu tiên sửa trong bản vá tiếp theo (next patch). | Đi kèm với Major bugs ảnh hưởng đến tính chính xác của nghiệp vụ. |
| **P3 (Medium)** | Sửa trong chu kỳ phát triển thông thường (regular sprint). | Các lỗi Minor, lỗi UI nhỏ. |
| **P4 (Low)** | Có thể sửa khi có thời gian rảnh. | Trivial, cosmetic improvements. |
