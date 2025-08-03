"""Tests for the main module."""

from app.main import greet, main


def test_greet_default():
    """Test greet function with default argument."""
    assert greet() == "Hello, World!"


def test_greet_custom():
    """Test greet function with custom name."""
    assert greet("Python") == "Hello, Python!"


def test_main(capsys, monkeypatch):
    """Test main function output."""
    # Set environment variable for test
    monkeypatch.setenv("APP_NAME", "Test App")
    
    # Run main function
    exit_code = main()
    
    # Check exit code
    assert exit_code == 0
    
    # Capture output
    captured = capsys.readouterr()
    
    # Check output contains expected strings
    assert "Hello, Test App!" in captured.out
    assert "Python version:" in captured.out
    assert "Working directory:" in captured.out