import os
import pathlib
import sys
from fastapi.testclient import TestClient

BACKEND_DIR = pathlib.Path(__file__).resolve().parents[1]
sys.path.insert(0, str(BACKEND_DIR))

TEST_DB = BACKEND_DIR / "test.db"
os.environ["DATABASE_URL"] = f"sqlite:///{TEST_DB}"

if TEST_DB.exists():
    TEST_DB.unlink()

import db
import main
from db import init_db
from models import User

init_db()

client = TestClient(main.app)


def test_create_character(tmp_path):
    # create a user and token
    client.post(
        "/users/",
        json={"username": "bob", "email": "bob@example.com", "password": "secret"},
    )
    res = client.post(
        "/users/login",
        data={"username": "bob", "password": "secret"},
        headers={"Content-Type": "application/x-www-form-urlencoded"},
    )
    token = res.json()["access_token"]

    avatar_file = tmp_path / "avatar.png"
    avatar_file.write_bytes(b"dummy")

    with avatar_file.open("rb") as f:
        response = client.post(
            "/characters/",
            data={
                "name": "Hero",
                "race": "Human",
                "class": "Warrior",
                "gender": "Male",
            },
            files={"avatar": ("avatar.png", f, "image/png")},
            headers={"Authorization": f"Bearer {token}"},
        )
    assert response.status_code == 201
    data = response.json()
    assert data["name"] == "Hero"
    assert data["avatar_url"].startswith("/static/avatars/")
