from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.product import Product
from app.utils.helpers import generate_slug, verify_admin_role

router = APIRouter()

# Create Product (Admin Only)
@router.post("/products/create")
def create_product(name: str, price_3ml: float = None, price_6ml: float = None, price_12ml: float = None, is_available: bool = True, db: Session = Depends(get_db), user_role: str = "user"):
    verify_admin_role(user_role)  # Only admins can create products

    slug = generate_slug(name)
    
    if db.query(Product).filter(Product.slug == slug).first():
        raise HTTPException(status_code=400, detail="Product with this name already exists.")

    new_product = Product(name=name, slug=slug, price_3ml=price_3ml, price_6ml=price_6ml, price_12ml=price_12ml, is_available=is_available)
    db.add(new_product)
    db.commit()
    db.refresh(new_product)
    return {"message": "Product created successfully", "product": new_product}

# Get All Products
@router.get("/products")
def get_products(db: Session = Depends(get_db)):
    products = db.query(Product).all()
    return {"products": products}

# Update Product (Admin Only)
@router.put("/products/update/{product_id}")
def update_product(product_id: int, name: str = None, price_3ml: float = None, price_6ml: float = None, price_12ml: float = None, is_available: bool = None, db: Session = Depends(get_db), user_role: str = "user"):
    verify_admin_role(user_role)

    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    if name:
        product.name = name
        product.slug = generate_slug(name)
    if price_3ml is not None:
        product.price_3ml = price_3ml
    if price_6ml is not None:
        product.price_6ml = price_6ml
    if price_12ml is not None:
        product.price_12ml = price_12ml
    if is_available is not None:
        product.is_available = is_available

    db.commit()
    db.refresh(product)
    return {"message": "Product updated successfully", "product": product}

# Delete Product (Admin Only)
@router.delete("/products/delete/{product_id}")
def delete_product(product_id: int, db: Session = Depends(get_db), user_role: str = "user"):
    verify_admin_role(user_role)

    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    db.delete(product)
    db.commit()
    return {"message": "Product deleted successfully"}
