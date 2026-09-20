# Traceability Matrix - [file name]

## Tóm tắt coverage

Bảng ma trận truy vết yêu cầu (Requirements Traceability Matrix - RTM) tổng hợp liên kết 3 chiều giữa:
1. **Yêu cầu (Requirements)** từ đặc tả SRS.
2. **Ca kiểm thử (Test Cases)** từ /tests/test-cases/.
3. **Kết quả thực thi (Execution Results)** từ /tests/test-runs/.
4. **Báo cáo lỗi (Bug Issues)** từ /tests/bugs/.

### Thống kê tổng quan độ phủ (Coverage Overview)

- **Tổng số Requirements được định nghĩa**: X requirements (Y Functional, Z Non-Functional)
- **Tỷ lệ bao phủ Requirements**: X% (X/Y requirements đều có test cases kiểm thử tương ứng)
- **Tổng số Test Cases**: X test cases
- **Tổng số lượt thực thi (Executions)**: X lượt (X test cases x X builds)
- **Passed (Done)**: X (X%)
- **Failed (Open)**: X (X%)
- **Blocked (Blocked)**: X (X%)
- **Not Run (Ready for Retest)**: X (X%)

### Bảng phân tích độ phủ theo Requirement

| Requirement ID | Loại yêu cầu | Mô tả yêu cầu | Số Test Cases | Số lần thực thi | Pass | Fail | Block | Tỷ lệ Pass |
|---|---|---|---|---|---|---|---|---|
| FR-XXX-001 | Functional | Mô tả ngắn | 0 | 0 | 0 | 0 | 0 | 0% |
| NFR-XXX-001 | Non-Functional | Mô tả ngắn | 0 | 0 | 0 | 0 | 0 | 0% |

---

## Bảng truy vết

| No. | Requirement | Test case | Build | Result | Bug issue | Status |
|---|---|---|---|---|---|---|
| 1 | FR-XXX-001 | [TC-XXX-001](../test-cases/module/TC-XXX-001.md) | Build-1 | Pass | - | Done |
| 2 | FR-XXX-001 | [TC-XXX-001](../test-cases/module/TC-XXX-001.md) | Build-2 | Fail | [BUG-XXX-001](../bugs/module/BUG-XXX-001.md) | Open |
| 3 | FR-XXX-001 | [TC-XXX-001](../test-cases/module/TC-XXX-001.md) | Build-3 | Block | - | Blocked |

---

**Trạng thái Status:**
- **Done** — TC Pass, requirement được thỏa mãn
- **Open** — TC Fail, có bug đang mở cần fix
- **Blocked** — TC không thể thực thi (môi trường, dependency, v.v.)
- **Ready for Retest** — TC chưa được chạy, chờ thực thi
