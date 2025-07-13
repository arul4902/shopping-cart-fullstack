# 🛒 Shopping Cart – Full Stack Web Application

A complete and elegant shopping cart system developed as part of a full-stack internship evaluation project.

Built using:

- ⚛️ **Frontend**: React.js with responsive styling and Toast notifications
- 🧠 **Backend**: Golang (Gin Framework) + GORM + JWT Authentication
- 🗃️ **Database**: PostgreSQL / SQLite
- 🎨 **UI**: Animations, modern CSS, and user-friendly design

---

## 📁 Folder Structure

shopping-cart-fullstack/
├── shopping-cart-frontend/ # React application
├── shopping-cart-backend/ # Golang backend APIs
└── README.md

yaml
Copy
Edit

---

## 🚀 Features

- ✅ User Registration & Login
- ✅ JWT-based Authentication
- ✅ Add Items to Cart
- ✅ View Cart (with Item name + Price)
- ✅ Checkout Order
- ✅ View Order History
- ✅ Toast messages for every user interaction
- ✅ Responsive & Animated UI (Login, Items, Landing page)
- ✅ Separate folders for frontend and backend
- ✅ Clean code structure and maintainability

---

## 🌐 Frontend Setup (React)

1. Navigate to frontend folder:
   ```bash
   cd shopping-cart-frontend
Install dependencies:

bash
Copy
Edit
npm install
Run the development server:

bash
Copy
Edit
npm start
Runs at: http://localhost:3000

🛠 Backend Setup (Go + Gin)
Navigate to backend folder:

bash
Copy
Edit
cd shopping-cart-backend
Download dependencies:

bash
Copy
Edit
go mod tidy
Run the backend server:

bash
Copy
Edit
go run main.go
Runs at: http://localhost:8081

Make sure PostgreSQL or SQLite is set up as per your configuration (default: SQLite file-based).

🔐 Authentication Flow
User registers or logs in

Receives a JWT token

Token is stored in local storage

All protected endpoints use Authorization: Bearer <token>
