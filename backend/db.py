# backend/db.py
import os
from dotenv import load_dotenv
from sqlmodel import create_engine, SQLModel, Session

load_dotenv()  # wczytuje zmienne z .env

DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "postgresql://vallheru_user:TwojeHaslo@localhost/vallheru"
)

engine = create_engine(DATABASE_URL, echo=True)

def get_session():
    with Session(engine) as session:
        yield session

def init_db():
    SQLModel.metadata.create_all(engine)
