"""Main application entry point."""

import os
import sys
from pathlib import Path

from dotenv import load_dotenv


def greet(name: str = "World") -> str:
    """Return a greeting message."""
    return f"Hello, {name}!"


def main() -> int:
    """Run the main application."""
    # Load environment variables from .env file
    load_dotenv()
    
    # Example: Get name from environment or use default
    name = os.getenv("APP_NAME", "Python App")
    
    print(greet(name))
    print(f"Python version: {sys.version}")
    print(f"Working directory: {Path.cwd()}")
    
    return 0


if __name__ == "__main__":
    sys.exit(main())