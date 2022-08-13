import os
from pathlib import Path


class Manager:
    def __init__(self):
        self.base_dir = Path(__file__).resolve().parent.parent

    def _has_special_char(self, text: str) -> bool:
        return any(c for c in text if not c.isalnum() and not c.isspace())

    def _validate_name(self, page_name: str) -> None:
        if " " in page_name:
            raise ValueError("Name cannot contain spaces.")

        if self._has_special_char(page_name):
            raise ValueError("Name cannot contain special characters.")

    def _create_stylesheets(self, new_app_directory: Path) -> None:
        with open(f"{new_app_directory}/styles/index.ts", "w") as init:
            code: str = """import { StyleSheet } from \"react-native\";

export const styles = StyleSheet.create({});
"""
            init.write(code)

    def _create_tsx_files(self, page_name, new_app_directory: Path) -> None:
        with open(f"{new_app_directory}/index.tsx", "w") as init:
            code: str = """function tempName(): JSX.Element {
    return <h1>tempName</h1>;
};
export default tempName;
"""
            init.write(code.replace("tempName", page_name))

    def _create_directories(self, new_app_directory: Path) -> None:
        if os.path.exists(new_app_directory):
            raise ValueError("Directory already exists.")

        os.makedirs(new_app_directory)
        os.makedirs(new_app_directory / "styles")

    def _create_files(self, page_name: str, parent_directory: str) -> None:
        app_directory = self.base_dir / "src" / parent_directory
        new_app_directory = Path(str(app_directory) + os.sep + page_name)

        self._create_directories(new_app_directory)
        self._create_tsx_files(page_name, new_app_directory)
        self._create_stylesheets(new_app_directory)

    def create_page(self, page_name: str) -> None:
        self._validate_name(page_name)
        self._create_files(page_name, "pages")

    def create_component(self, component_name: str) -> None:
        self._validate_name(component_name)
        self._create_files(component_name, "components")


def run(command) -> None:
    manager = Manager()

    if command == "startpage":
        page_name: str = input("New Name: ").strip()
        manager.create_page(page_name)
    elif command == "create_component":
        component_name: str = input("New Name: ").strip()
        manager.create_component(component_name)
    else:
        print("Unknown command: %s" % command)


if __name__ == "__main__":
    import sys

    if not len(sys.argv) > 1:
        print("Missing arguments")
        sys.exit(1)

    try:
        run(sys.argv[1])
    except KeyboardInterrupt:
        print("Aborted!")
