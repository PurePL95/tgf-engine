# Vallact Engine

This project contains a simple FastAPI backend and React frontend.

## Backend setup

Use Python 3.11 and install dependencies:

```bash
pip install -r backend/requirements.txt
```

The database tables are created automatically when the app starts. You can run the API locally with:

```bash
uvicorn backend.main:app
```

## Running tests

Install dev dependencies and run pytest:

```bash
pip install httpx<0.25 pytest python-multipart
pytest
```
