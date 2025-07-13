# backend/main.py

import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from db import init_db

# importujemy routery
from routers.users import router as users_router
from routers.stats import router as stats_router
from app.routers.character import router as character_router
from fastapi.staticfiles import StaticFiles

# definiujemy aplikację **PRZED** użyciem app.include_router(...)
app = FastAPI()

# ensure database tables exist
init_db()

# konfiguracja CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],      # DEV: dowolny origin; w prod zmień na adres frontu
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/static", StaticFiles(directory=os.path.join(os.path.dirname(__file__), "app", "static")), name="static")

# montujemy wszystkie routery
app.include_router(users_router)
app.include_router(stats_router)
app.include_router(character_router)

# root
@app.get("/")
def root():
    return {"message": "Hello Vallact!"}
