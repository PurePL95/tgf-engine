# backend/routers/stats.py
from fastapi import APIRouter, Depends
from sqlmodel import select
from db import get_session
from models import User

router = APIRouter(prefix="/stats", tags=["stats"])

@router.get("/users_count")
def users_count(session=Depends(get_session)):
    count = session.exec(select(User)).count()
    return {"count": count}
