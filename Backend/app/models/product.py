from sqlalchemy import Column, Integer, String, Float, Boolean
from app.database import Base

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, nullable=False)
    slug = Column(String, unique=True, nullable=False)
    price_3ml = Column(Float, nullable=True)
    price_6ml = Column(Float, nullable=True)
    price_12ml = Column(Float, nullable=True)
    is_available = Column(Boolean, default=True)
