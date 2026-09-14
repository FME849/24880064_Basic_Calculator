# Ví dụ: Test Cases cho Basic Calculator

Đây là ví dụ thực tế về việc tạo test cases cho ứng dụng Basic Calculator từ SRS.

## SRS tóm tắt

- Ứng dụng web calculator cơ bản
- Chức năng: Add, Subtract, Multiply, Divide, Concatenate
- Input: 2 ô số (First number, Second number)
- Output: Ô Answer (read-only)
- Checkbox "Integers only" để làm tròn kết quả
- Nút Calculate và Clear
- Dropdown chọn Build (Prototype, 1-9)
- Kiểm tra input: báo lỗi nếu không phải số (trừ Concatenate)
- Kiểm tra chia cho 0

## Kết quả: 66 test cases, 13 modules

| Module | Viết tắt | Số TCs | Loại test | Kỹ thuật |
|--------|----------|--------|-----------|----------|
| addition | ADD | 8 | Functional | EP, BVA |
| subtraction | SUB | 6 | Functional | EP, BVA |
| multiplication | MUL | 6 | Functional | EP, BVA |
| division | DIV | 7 | Functional | EP, BVA |
| concatenation | CON | 5 | Functional | EP, BVA |
| integer-only | INT | 5 | Functional | EP |
| error-handling | ERR | 6 | Functional | EP, BVA |
| clear | CLR | 4 | Functional | EP |
| build-selection | BUILD | 3 | Functional | EP |
| gui | GUI | 5 | GUI Testing | Checklist |
| usability | USA | 4 | Usability | Exploratory, Heuristic, BVA |
| performance | PERF | 3 | Performance | Benchmark, Stress |
| security | SEC | 4 | Security | Injection, Fuzzing |

## Ví dụ test case

```markdown
# TC-ADD-001: Cộng hai số nguyên dương

## Requirement ID
FR-CALC-001

## Module / Test type / Technique
Addition / Functional / Equivalence Partitioning

## Preconditions
- User đang ở trang Basic Calculator
- Lần lượt chọn từng Build để test: 1, 2, 3, 4, 5, 6, 7, 8, 9

## Test data
| Field | Value |
|-------|-------|
| First number | 5 |
| Second number | 3 |
| Operation | Add |

## Test steps
1. Nhập "5" vào ô First number
2. Nhập "3" vào ô Second number
3. Chọn Operation là "Add"
4. Bấm nút "Calculate"

## Expected result
Ô Answer hiển thị kết quả là "8".

## Status / Related bugs
Not Run / None
```

## Ví dụ test case Security

```markdown
# TC-SEC-001: Nhập script tag vào input fields (XSS)

## Requirement ID
NFR-SEC-001

## Module / Test type / Technique
Security / Security Testing / Injection Testing

## Preconditions
- User đang ở trang Basic Calculator
- Lần lượt chọn từng Build để test: 1, 2, 3, 4, 5, 6, 7, 8, 9

## Test data
| Field | Value |
|-------|-------|
| First number | <script>alert('XSS')</script> |
| Second number | 5 |
| Operation | Concatenate |

## Test steps
1. Nhập `<script>alert('XSS')</script>` vào ô First number
2. Nhập "5" vào ô Second number
3. Chọn Operation là "Concatenate"
4. Bấm nút "Calculate"
5. Quan sát xem có popup alert xuất hiện không

## Expected result
- Không có popup alert xuất hiện (XSS attack bị chặn)
- Script tag được xử lý như chuỗi văn bản thông thường
- Ứng dụng không bị crash hoặc lỗi bảo mật

## Status / Related bugs
Not Run / None
```
