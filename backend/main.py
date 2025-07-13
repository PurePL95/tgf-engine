# backend/main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# importujemy routery
from routers.users import router as users_router
from routers.stats import router as stats_router

# definiujemy aplikację **PRZED** użyciem app.include_router(...)
app = FastAPI()

# konfiguracja CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],      # DEV: dowolny origin; w prod zmień na adres frontu
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# montujemy wszystkie routery
app.include_router(users_router)
app.include_router(stats_router)

# root
@app.get("/")
def root():
    return {"message": "Hello Vallact!"}
