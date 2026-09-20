---
name: execute-test-runs-report-bugs
description: >-
  Skill để thực thi kiểm thử tự động, ghi nhận kết quả test run theo từng build/phiên bản (TR-[Build]-[Number].md),
  phân tích lỗi và lập báo cáo bug (BUG-[Module]-[Number].md) theo template chuẩn.
  Sử dụng skill này khi user yêu cầu chạy test run, lập bảng test execution run,
  phân loại trạng thái kiểm thử (Pass, Fail, Block, Not Run), gắn mã lỗi, và lập bug reports.
---

# Execute Test Runs & Report Bugs

Skill này hướng dẫn quy trình thực thi kiểm thử (test runs) cho từng bản build hoặc phiên bản phần mềm, thu thập bằng chứng lỗi, lập báo cáo lỗi (bug reports) và lập bảng theo dõi test execution.

---

## Quy trình thực hiện

### Bước 1: Phân tích Phạm vi Kiểm thử & Môi trường

1. Xác định danh sách các phiên bản/build cần kiểm thử (ví dụ: Build 1 đến Build 9).
2. Xác định danh mục test cases cần thực thi (toàn bộ 66 test cases từ `tests/test-cases/`).
3. Chuẩn bị môi trường kiểm thử: Browser (Chromium, Firefox), Hệ điều hành, URL mục tiêu, tài khoản/dữ liệu test.

---

### Bước 2: Thực thi Kiểm thử Tự động (Execution)

1. Chạy các test script tự động tương ứng với build/môi trường:
   ```bash
   npx playwright test -g "Build 1"
   ```
2. Phân tích kết quả test run từ console log, assertion errors, screenshots:
   - **Pass**: Kết quả thực tế khớp chính xác với kết quả mong đợi.
   - **Fail**: Ứng dụng hoạt động sai so với yêu cầu (assertion thất bại, kết quả tính toán sai, thông báo lỗi sai lệch).
   - **Block**: Không thể thực thi test case do một lỗi nghiêm trọng khác chặn luồng (ví dụ: nút bấm chính bị ẩn/disable, trang web crash, lỗi server 500).
   - **Not Run**: Test case chưa được chạy trong phiên kiểm thử.

---

### Bước 3: Lập Báo cáo Lỗi (Bug Reporting)

Khi một test case có trạng thái **Fail** hoặc **Block**:

1. **Gom nhóm lỗi**:
   - Nếu nhiều test cases cùng thất bại do **cùng một nguyên nhân gốc** (root cause) trong cùng một module, gom lại thành **1 file Bug** duy nhất và liệt kê tất cả các test cases liên quan trong mục `Found by Test Case`.
2. **Quy tắc đặt tên file Bug**:
   ```text
   tests/bugs/<module>/BUG-[Module]-[Number].md
   ```
   - `<module>`: Thư mục trùng với module bị lỗi (ví dụ: `addition`, `division`, `error-handling`).
   - `BUG-[Module]-[Number].md`: Ví dụ: `BUG-ERR-001.md`, `BUG-ADD-001.md`, `BUG-GUI-001.md`.
3. **Template chuẩn của Bug Report**:
   Sử dụng template từ [bug_template.md](./resources/bug_template.md):
   - **Title**: `[BUG][Module] Mô tả ngắn gọn lỗi`
   - **Found by Test Case**: Danh sách ID các test cases phát hiện ra bug (ví dụ: `TC-ADD-001, TC-ADD-002`)
   - **Requirement liên quan**: ID yêu cầu chức năng (ví dụ: `FR-CALC-001`)
   - **Severity / Priority**: Mức độ nghiêm trọng và độ ưu tiên khắc phục (ví dụ: `Critical / P1`, `Major / P2`)
   - **Environment**: Browser, OS, URL, Build
   - **Steps to reproduce**: Các bước tái hiện lỗi chi tiết
   - **Expected result**: Kết quả mong đợi
   - **Actual result**: Kết quả thực tế sai lệch
   - **Evidence**: Bằng chứng lỗi (assertion failure, console log, mã nguồn lỗi)

---

### Bước 4: Tạo File Test Run (`TR-[Build]-[Number].md`)

Cho mỗi bản build/phiên bản, tạo một file test run tương ứng trong thư mục `tests/test-runs/`:

1. **Quy tắc đặt tên file Test Run**:
   ```text
   tests/test-runs/TR-[Build]-[Number].md
   ```
   - Ví dụ: `TR-1-001.md` (cho Build 1), `TR-2-001.md` (cho Build 2), ..., `TR-9-001.md` (cho Build 9).
2. **Nội dung file Test Run**:
   Sử dụng template từ [test_run_template.md](./resources/test_run_template.md):
   - **Phần 1: Overview**: Test Run ID, Build, Tester, Ngày thực thi, Môi trường, Tỷ lệ Pass/Fail/Block.
   - **Phần 2: Execution Summary**: Bảng tổng kết số lượng và danh sách bugs phát hiện trên build kèm link đến file bug.
   - **Phần 3: Test Results**: Bảng chi tiết toàn bộ test cases với 7 cột chuẩn:
     `No. | Test case ID | Module | Tester | Result | Related Bug | Note`
     - **Result**: `Pass`, `Fail`, `Block`, hoặc `Not Run`.
     - **Related Bug**: Link Markdown đến file bug (ví dụ `[BUG-ERR-001](../bugs/error-handling/BUG-ERR-001.md)`), hoặc `-` nếu Pass.
     - **Note**: Mô tả cụ thể lý do Fail/Block (ví dụ: "Không báo lỗi, tính ra NaN", "Bị chặn do nút Calculate bị ẩn").

---

### Bước 5: Xác minh & Tổng kết Walkthrough

1. Đảm bảo 100% test cases có kết quả rõ ràng và nhất quán.
2. Kiểm tra tính toàn vẹn của các đường dẫn tương đối giữa file Test Run và file Bug.
3. Tạo báo cáo Walkthrough tổng hợp ma trận lỗi của tất cả các bản build.
