# Python App Template - Claude Code Guide

This guide helps AI assistants work effectively with this Python application template.

## Quick Reference

### Essential Commands
```bash
# Setup
./scripts/setup.sh              # One-command setup
source .venv/bin/activate       # Activate environment

# Development
python -m app.main             # Run application
pytest                         # Run tests
ruff check .                   # Lint code
ruff format .                  # Format code
mypy src                       # Type check

# Dependencies
uv pip install package-name    # Add package
uv pip list --outdated        # Check updates
```

## Template Philosophy

This template prioritizes:
1. **Speed**: uv for fast package management
2. **Simplicity**: Minimal configuration, maximum productivity
3. **Modernity**: Latest Python features and tooling
4. **Quality**: Built-in linting, formatting, and testing

## Working with This Template

### Understanding the Structure

```
src/app/          # Application code (src-layout)
tests/            # Test files (pytest auto-discovery)
scripts/          # Development scripts
pyproject.toml    # Single source of truth for configuration
```

### Key Technologies

- **uv**: Rust-based package manager (10-100x faster than pip)
- **Ruff**: Fast Python linter/formatter (replaces Black, isort, flake8)
- **pytest**: Feature-rich testing framework
- **mypy**: Static type checker
- **python-dotenv**: Environment management

## Common Tasks

### Adding New Features

1. Create new modules in `src/app/`
2. Add type hints to all functions
3. Write corresponding tests in `tests/`
4. Update entry point in `main.py` if needed

### Adding Dependencies

```bash
# Runtime dependency
uv pip install requests
# Add to pyproject.toml dependencies section

# Dev dependency
uv pip install pytest-mock
# Add to pyproject.toml dev dependencies
```

### Creating New Modules

```python
# src/app/new_module.py
"""Module description."""

from typing import Optional

def process_data(input: str) -> Optional[dict]:
    """Process input data.
    
    Args:
        input: Raw input string
        
    Returns:
        Processed data or None if invalid
    """
    # Implementation
```

### Writing Tests

```python
# tests/test_new_module.py
import pytest
from app.new_module import process_data

def test_process_data_valid():
    """Test processing valid data."""
    result = process_data("valid input")
    assert result is not None
    assert "key" in result

def test_process_data_invalid():
    """Test processing invalid data."""
    result = process_data("")
    assert result is None
```

## Best Practices

### Code Style
- Let Ruff handle formatting (don't manually format)
- Follow PEP 8 with Ruff's modern interpretations
- Use descriptive variable names
- Keep functions focused and small

### Type Hints
```python
# Good
def calculate(values: list[float]) -> float:
    return sum(values) / len(values)

# Better
from typing import Sequence

def calculate(values: Sequence[float]) -> float:
    if not values:
        raise ValueError("Cannot calculate average of empty sequence")
    return sum(values) / len(values)
```

### Error Handling
```python
# Use specific exceptions
class DataValidationError(ValueError):
    """Raised when input data is invalid."""

# Provide context
try:
    result = process_data(input_data)
except DataValidationError as e:
    logger.error(f"Invalid data: {e}")
    return None
```

## Configuration Management

### Environment Variables
- Define in `.env` file (never commit)
- Document in `.env.example`
- Access with defaults:
  ```python
  import os
  debug = os.getenv("DEBUG", "false").lower() == "true"
  ```

### pyproject.toml
- Single source of configuration
- Follows PEP 621 standards
- Tools configured in `[tool.*]` sections

## Quality Checks

Always run before completing work:
```bash
# Format code
ruff format .

# Check linting
ruff check .

# Type checking
mypy src

# Run tests
pytest

# All together
ruff format . && ruff check . && mypy src && pytest
```

## Common Patterns

### CLI Arguments
```python
import argparse

def parse_args():
    parser = argparse.ArgumentParser(description="App description")
    parser.add_argument("--verbose", "-v", action="store_true")
    return parser.parse_args()
```

### Configuration Loading
```python
from pathlib import Path
from dotenv import load_dotenv

# Load from specific file
env_path = Path(__file__).parent.parent / ".env"
load_dotenv(env_path)
```

### Logging Setup
```python
import logging

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)
```

## Troubleshooting

### Import Errors
- Ensure virtual environment is activated
- Check PYTHONPATH includes src
- Verify __init__.py files exist

### Type Checking Issues
- Install type stubs: `uv pip install types-requests`
- Use `# type: ignore` sparingly with explanation
- Check mypy configuration in pyproject.toml

### Test Discovery
- Test files must start with `test_`
- Test functions must start with `test_`
- Ensure tests/ is in pytest testpaths

## Performance Tips

- Use generators for large datasets
- Profile before optimizing
- Consider `functools.lru_cache` for expensive operations
- Use `__slots__` for classes with many instances

## Security Considerations

- Never hardcode secrets
- Validate all user inputs
- Use `secrets` module for tokens
- Keep dependencies updated
- Run `uv pip install --upgrade` regularly

## When Updating the Template

1. Check all dependencies are latest stable
2. Run full test suite
3. Verify setup script works on clean system
4. Update documentation if needed
5. Test on Python 3.12+

## Important Notes

- This template uses **src-layout** (code in `src/` directory)
- Minimum Python version is **3.12** for latest features
- **uv** is required (setup script installs if missing)
- All configuration is in **pyproject.toml**
- Follow **type hints** everywhere for better tooling support

Remember: Keep it simple, fast, and modern!