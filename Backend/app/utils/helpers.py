from slugify import slugify
from fastapi import HTTPException, Depends
from app.database import SessionLocal
from app.models.product import Product

# Generate slug from product name
def generate_slug(name: str):
    return slugify(name)

# Admin authentication function
def verify_admin_role(user_role: str):
    if user_role != "admin":
        raise HTTPException(status_code=403, detail="Access denied. Admins only.")
