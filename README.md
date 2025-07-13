# 🛍️ Shopping Cart Full Stack Application

This is a full-stack shopping cart web application built with:

- **Frontend**: React.js (with Toastify for UI notifications)
- **Backend**: Go (Gin framework) + PostgreSQL (via GORM)
- **Authentication**: JWT-based token authentication
- **Functionality**: User Registration, Login, Item Listing, Add to Cart, Checkout, Order History

---

## 📁 Folder Structure

shopping-cart-fullstack/
├── shopping-cart-frontend/ # React App
└── shopping-cart-backend/ # Go REST API

---

## 🚀 Features

- 🔐 JWT-based user login/signup
- 🛍 View product catalog
- ➕ Add items to cart
- ✅ Checkout cart
- 📦 View past orders
- 🎨 Responsive UI with Toast notifications
- 💾 Token stored in `localStorage` for session persistence

---

## 🔧 Technologies Used

| Frontend        | Backend        | Database     |
|----------------|----------------|--------------|
| React.js        | Go (Gin)       | PostgreSQL   |
| Axios           | GORM ORM       |              |
| React Toastify  | JWT Auth       |              |

---

## 🛠️ Setup Instructions

### ✅ 1. Clone Repository

```bash
git clone https://github.com/arul4902/shopping-cart-fullstack.git
cd shopping-cart-fullstack

✅ 2. Backend Setup (Go)
cd shopping-cart-backend

# Initialize Go modules (if not already)
go mod tidy

# Run backend server
go run main.go

Ensure PostgreSQL is running and properly configured in your database.Connect() logic.

✅ 3. Frontend Setup (React)
cd shopping-cart-frontend

# Install dependencies
npm install

# Start the frontend
npm start

This will run the React app on http://localhost:3000

📸 Screenshots
Landing Page
<img width="1910" height="851" alt="image" src="https://github.com/user-attachments/assets/770ee89c-8760-41e2-8256-f53bfa972506" />

Login Page
<img width="1917" height="848" alt="image" src="https://github.com/user-attachments/assets/8b374d0b-fa5e-4881-8573-cddbfea55916" />

SignUp Page
<img width="1918" height="848" alt="image" src="https://github.com/user-attachments/assets/b0d714a6-809a-4d4f-ab6d-8782e4336685" />

Items Page
<img width="1918" height="865" alt="image" src="https://github.com/user-attachments/assets/9c6d9165-4cc5-41aa-bae4-017ddd8b725e" />

Add to Cart
<img width="1911" height="858" alt="image" src="https://github.com/user-attachments/assets/665fdbbb-c3e5-4339-9986-e7edcb94c5f8" />

View Cart
<img width="1912" height="868" alt="image" src="https://github.com/user-attachments/assets/b292b6db-836a-472d-a7e6-00e669068014" />

Checkout
<img width="1915" height="868" alt="image" src="https://github.com/user-attachments/assets/1bf0aa41-57ea-4798-8795-14d2c28d8f96" />

Order History
<img width="1919" height="875" alt="image" src="https://github.com/user-attachments/assets/900aadec-392c-43d2-9ff6-dde51705f04e" />

🧪 Testing Accounts
You can register any new user and use it to log in. No seeded data required.



👨‍💻 Developed By
Arul S
B.Tech – 2026 Batch
Internship Project – Full Stack Web Development

