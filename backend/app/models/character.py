from typing import Optional
from sqlmodel import SQLModel, Field
from sqlalchemy import Column, String

class Character(SQLModel, table=True):
    __tablename__ = "characters"

    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(foreign_key="users.id")
    name: str = Field(index=True, max_length=50)
    race: str
    class_name: str = Field(sa_column=Column("class", String))
    gender: str
    level: int = Field(default=1)
    exp: int = Field(default=0)
    hp: int = Field(default=100)
    ap: int = Field(default=50)
    avatar_url: Optional[str] = None
