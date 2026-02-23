from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, text
from dotenv import load_dotenv
import os

load_dotenv(r"C:\home\programowanie\fullstack\hello-fullstack\backend\.env")

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

engine = create_engine(os.getenv("DATABASE_URL"))

@app.get("/hello")
def hello():
    return {"message": "Hello from FastAPI!"}

@app.get("/notes")
def get_notes():
    with engine.connect() as conn:
        result = conn.execute(text("SELECT * FROM notes"))
        notes = [dict(row._mapping) for row in result]
    return notes

