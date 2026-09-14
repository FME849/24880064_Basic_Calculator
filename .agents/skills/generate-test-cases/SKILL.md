---
name: generate-test-cases
description: >-
  Skill để thiết kế và phát sinh test cases từ đặc tả SRS (Software Requirements Specification).
  Sử dụng skill này khi user yêu cầu tạo test cases, thiết kế test cases, hoặc sinh test cases
  từ tài liệu đặc tả yêu cầu phần mềm (SRS). Skill hướng dẫn quy trình phân tích SRS,
  xác định modules/features, chọn kỹ thuật test phù hợp, và tạo test case files theo template chuẩn.
---

# Generate Test Cases from SRS

Skill này hướng dẫn quy trình đầy đủ để phát sinh test cases từ đặc tả SRS.

## Quy trình thực hiện

### Bước 1: Phân tích SRS

1. Đọc kỹ tài liệu SRS mà user cung cấp (file markdown, PDF, hoặc URL).
2. Nếu SRS có đề cập đến GUI/giao diện (hình ảnh hoặc URL), hãy xem hình ảnh và truy cập URL để hiểu đầy đủ các thành phần giao diện.
3. Nếu ứng dụng là web app có URL, hãy fetch source code HTML/JS để hiểu logic xử lý chi tiết.

### Bước 2: Xác định Modules/Features

Từ SRS, xác định và liệt kê tất cả modules/features cần test. Phân loại thành:

- **Functional modules**: Các chức năng chính của ứng dụng (từ functional requirements).
- **Non-functional modules**: GUI, Usability, Performance, Security, Compatibility (từ non-functional requirements).

Tạo bảng mapping giữa modules và requirement IDs:

| Module | Mô tả | Requirement IDs |
|--------|--------|-----------------|
| module-name | Mô tả ngắn | FR-XXX-001 |

### Bước 3: Thiết kế Test Cases

Cho mỗi module, thiết kế test cases sử dụng các kỹ thuật test phù hợp:

#### Kỹ thuật test theo loại

| Loại test | Kỹ thuật áp dụng |
|-----------|-------------------|
| **Functional** | Equivalence Partitioning (EP), Boundary Value Analysis (BVA), Decision Table, State Transition |
| **GUI** | Checklist (kiểm tra hiển thị, layout, alignment) |
| **Usability** | Exploratory Testing, Heuristic Evaluation |
| **Performance** | Benchmark, Stress Testing, Load Testing |
| **Security** | Injection Testing (XSS, SQL Injection), Fuzzing |
| **Compatibility** | Cross-browser Testing, Responsive Testing |

#### Nguyên tắc bao phủ

- Mỗi functional module cần ít nhất: **positive cases** (happy path) + **negative cases** (invalid input) + **boundary cases**.
- Luôn có test cases cho: GUI, Usability, Performance, Security (non-functional).
- Tổng số test cases nên đủ lớn để bao phủ hết requirements nhưng không thừa.

### Bước 4: Tạo Implementation Plan

Trước khi tạo files, trình bày implementation plan cho user review. Plan cần bao gồm:

- Tóm tắt ứng dụng
- Bảng modules/features
- Cấu trúc thư mục `tests/test-cases/`
- Danh sách tất cả test cases theo module (ID, tên, loại test, kỹ thuật)

**Chờ user approve trước khi tạo files.**

### Bước 5: Tạo Test Case Files

#### Cấu trúc thư mục

Tham khảo file [directory_structure.md](./references/directory_structure.md) để biết chi tiết cấu trúc thư mục.

```text
tests/
└── test-cases/
    ├── <module-1>/
    │   ├── TC-<MODULE>-001.md
    │   ├── TC-<MODULE>-002.md
    │   └── ...
    ├── <module-2>/
    └── ...
```

#### Quy tắc đặt tên

- **Thư mục module**: lowercase, dùng dấu gạch ngang `-` (ví dụ: `error-handling`, `build-selection`)
- **File test case**: `TC-[MODULE]-[NUMBER].md`
  - `[MODULE]`: viết tắt viết HOA của module (ví dụ: ADD, SUB, MUL, DIV, ERR, GUI, SEC)
  - `[NUMBER]`: số thứ tự 3 chữ số (001, 002, ...)

#### Template test case

Sử dụng template trong file [test_case_template.md](./resources/test_case_template.md).

### Bước 6: Verify

Sau khi tạo xong, verify:
1. Đếm tổng số files đã tạo bằng `find ... | wc -l`
2. Kiểm tra cấu trúc thư mục bằng `find ... -type d | sort`
3. Xem nội dung 1-2 file mẫu để đảm bảo đúng template
4. Tạo walkthrough tóm tắt kết quả

## Lưu ý quan trọng

- Sử dụng **subagents song song** khi số lượng test cases lớn (> 20) để tăng tốc.
- Nhóm 10-16 test cases cho mỗi subagent.
- Nội dung test case viết bằng **ngôn ngữ mà user sử dụng** (Tiếng Việt hoặc Tiếng Anh).
- Thuật ngữ kỹ thuật giữ nguyên tiếng Anh (Equivalence Partitioning, BVA, XSS, ...).
