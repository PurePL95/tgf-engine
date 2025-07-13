# backend/db.py
import os
from dotenv import load_dotenv
from sqlmodel import create_engine, SQLModel, Session

load_dotenv()  # wczytuje zmienne z .env

DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "postgresql://vallact_user:TwojeHaslo@localhost/vallact"
)

connect_args = {}
if DATABASE_URL.startswith("sqlite"):
    connect_args = {"check_same_thread": False}

engine = create_engine(DATABASE_URL, echo=True, connect_args=connect_args)

def get_session():
    with Session(engine) as session:
        yield session

def init_db():
    SQLModel.metadata.create_all(engine)
