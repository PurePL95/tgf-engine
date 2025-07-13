import os
import pathlib
import sys
from fastapi.testclient import TestClient

# ensure backend modules can be imported as top-level packages
BACKEND_DIR = pathlib.Path(__file__).resolve().parents[1]
sys.path.insert(0, str(BACKEND_DIR))

# use SQLite database for tests
TEST_DB = BACKEND_DIR / "test.db"
os.environ["DATABASE_URL"] = f"sqlite:///{TEST_DB}"

# remove previous test database if exists
if TEST_DB.exists():
    TEST_DB.unlink()

import db
import main
from db import init_db

# initialize tables
init_db()

client = TestClient(main.app)

def test_create_user():
    response = client.post(
        "/users/",
        json={"username": "alice", "email": "alice@example.com", "password": "secret"},
    )
    assert response.status_code == 201
    data = response.json()
    assert data["username"] == "alice"
    assert data["email"] == "alice@example.com"
    assert data["password_hash"] != "secret"

def test_users_count():
    response = client.get("/stats/users_count")
    assert response.status_code == 200
    assert response.json() == {"count": 1}


def test_online_count():
    response = client.get("/stats/online_count")
    assert response.status_code == 200
    assert response.json() == {"count": 0}
