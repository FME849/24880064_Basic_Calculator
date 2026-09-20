---
name: generate-traceability-matrix
description: >-
  Skill để tổng hợp và tạo Requirements Traceability Matrix (RTM) từ test cases, test runs và bug reports.
  Sử dụng skill này khi user yêu cầu tạo traceability matrix, bảng truy vết yêu cầu, hoặc tổng hợp
  liên kết giữa requirements, test cases, execution results và bug issues.
  Skill đảm bảo mỗi dòng = đúng 1 lần thực thi (1 test case x 1 build), KHÔNG gộp nhiều build vào 1 dòng.
---

# Generate Requirements Traceability Matrix (RTM)

Skill này hướng dẫn quy trình đầy đủ để tổng hợp và tạo Requirements Traceability Matrix từ 3 nguồn dữ liệu.

## Quy trình thực hiện

### Bước 1: Xác định cấu trúc thư mục

Trước tiên, khảo sát cấu trúc dự án để tìm các thư mục liên quan:

- tests/test-cases/module/TC-MODULE-NNN.md (Nguồn 1: Requirement IDs)
- tests/test-runs/TR-[Build]-[Number].md (Nguồn 2: Kết quả thực thi)
- tests/bugs/module/BUG-MODULE-NNN.md (Nguồn 3: Bug reports)
- tests/traceability-matrix/ (Output)

### Bước 2: Thu thập Requirement IDs từ Test Cases

Với mỗi file TC trong tests/test-cases/, đọc phần ## Requirement ID.
Một TC có thể map tới nhiều Requirement IDs (phân cách bằng dấu phẩy hoặc xuống dòng).
Tạo map: TC-ID -> [Requirement IDs]

### Bước 3: Parse kết quả thực thi từ Test Runs

Với mỗi file TR trong tests/test-runs/, parse bảng markdown 7 cột:
No. | Test case ID | Module | Tester | Result | Related Bug | Note

- Regex để parse TC ID: (TC-[A-Z]+-\d+)
- Regex để parse Bug ID: (BUG-[A-Z]+-\d+)
- Result thuộc tập: {Pass, Fail, Block, Not Run}
- Build number: Extract từ tên file, ví dụ TR-1-001.md -> Build-1

### Bước 4: Map Bug IDs sang đường dẫn file

Quy tắc mapping thường gặp:
- BUG-ADD -> addition
- BUG-SUB -> subtraction
- BUG-MUL -> multiplication
- BUG-DIV -> division
- BUG-CON -> concatenation
- BUG-INT -> integer-only
- BUG-ERR -> error-handling
- BUG-CLR -> clear
- BUG-GUI -> gui

Luôn liệt kê thực tế thư mục tests/bugs/ để xác nhận mapping đúng với dự án hiện tại.

### Bước 5: Mapping Status

| Result (từ Test Run) | Status (trong RTM)  |
|---------------------|---------------------|
| Pass                | Done                |
| Fail                | Open                |
| Block               | Blocked             |
| Not Run             | Ready for Retest    |

### Bước 6: Tạo bảng tóm tắt coverage

Tính toán các thống kê theo từng Requirement ID:
- Số Test Cases có Requirement ID đó
- Tổng số lượt thực thi (số TCs x số builds)
- Số lượt Pass / Fail / Block / Not Run
- Tỷ lệ Pass (%)

### Bước 7: Tạo file RTM

Tên file output: tests/traceability-matrix/traceability-matrix.md
Có thể tạo thêm alias có số thứ tự: TM-001.md, TM-002.md, ...

QUY TẮC BẮT BUỘC:
- Mỗi dòng = đúng 1 lần thực thi (1 test case x 1 build)
- KHÔNG gộp nhiều build vào 1 dòng để tránh nhầm lẫn bug nào gây ra lỗi nào
- Sắp xếp theo: Requirement ID -> TC ID -> Build number

---

## Template file RTM

Xem file template tại: resources/traceability_matrix_template.md
Xem ví dụ thực tế tại: examples/basic_calculator_rtm_example.md

---

## Phương pháp triển khai

### Option A: Python Script (khuyến nghị cho dự án lớn, > 30 TCs hoặc > 3 builds)

Tạo script Python tạm thời để parse và generate RTM tự động.
Xem script mẫu tại: references/python_script_template.md

### Option B: Thủ công (dự án nhỏ, < 30 TCs x 3 builds)

Tạo trực tiếp file markdown bằng write_to_file, điền từng dòng dữ liệu theo template.

---

## Xử lý các trường hợp đặc biệt

### TC có nhiều Requirement IDs
Điền Requirement ID đầu tiên (primary requirement) trong cột Requirement.
Hoặc tạo nhiều dòng nếu yêu cầu truy vết đầy đủ theo từng requirement.

### TC bị Block
Không cần Bug ID (điền -), Status = Blocked. Ghi chú lý do Block trong Note nếu có.

### Bug đã được fix ở build sau
Status vẫn là Open cho lần thực thi khi bug xuất hiện.
Chỉ đổi sang Done khi TC Pass ở build mới nhất.

---

## Kiểm tra kết quả

Sau khi tạo xong RTM, verify:

- Tổng số dòng trong bảng = số TCs x số builds (không sót, không trùng)
- Mọi TC ID trong bảng đều có trong tests/test-cases/
- Mọi Bug ID trong bảng đều có file tương ứng trong tests/bugs/
- Tỷ lệ Pass/Fail/Block trong summary khớp với tổng hợp từ test-runs
- Tất cả Requirements trong SRS đều xuất hiện trong bảng summary
