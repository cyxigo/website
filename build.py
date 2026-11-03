#!/bin/python3
from pathlib import Path

# Yeah this is bad but works idk

LAYOUT = Path("src/layout")
PAGES = Path("src/pages")

for page in PAGES.iterdir():
    if not page.is_file():
        continue

    content = []
    out = Path(page.name)

    for line in page.read_text().splitlines(keepends=True):
        stripped = line.strip()

        if stripped.startswith("@_include "):
            name = stripped.removeprefix("@_include ").strip()
            content.append((LAYOUT / name).read_text())
        else:
            content.append(line)

    out.write_text("".join(content))
    print(page.name)
