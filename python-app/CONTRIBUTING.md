# Contributing to Python App Template

This document provides guidelines for contributing to and working with this Python application template.

## Template Architecture

### Core Technologies

- **uv**: Ultra-fast Python package manager (Rust-based)
- **Ruff**: All-in-one Python linter and formatter (replaces Black, isort, and others)
- **pytest**: Modern testing framework with extensive plugin ecosystem
- **mypy**: Static type checker for Python
- **python-dotenv**: Environment variable management

### Project Structure

```
python-app/
├── src/                    # Source code directory (follows src-layout)
│   └── app/               # Main application package
│       ├── __init__.py    # Package initialization
│       └── main.py        # Entry point with CLI integration
├── tests/                 # Test directory (pytest auto-discovery)
│   └── test_main.py       # Test files prefixed with test_
├── scripts/               # Development and setup scripts
│   └── setup.sh          # One-command setup script
├── .env.example          # Environment template (copy to .env)
├── .gitignore           # Git ignore patterns
├── pyproject.toml       # Modern Python project configuration
└── README.md            # User-facing documentation
```

## Development Workflow

### Initial Setup

1. **Environment Setup**:
   ```bash
   ./scripts/setup.sh
   ```
   This script:
   - Checks for uv installation (installs if missing)
   - Creates a Python 3.12+ virtual environment
   - Installs all dependencies (including dev dependencies)
   - Copies .env.example to .env if not exists

2. **Virtual Environment Activation**:
   ```bash
   source .venv/bin/activate  # Unix/macOS
   .venv\Scripts\activate     # Windows
   ```

### Code Quality Standards

#### Type Hints
- All functions must have type hints for parameters and return values
- Use `from __future__ import annotations` when needed
- Configure mypy with strict settings in pyproject.toml

#### Code Style
- Ruff handles all formatting and linting
- Line length: 88 characters (Black standard)
- Target Python version: 3.12+
- Import sorting: Automatic with Ruff

#### Testing
- Write tests for all new functionality
- Test files must start with `test_`
- Use pytest fixtures for shared setup
- Aim for high code coverage

### Common Tasks

#### Running the Application
```bash
python -m app.main  # Direct module execution
app                 # Using setuptools entry point
```

#### Running Tests
```bash
pytest                    # Run all tests
pytest -v                # Verbose output
pytest --cov=app         # With coverage report
pytest -k "test_name"    # Run specific test
```

#### Code Quality Checks
```bash
ruff check .             # Lint code
ruff format .            # Format code
mypy src                 # Type checking
```

#### Dependency Management
```bash
# Add runtime dependency
uv pip install package-name
# Then add to pyproject.toml [project.dependencies]

# Add development dependency
uv pip install package-name
# Then add to pyproject.toml [project.optional-dependencies.dev]

# Update all dependencies
uv pip install --upgrade -r pyproject.toml
```

## Configuration Details

### pyproject.toml Structure

```toml
[project]
# Core metadata
name = "python-app"
version = "0.1.0"
requires-python = ">=3.12"

[project.optional-dependencies]
# Development dependencies group
dev = ["pytest", "ruff", "mypy", ...]

[project.scripts]
# Console scripts entry points
app = "app.main:main"

[tool.ruff]
# Ruff configuration
line-length = 88
target-version = "py312"

[tool.mypy]
# Type checking configuration
python_version = "3.12"
disallow_untyped_defs = true

[tool.pytest.ini_options]
# Test discovery configuration
testpaths = ["tests"]
pythonpath = ["src"]
```

### Environment Variables

- Store in `.env` file (never commit this)
- Use `.env.example` as template
- Access via `os.getenv()` with defaults
- Load with `python-dotenv`

## Best Practices

### Code Organization
- Follow src-layout for better packaging
- Keep modules focused and single-purpose
- Use descriptive names for functions and variables
- Document complex logic with docstrings

### Error Handling
- Use specific exception types
- Provide helpful error messages
- Handle edge cases gracefully
- Return appropriate exit codes

### Performance
- Profile before optimizing
- Use generators for large datasets
- Consider async for I/O-bound operations
- Cache expensive computations

### Security
- Never commit secrets or API keys
- Validate all user inputs
- Use environment variables for configuration
- Keep dependencies updated

## Updating the Template

When updating this template:

1. **Check for Updates**:
   ```bash
   # Check outdated packages
   uv pip list --outdated
   
   # Update specific package
   uv pip install --upgrade package-name
   ```

2. **Update pyproject.toml**:
   - Update version constraints
   - Add new dependencies
   - Update tool configurations

3. **Test Thoroughly**:
   - Run all tests
   - Check linting passes
   - Verify type checking
   - Test on fresh environment

4. **Update Documentation**:
   - Update README if APIs change
   - Document new features
   - Update this CONTRIBUTING.md

## Common Issues and Solutions

### Virtual Environment Issues
- Ensure Python 3.12+ is installed
- Delete .venv and recreate if corrupted
- Check uv is in PATH

### Import Errors
- Verify src is in PYTHONPATH
- Check package structure
- Ensure __init__.py files exist

### Type Checking Errors
- Install type stubs for third-party packages
- Use `# type: ignore` sparingly
- Check mypy configuration

## AI-Specific Guidelines

When an AI agent works with this template:

1. **Always use latest stable versions** when adding dependencies
2. **Follow the established patterns** in the codebase
3. **Maintain consistency** with existing code style
4. **Update tests** when modifying functionality
5. **Run quality checks** before finalizing changes
6. **Document significant changes** in code comments
7. **Preserve the template's simplicity** - avoid over-engineering
8. **Test in isolation** - ensure template works standalone
9. **Consider cross-platform compatibility** (Windows, macOS, Linux)
10. **Keep the core concept intact** - fast, simple, modern Python development

## Version Policy

- Python: Minimum 3.12 (latest stable features)
- Dependencies: Latest stable versions
- Update regularly for security patches
- Document breaking changes clearly