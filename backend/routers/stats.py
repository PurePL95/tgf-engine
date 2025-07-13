# backend/routers/stats.py
from fastapi import APIRouter, Depends
from sqlmodel import select
from db import get_session
from models import User

router = APIRouter(prefix="/stats", tags=["stats"])

@router.get("/users_count")
def users_count(session=Depends(get_session)):
    """Return total number of users."""
    count = len(session.exec(select(User)).all())
    return {"count": count}


@router.get("/online_count")
def online_count():
    """Return a dummy number of currently online players."""
    # In a real application this would track active sessions.
    return {"count": 0}
