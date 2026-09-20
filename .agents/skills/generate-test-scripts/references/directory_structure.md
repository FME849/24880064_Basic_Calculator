# Cấu trúc thư mục Test Scripts (Playwright)

## 1. Cấu trúc chuẩn

```text
tests/
├── test-cases/                       # Danh sách test cases nguồn
│   ├── <module-1>/
│   │   ├── TC-<MODULE>-001.md
│   │   └── ...
│   └── <module-2>/
│       └── ...
└── test-scripts/                     # Scripts tự động hóa Playwright
    ├── package.json                  # Dependencies & test commands
    ├── playwright.config.ts          # Cấu hình Playwright
    ├── tsconfig.json                 # Cấu hình TypeScript
    ├── pages/                        # Thư mục Page Object Model (POM)
    │   └── <App>Page.ts              # Class đóng gói UI locators & methods
    ├── <module-1>/                   # Mirror tên thư mục từ test-cases
    │   └── <module-1>.spec.ts        # Spec file chứa các test cases tự động
    ├── <module-2>/
    │   └── <module-2>.spec.ts
    └── ...
```

## 2. Quy tắc đặt tên

- **Thư mục module**: Trùng với thư mục trong `tests/test-cases/` (dùng lowercase, phân cách bằng `-`).
- **File spec**: `<module>.spec.ts` (ví dụ: `addition.spec.ts`, `error-handling.spec.ts`).
- **File POM**: `<TênỨngDụng>Page.ts` đặt trong thư mục `pages/`.
- **Tên ca kiểm thử trong code**: Phải chứa mã ID để dễ tra cứu:
  ```typescript
  test('TC-ADD-001: Cộng hai số nguyên dương', async () => { ... });
  ```

## 3. Mapping giữa Test Case và Spec

| Thư mục Test Case | File Spec Tương Ứng | Số lượng TCs |
|---|---|---|
| `tests/test-cases/addition/` | `tests/test-scripts/addition/addition.spec.ts` | TC-ADD-001 -> 008 |
| `tests/test-cases/subtraction/` | `tests/test-scripts/subtraction/subtraction.spec.ts` | TC-SUB-001 -> 006 |
| `tests/test-cases/multiplication/` | `tests/test-scripts/multiplication/multiplication.spec.ts` | TC-MUL-001 -> 006 |
| `tests/test-cases/division/` | `tests/test-scripts/division/division.spec.ts` | TC-DIV-001 -> 007 |
| `tests/test-cases/concatenation/` | `tests/test-scripts/concatenation/concatenation.spec.ts` | TC-CON-001 -> 005 |
| `tests/test-cases/integer-only/` | `tests/test-scripts/integer-only/integer-only.spec.ts` | TC-INT-001 -> 005 |
| `tests/test-cases/error-handling/` | `tests/test-scripts/error-handling/error-handling.spec.ts` | TC-ERR-001 -> 006 |
| `tests/test-cases/clear/` | `tests/test-scripts/clear/clear.spec.ts` | TC-CLR-001 -> 004 |
| `tests/test-cases/build-selection/` | `tests/test-scripts/build-selection/build-selection.spec.ts` | TC-BUILD-001 -> 003 |
| `tests/test-cases/gui/` | `tests/test-scripts/gui/gui.spec.ts` | TC-GUI-001 -> 005 |
| `tests/test-cases/usability/` | `tests/test-scripts/usability/usability.spec.ts` | TC-USA-001 -> 004 |
| `tests/test-cases/performance/` | `tests/test-scripts/performance/performance.spec.ts` | TC-PERF-001 -> 003 |
| `tests/test-cases/security/` | `tests/test-scripts/security/security.spec.ts` | TC-SEC-001 -> 004 |
