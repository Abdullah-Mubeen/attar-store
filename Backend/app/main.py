from fastapi import FastAPI
from app.database import engine, Base
from app.routes import product_routes

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Jameel Fragrance API", description="Admin-based product management system")

# Include Routers
app.include_router(product_routes.router)

@app.get("/")
def home():
    return {"message": "Welcome to Jameel Fragrance API!"}
