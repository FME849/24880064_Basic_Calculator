# Test Case Template

Mỗi test case file phải tuân theo template sau:

```markdown
# TC-[MODULE]-[NUMBER]: [Tên test case mô tả ngắn gọn]

## Requirement ID
[FR/NFR]-[MODULE]-[NUMBER]

## Module / Test type / Technique
[Tên module] / [Loại test] / [Kỹ thuật test]

## Preconditions
- [Điều kiện tiên quyết 1]
- [Điều kiện tiên quyết 2]

## Test data
| Field | Value |
|-------|-------|
| [Tên field 1] | [Giá trị 1] |
| [Tên field 2] | [Giá trị 2] |

## Test steps
1. [Bước 1]
2. [Bước 2]
3. [Bước 3]

## Expected result
[Mô tả kết quả mong đợi chi tiết]

## Status / Related bugs
Not Run / None
```

## Giải thích các trường

| Trường | Mô tả | Ví dụ |
|--------|--------|-------|
| **TC-[MODULE]-[NUMBER]** | ID test case, viết tắt module + số thứ tự | TC-ADD-001, TC-GUI-003 |
| **Requirement ID** | ID yêu cầu từ SRS mà test case bao phủ | FR-CALC-001, NFR-SEC-001 |
| **Module** | Tên module/feature đang test | Addition, Login, GUI |
| **Test type** | Loại test | Functional, GUI Testing, Security Testing, Performance Testing, Usability Testing |
| **Technique** | Kỹ thuật thiết kế test case | Equivalence Partitioning, BVA, Checklist, Exploratory, Injection, Benchmark |
| **Preconditions** | Điều kiện phải đáp ứng trước khi test | User đang ở trang X, Đã đăng nhập |
| **Test data** | Dữ liệu đầu vào cho test | Email, Password, số liệu |
| **Test steps** | Các bước thực hiện test (đánh số) | 1. Mở trang... 2. Nhập... 3. Bấm... |
| **Expected result** | Kết quả mong đợi sau khi thực hiện các bước | Hiển thị kết quả đúng, thông báo lỗi |
| **Status** | Trạng thái hiện tại | Not Run, Pass, Fail, Blocked, Skipped |
| **Related bugs** | Bug ID liên quan (nếu có) | None, BUG-001 |

## Các loại test type và technique phổ biến

### Functional Testing
- **Equivalence Partitioning (EP)**: Chia dữ liệu thành các lớp tương đương, chọn đại diện mỗi lớp
- **Boundary Value Analysis (BVA)**: Test các giá trị biên (min, max, 0, empty, null)
- **Decision Table**: Test các tổ hợp điều kiện và kết quả
- **State Transition**: Test chuyển đổi trạng thái

### GUI Testing
- **Checklist**: Kiểm tra hiển thị, layout, alignment, font, color theo danh sách

### Usability Testing
- **Exploratory Testing**: Khám phá tự do để tìm vấn đề
- **Heuristic Evaluation**: Đánh giá theo 10 heuristics của Nielsen

### Performance Testing
- **Benchmark**: Đo thời gian phản hồi, tải trang
- **Stress Testing**: Test với tải cao, nhiều lần liên tục
- **Load Testing**: Test với nhiều user đồng thời

### Security Testing
- **Injection Testing**: XSS, SQL Injection, HTML Injection
- **Fuzzing**: Nhập dữ liệu ngẫu nhiên, quá dài, bất thường
