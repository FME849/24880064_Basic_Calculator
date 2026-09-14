# Cấu trúc thư mục Test Cases

## Cấu trúc chuẩn

```text
tests/
└── test-cases/
    ├── <module-1>/
    │   ├── TC-<MODULE>-001.md
    │   ├── TC-<MODULE>-002.md
    │   └── ...
    ├── <module-2>/
    │   ├── TC-<MODULE>-001.md
    │   └── ...
    └── ...
```

## Quy tắc đặt tên thư mục

- Dùng **lowercase**
- Dùng dấu gạch ngang `-` thay cho khoảng trắng
- Tên thư mục phản ánh tên module/feature

### Ví dụ mapping tên thư mục → viết tắt module

| Thư mục | Viết tắt | Mô tả |
|---------|----------|-------|
| `addition/` | ADD | Phép cộng |
| `subtraction/` | SUB | Phép trừ |
| `multiplication/` | MUL | Phép nhân |
| `division/` | DIV | Phép chia |
| `login/` | LOGIN | Đăng nhập |
| `register/` | REG | Đăng ký |
| `checkout/` | CHK | Thanh toán |
| `error-handling/` | ERR | Xử lý lỗi |
| `build-selection/` | BUILD | Chọn build |
| `gui/` | GUI | Giao diện |
| `usability/` | USA | Tính dễ dùng |
| `performance/` | PERF | Hiệu năng |
| `security/` | SEC | Bảo mật |
| `integer-only/` | INT | Số nguyên |
| `concatenation/` | CON | Nối chuỗi |
| `clear/` | CLR | Xóa/Reset |

## Quy tắc đặt tên file

```
TC-[MODULE]-[NUMBER].md
```

- `TC`: prefix cố định (Test Case)
- `[MODULE]`: viết tắt viết HOA của module (2-5 ký tự)
- `[NUMBER]`: số thứ tự 3 chữ số, bắt đầu từ 001

### Ví dụ

```
TC-ADD-001.md    → Test case đầu tiên của module Addition
TC-LOGIN-003.md  → Test case thứ 3 của module Login
TC-SEC-002.md    → Test case thứ 2 của module Security
```
