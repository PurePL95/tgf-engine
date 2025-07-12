# backend/models.py
from typing import Optional
from sqlmodel import SQLModel, Field

class UserCreate(SQLModel):
    username: str
    email: str
    password: str

class User(SQLModel, table=True):
    __tablename__ = "users"

    id: Optional[int] = Field(default=None, primary_key=True)
    username: str     = Field(index=True, max_length=50)
    email: str        = Field(unique=True, max_length=100)
    password_hash: str
    level: int        = Field(default=1)
    hp: int           = Field(default=100)
    ap: int           = Field(default=50)
    exp: int          = Field(default=0)
