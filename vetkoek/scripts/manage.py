import os
from pathlib import Path


class Manager:
    def __init__(self):
        self.base_dir = Path(__file__).resolve().parent.parent

    def _has_special_char(self, text: str) -> bool:
        return any(c for c in text if not c.isalnum() and not c.isspace())

    def create_page(self, page_name: str) -> None:
        if " " in page_name:
            raise ValueError("Page name cannot contain spaces.")

        if self._has_special_char(page_name):
            raise ValueError("Page name cannot contain special characters.")

        app_directory = self.base_dir / "src" / "pages"
        new_app_directory = Path(str(app_directory) + os.sep + page_name)

        if os.path.exists(new_app_directory):
            raise ValueError("Directory already exists.")

        os.makedirs(new_app_directory)
        os.makedirs(new_app_directory / "styles")

        with open(f"{new_app_directory}/index.tsx", "w") as init:
            code: str = """function tempName(): JSX.Element {
    return <h1>tempName</h1>;
};

export default tempName;
"""
            init.write(code.replace("tempName", page_name))

    def create_component(self, component_name: str) -> None:
        if " " in component_name:
            raise ValueError("Component name cannot contain spaces.")

        if self._has_special_char(component_name):
            raise ValueError("Component name cannot contain special characters.")

        app_directory = self.base_dir / "src" / "components"
        new_app_directory = Path(str(app_directory) + os.sep + component_name)

        if os.path.exists(new_app_directory):
            raise ValueError("Directory already exists.")

        os.makedirs(new_app_directory)
        os.makedirs(new_app_directory / "styles")

        with open(f"{new_app_directory}/index.tsx", "w") as init:
            code: str = """function tempName(): JSX.Element {
        return <h1>tempName</h1>;
    };

    export default tempName;
    """
            init.write(code.replace("tempName", component_name))


def run(command) -> None:
    manager = Manager()

    if command == "startpage":
        page_name: str = input("New page name: ").strip()
        manager.create_page(page_name.capitalize())
    elif command == "create_component":
        component_name: str = input("New page name: ").strip()
        manager.create_component(component_name.capitalize())
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
