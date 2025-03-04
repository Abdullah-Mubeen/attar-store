from pydantic import BaseModel, Field
from typing import Optional

class ProductBase(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    price_3ml: Optional[float] = None
    price_6ml: Optional[float] = None
    price_12ml: Optional[float] = None
    is_available: Optional[bool] = True

class ProductCreate(ProductBase):
    pass  # All fields from ProductBase are required for creation

class ProductUpdate(ProductBase):
    name: Optional[str] = None  # Allow partial updates

class ProductResponse(ProductBase):
    id: int
    slug: str

    class Config:
        from_attributes = True  # Enable ORM mode
