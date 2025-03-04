from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordRequestForm
from app.database import SessionLocal, get_db
from app.models.user import User
from app.utils.security import verify_password, get_password_hash, create_access_token

router = APIRouter()

@router.post("/register")
def register_admin(username: str, email: str, password: str, db: Session = Depends(get_db)):
    existing_user = db.query(User).filter((User.username == username) | (User.email == email)).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Username or email already exists")
    
    hashed_password = get_password_hash(password)
    admin_user = User(username=username, email=email, password_hash=hashed_password, is_admin=True)
    db.add(admin_user)
    db.commit()
    return {"message": "Admin registered successfully"}

@router.post("/login")
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == form_data.username).first()
    if not user or not verify_password(form_data.password, user.password_hash):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    access_token = create_access_token({"sub": user.username, "admin": user.is_admin})
    return {"access_token": access_token, "token_type": "bearer"}
