# Bug Report Template

Mỗi bug report file phải được lưu trong thư mục `tests/bugs/<module>/BUG-[Module]-[Number].md` và tuân thủ template sau:

```markdown
# Title: [BUG][<Module>] <Mô tả ngắn gọn về lỗi>

## Found by Test Case
<Mã các test cases phát hiện ra bug, ví dụ: TC-ERR-001, TC-ERR-002>

## Requirement liên quan
<Mã yêu cầu chức năng hoặc phi chức năng, ví dụ: FR-ERR-001>

## Severity / Priority
<Mức độ nghiêm trọng> / <Độ ưu tiên>
(Ví dụ: Blocker / P1, Critical / P1, Major / P2, Minor / P3, Trivial / P4)

## Environment
- Browser: <Trình duyệt, phiên bản>
- OS: <Hệ điều hành>
- URL: <Địa chỉ ứng dụng>
- Build: <Phiên bản/Build>

## Steps to reproduce
1. <Bước 1>
2. <Bước 2>
3. <Bước 3>
4. <Bước 4>

## Expected result
<Mô tả chi tiết kết quả đúng theo đặc tả yêu cầu>

## Actual result
<Mô tả hành vi sai lệch thực tế của hệ thống>

## Evidence
- Test assertion failed: <Chi tiết lỗi từ log kiểm thử tự động>
- <Ảnh chụp màn hình, console log hoặc trích đoạn mã nguồn gây lỗi>
```
