import sys, os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "src")))

from app import greet

def test_greet_returns_expected_message():
    assert greet("Team") == "Hello, Team! Welcome to CI/CD with Agile DevOps."