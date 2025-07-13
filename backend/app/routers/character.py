import os
from uuid import uuid4
from fastapi import APIRouter, UploadFile, File, Form, HTTPException, Depends, status
from sqlmodel import Session, select

from ..models.character import Character
from ..schemas.character import CharacterRead
from db import get_session
from security import get_current_user

AVATAR_DIR = os.path.join(os.path.dirname(__file__), "..", "static", "avatars")
os.makedirs(AVATAR_DIR, exist_ok=True)

router = APIRouter(prefix="/characters", tags=["characters"])

@router.post("/", response_model=CharacterRead, status_code=status.HTTP_201_CREATED)
async def create_character(
    name: str = Form(...),
    race: str = Form(...),
    class_name: str = Form(..., alias="class"),
    gender: str = Form(...),
    avatar: UploadFile = File(...),
    current_username: str = Depends(get_current_user),
    session: Session = Depends(get_session),
):
    if avatar.content_type not in ["image/png", "image/jpeg"]:
        raise HTTPException(status_code=400, detail="Avatar must be PNG or JPG")
    contents = await avatar.read()
    if len(contents) > 2 * 1024 * 1024:
        raise HTTPException(status_code=400, detail="Avatar too large")
    filename = f"{uuid4()}.{avatar.filename.split('.')[-1]}"
    file_path = os.path.join(AVATAR_DIR, filename)
    with open(file_path, "wb") as f:
        f.write(contents)

    from models import User
    user = session.exec(select(User).where(User.username == current_username)).one()

    character = Character(
        user_id=user.id,
        name=name,
        race=race,
        class_name=class_name,
        gender=gender,
        avatar_url=f"/static/avatars/{filename}",
    )
    session.add(character)
    session.commit()
    session.refresh(character)
    return character
