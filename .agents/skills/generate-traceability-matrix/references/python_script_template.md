# Python Script Template - Generate RTM

Script Python mẫu để tự động parse test cases, test runs, bugs và tạo RTM.

## Cách dùng

1. Lưu script vào file tạm (ví dụ /tmp/generate_rtm.py hoặc thư mục scratch)
2. Chạy từ thư mục gốc dự án: `python3 /tmp/generate_rtm.py`
3. Kết quả tạo ra tại `tests/traceability-matrix/traceability-matrix.md`

## Script mẫu

```python
import os
import re
from collections import defaultdict

# ============================================================
# CẤU HÌNH — Điều chỉnh mapping theo dự án thực tế
# ============================================================
BASE = "."  # Thư mục gốc dự án (chạy script từ đây)

# Map module prefix của Bug ID -> tên thư mục trong tests/bugs/
BUG_MODULE_MAP = {
    "ADD": "addition",
    "SUB": "subtraction",
    "MUL": "multiplication",
    "DIV": "division",
    "CON": "concatenation",
    "INT": "integer-only",
    "ERR": "error-handling",
    "CLR": "clear",
    "GUI": "gui",
    "USA": "usability",
    "PERF": "performance",
    "SEC": "security",
    "BUILD": "build-selection",
}

# Map Result -> Status trong RTM
STATUS_MAP = {
    "Pass":     "Done",
    "Fail":     "Open",
    "Block":    "Blocked",
    "Not Run":  "Ready for Retest",
}

# ============================================================
# BƯỚC 1: Parse test cases -> requirement mapping
# ============================================================
tc_req_map = {}   # {tc_id: [req_ids]}
tc_file_map = {}  # {tc_id: relative_path_from_traceability_matrix}

tc_cases_dir = f"{BASE}/tests/test-cases"
for module_dir in sorted(os.listdir(tc_cases_dir)):
    module_path = os.path.join(tc_cases_dir, module_dir)
    if not os.path.isdir(module_path):
        continue
    for fname in sorted(os.listdir(module_path)):
        if not fname.endswith(".md"):
            continue
        tc_id = fname.replace(".md", "")
        with open(os.path.join(module_path, fname), encoding="utf-8") as f:
            content = f.read()
        # Parse ## Requirement ID section
        m = re.search(r'## Requirement ID\s*\n(.*?)(?:\n##|\Z)', content, re.DOTALL)
        if m:
            req_text = m.group(1).strip()
            req_ids = [r.strip() for r in re.split(r'[,\n]', req_text) if r.strip() and not r.strip().startswith('#')]
            tc_req_map[tc_id] = req_ids if req_ids else ["-"]
        else:
            tc_req_map[tc_id] = ["-"]
        tc_file_map[tc_id] = f"../test-cases/{module_dir}/{fname}"

# ============================================================
# BƯỚC 2: Parse test runs -> execution results
# ============================================================
executions = []  # [{tc_id, build, result, bug_id}]

tr_dir = f"{BASE}/tests/test-runs"
for tr_file in sorted(os.listdir(tr_dir)):
    if not tr_file.endswith(".md"):
        continue
    m = re.search(r'TR-(\d+)-', tr_file)
    if not m:
        continue
    build_num = int(m.group(1))
    with open(os.path.join(tr_dir, tr_file), encoding="utf-8") as f:
        content = f.read()
    for line in content.split("\n"):
        tc_match = re.search(r'(TC-[A-Z]+-\d+)', line)
        if not tc_match:
            continue
        tc_id = tc_match.group(1)
        result_match = re.search(r'\|\s*(Pass|Fail|Block|Not Run)\s*\|', line)
        result = result_match.group(1).strip() if result_match else "Not Run"
        bug_match = re.search(r'(BUG-[A-Z]+-\d+)', line)
        bug_id = bug_match.group(1) if bug_match else None
        executions.append({
            "tc_id": tc_id,
            "build": build_num,
            "result": result,
            "bug_id": bug_id,
        })

# ============================================================
# BƯỚC 3: Helper - Bug ID -> file path
# ============================================================
def get_bug_path(bug_id):
    m = re.match(r'BUG-([A-Z]+)-\d+', bug_id)
    if m:
        prefix = m.group(1)
        folder = BUG_MODULE_MAP.get(prefix, prefix.lower())
        return f"../bugs/{folder}/{bug_id}.md"
    return None

# ============================================================
# BƯỚC 4: Tính toán thống kê theo Requirement
# ============================================================
req_stats = defaultdict(lambda: {"tcs": set(), "pass": 0, "fail": 0, "block": 0, "not_run": 0})
for ex in executions:
    reqs = tc_req_map.get(ex["tc_id"], ["-"])
    for req in reqs:
        req_stats[req]["tcs"].add(ex["tc_id"])
        if ex["result"] == "Pass":
            req_stats[req]["pass"] += 1
        elif ex["result"] == "Fail":
            req_stats[req]["fail"] += 1
        elif ex["result"] == "Block":
            req_stats[req]["block"] += 1
        else:
            req_stats[req]["not_run"] += 1

total_execs = len(executions)
total_pass = sum(1 for e in executions if e["result"] == "Pass")
total_fail = sum(1 for e in executions if e["result"] == "Fail")
total_block = sum(1 for e in executions if e["result"] == "Block")
total_not_run = sum(1 for e in executions if e["result"] == "Not Run")

# ============================================================
# BƯỚC 5: Sắp xếp và tạo RTM rows
# ============================================================
executions.sort(key=lambda x: (
    tc_req_map.get(x["tc_id"], ["-"])[0],
    x["tc_id"],
    x["build"]
))

rows = []
for i, ex in enumerate(executions, 1):
    tc_id = ex["tc_id"]
    req = tc_req_map.get(tc_id, ["-"])[0]
    tc_link = f"[{tc_id}]({tc_file_map.get(tc_id, tc_id)})"
    bug_str = f"[{ex['bug_id']}]({get_bug_path(ex['bug_id'])})" if ex["bug_id"] else "-"
    status = STATUS_MAP.get(ex["result"], ex["result"])
    rows.append(f"| {i} | {req} | {tc_link} | Build-{ex['build']} | {ex['result']} | {bug_str} | {status} |")

# ============================================================
# BƯỚC 6: Tạo summary section
# ============================================================
num_tcs = len(tc_req_map)
num_reqs = len(req_stats)
num_builds = len(set(e["build"] for e in executions))

summary = f"# Traceability Matrix - traceability-matrix.md\n\n"
summary += f"## Tóm tắt coverage\n\n"
summary += f"Bảng ma trận truy vết yêu cầu (Requirements Traceability Matrix - RTM) tổng hợp liên kết 3 chiều giữa:\n"
summary += f"1. **Yêu cầu (Requirements)** từ đặc tả SRS.\n"
summary += f"2. **Ca kiểm thử (Test Cases)** từ `/tests/test-cases/` (gồm {num_tcs} test cases).\n"
summary += f"3. **Kết quả thực thi (Execution Results)** từ `/tests/test-runs/` qua {num_builds} bản build ({total_execs} lượt thực thi).\n\n"
summary += f"### Thống kê tổng quan\n\n"
summary += f"- **Tổng số Requirements**: {num_reqs}\n"
summary += f"- **Tổng số Test Cases**: {num_tcs}\n"
summary += f"- **Tổng số lượt thực thi**: {total_execs} ({num_tcs} TCs × {num_builds} builds)\n"
summary += f"- **Passed (Done)**: {total_pass} ({100*total_pass/total_execs:.1f}%)\n"
summary += f"- **Failed (Open)**: {total_fail} ({100*total_fail/total_execs:.1f}%)\n"
summary += f"- **Blocked**: {total_block} ({100*total_block/total_execs:.1f}%)\n"
summary += f"- **Not Run**: {total_not_run} ({100*total_not_run/total_execs:.1f}%)\n\n"
summary += f"### Bảng phân tích độ phủ theo Requirement\n\n"
summary += f"| Requirement ID | Số Test Cases | Số lần thực thi | Pass | Fail | Block | Tỷ lệ Pass |\n"
summary += f"|---|---|---|---|---|---|---|\n"

for req_id in sorted(req_stats.keys()):
    s = req_stats[req_id]
    n_tc = len(s["tcs"])
    total = s["pass"] + s["fail"] + s["block"] + s["not_run"]
    pass_rate = f"{100*s['pass']/total:.1f}%" if total > 0 else "0%"
    summary += f"| {req_id} | {n_tc} | {total} | {s['pass']} | {s['fail']} | {s['block']} | {pass_rate} |\n"

summary += f"\n---\n\n"
summary += f"## Bảng truy vết\n\n"
summary += f"| No. | Requirement | Test case | Build | Result | Bug issue | Status |\n"
summary += f"|---|---|---|---|---|---|---|\n"
summary += "\n".join(rows) + "\n"

# ============================================================
# BƯỚC 7: Ghi file output
# ============================================================
os.makedirs(f"{BASE}/tests/traceability-matrix", exist_ok=True)
output_path = f"{BASE}/tests/traceability-matrix/traceability-matrix.md"
with open(output_path, "w", encoding="utf-8") as f:
    f.write(summary)

print(f"Done! {len(rows)} rows written to {output_path}")
```
