# backend/create_db.py
"""
Uruchom w terminalu z venv:
    py create_db.py
żeby utworzyć wszystkie tabele z models.py.
"""

import models      # musi być, by zarejestrować modele
from db import init_db, engine

print("🔧  create_db connecting to ->", engine.url)
init_db()
print("✅  Database tables created.")
