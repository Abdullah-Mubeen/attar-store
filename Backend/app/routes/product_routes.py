from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.product import Product
from app.schemas.product import ProductCreate, ProductUpdate, ProductResponse
from app.utils.helpers import generate_slug, verify_admin_role

router = APIRouter()

# Create Product (Admin Only)
@router.post("/products/create", response_model=ProductResponse)
def create_product(product_data: ProductCreate, db: Session = Depends(get_db), user_role: str = "user"):
    verify_admin_role(user_role)

    slug = generate_slug(product_data.name)
    
    if db.query(Product).filter(Product.slug == slug).first():
        raise HTTPException(status_code=400, detail="Product with this name already exists.")

    new_product = Product(**product_data.model_dump(), slug=slug)
    db.add(new_product)
    db.commit()
    db.refresh(new_product)
    return new_product

# Get All Products
@router.get("/products", response_model=list[ProductResponse])
def get_products(db: Session = Depends(get_db)):
    return db.query(Product).all()

# Update Product (Admin Only)
@router.put("/products/update/{product_id}", response_model=ProductResponse)
def update_product(product_id: int, product_data: ProductUpdate, db: Session = Depends(get_db), user_role: str = "user"):
    verify_admin_role(user_role)

    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    for field, value in product_data.model_dump(exclude_unset=True).items():
        setattr(product, field, value)

    if product_data.name:
        product.slug = generate_slug(product_data.name)

    db.commit()
    db.refresh(product)
    return product

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
