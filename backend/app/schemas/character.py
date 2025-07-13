from typing import Optional
from pydantic import BaseModel

class CharacterRead(BaseModel):
    id: int
    user_id: int
    name: str
    race: str
    class_name: str
    gender: str
    level: int
    exp: int
    hp: int
    ap: int
    avatar_url: Optional[str]

    class Config:
        orm_mode = True
