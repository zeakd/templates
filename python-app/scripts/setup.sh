#!/bin/bash

set -e

echo "🐍 Python App Setup"
echo "=================="

# Check if uv is installed
if ! command -v uv &> /dev/null; then
    echo "📦 Installing uv..."
    curl -LsSf https://astral.sh/uv/install.sh | sh
    echo "✅ uv installed successfully"
    echo ""
    echo "⚠️  Please restart your terminal or run: source ~/.bashrc (or ~/.zshrc)"
    echo "   Then run this script again."
    exit 0
fi

echo "✅ uv is already installed"

# Create virtual environment and install dependencies
echo ""
echo "📦 Setting up Python environment..."
uv venv
source .venv/bin/activate || source .venv/Scripts/activate

echo ""
echo "📦 Installing dependencies..."
uv pip install -e ".[dev]"

# Copy environment file if it doesn't exist
if [ ! -f .env ]; then
    echo ""
    echo "📄 Creating .env file from example..."
    cp .env.example .env
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "To activate the virtual environment, run:"
echo "  source .venv/bin/activate  # On Unix/macOS"
echo "  .venv\\Scripts\\activate     # On Windows"
echo ""
echo "To run the app:"
echo "  python -m app.main"
echo "  # or"
echo "  app  # if virtual environment is activated"
echo ""
echo "To run tests:"
echo "  pytest"
echo ""
echo "To run linting:"
echo "  ruff check ."
echo "  ruff format ."