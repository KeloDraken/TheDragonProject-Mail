import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent


def has_special_char(text: str) -> bool:
    return any(c for c in text if not c.isalnum() and not c.isspace())


def start_page_command(app_name: str):
    if " " in app_name:
        raise ValueError("App name cannot contain spaces.")

    if has_special_char(app_name):
        raise ValueError("App name cannot contain special characters.")

    app_directory = BASE_DIR / "src" / "pages"
    new_app_directory = Path(str(app_directory) + os.sep + app_name)

    if os.path.exists(new_app_directory):
        raise ValueError("Directory already exists.")

    os.makedirs(new_app_directory)
    os.makedirs(new_app_directory / "styles")

    with open(f"{new_app_directory}/index.tsx", "w") as init:
        code: str = """function tempName(): JSX.Element {
  return <h1>Created tempName</h1>;
};

export default tempName;
"""
        init.write(code.replace("tempName", app_name))


if __name__ == "__main__":
    import sys

    if not len(sys.argv) > 1:
        print("Missing arguments")
        sys.exit(1)

    command: str = sys.argv[1]

    if command == "startapp":
        app_name: str = input("New page name: ").strip()
        start_page_command(app_name)
    else:
        print("Unknown command: %s" % command)
