# Python App Template

A modern Python application template emphasizing simplicity, speed, and best practices. Built around **uv** for ultra-fast dependency management and **Ruff** for modern Python tooling.

## Core Concept

This template provides a minimal yet complete foundation for Python applications with:
- **Lightning-fast development workflow** using uv
- **Modern Python tooling** with Ruff and mypy
- **Zero-configuration setup** with a single script
- **Production-ready structure** following Python packaging standards

## Features

- 🚀 **uv** for fast package management
- 🧹 **Ruff** for linting and formatting
- 🧪 **pytest** for testing
- 📝 Type hints throughout
- 🔧 Simple configuration with pyproject.toml
- 🌍 Environment variable support

## Requirements

- Python 3.12 or higher

## Quick Start

1. Clone or copy this template:
```bash
cp -r python-app my-new-project
cd my-new-project
```

2. Run the setup script:
```bash
./scripts/setup.sh
```

This will:
- Install uv if not already installed
- Create a virtual environment
- Install all dependencies
- Set up your .env file

3. Activate the virtual environment:
```bash
source .venv/bin/activate  # On Unix/macOS
# or
.venv\Scripts\activate     # On Windows
```

4. Run the application:
```bash
python -m app.main
# or simply
app
```

## Development

### Running Tests
```bash
pytest
# or with coverage
pytest --cov=app
```

### Linting and Formatting
```bash
# Check code
ruff check .

# Format code
ruff format .
```

### Type Checking
```bash
mypy src
```

## Project Structure

```
python-app/
├── src/
│   └── app/
│       ├── __init__.py
│       └── main.py       # Application entry point
├── tests/
│   └── test_main.py      # Test files
├── scripts/
│   └── setup.sh          # Setup script
├── .env.example          # Environment variables template
├── .gitignore           # Git ignore patterns
├── pyproject.toml       # Project configuration
└── README.md            # This file
```

## Configuration

- Edit `pyproject.toml` to update project metadata and dependencies
- Copy `.env.example` to `.env` and update values as needed
- Modify `src/app/main.py` to build your application

## Adding Dependencies

```bash
# Add a runtime dependency
uv pip install package-name
# Then add it to pyproject.toml dependencies

# Add a development dependency
uv pip install --dev package-name
# Then add it to pyproject.toml [project.optional-dependencies] dev section
```

## License

MIT