# 🏡 Aestivo — Home Decor & Furnishings E-commerce Platform

**Aestivo** is a modern full-stack e-commerce application for stylish **home décor and furnishings**.  
It delivers a smooth shopping experience with **secure payments**, **product management**, and a **responsive, elegant interface**.

---

## 🚀 Tech Stack

**Frontend:** React (Vite), TailwindCSS, Axios, React Router  
**Backend:** Django, Django REST Framework (DRF), Djoser, JWT Authentication  
**Database:** PostgreSQL  
**Payments:** M-Pesa Daraja API  
**Media:** Cloudinary (for product images)  
**Containerization:** Docker & Docker Compose  
**Deployment Environment:** Linux (Ubuntu)

---

## ✨ Features

- 🛋️ Browse and filter home décor products by category  
- 🖼️ High-quality, Cloudinary-hosted product images  
- 🔐 Secure JWT-based authentication and authorization  
- 🛒 Add-to-cart and checkout functionality  
- 💳 M-Pesa STK Push integration for live and sandbox payments  
- 📦 Order history and management  
- 🔍 Product search, sorting, and pagination  
- ⚙️ Admin dashboard for managing users and inventory  
- 🐳 Dockerized backend & frontend for streamlined deployment  

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/aestivo.git
cd aestivo
```
###2️⃣ Backend Setup
```bash
Copy code
cd backend
python -m venv venv
source venv/bin/activate   # On Linux/Mac
venv\Scripts\activate      # On Windows

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
###3️⃣ Frontend Setup
```bash
bash
Copy code
cd frontend
npm install
npm run dev
```
🐳 Docker Setup (Recommended)
This project includes Docker and Docker Compose configurations for containerized development and deployment.

Build and run all services:
```
bash
Copy code
docker-compose up --build
```
Run in detached mode:
```
bash
Copy code
docker-compose up -d
Then open:
Frontend: http://localhost:5173
Backend API: http://localhost:8000
```
## ☁️ Environment Variables
Django Backend (.env)
```
ini
Copy code
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=postgres://user:password@db:5432/aestivo_db
CLOUDINARY_URL=cloudinary://api_key:api_secret@cloud_name

MPESA_CONSUMER_KEY=your_mpesa_consumer_key
MPESA_CONSUMER_SECRET=your_mpesa_consumer_secret
MPESA_SHORTCODE=your_shortcode
MPESA_PASSKEY=your_passkey
```
## Screenshots

### 🏠 Homepage
![Homepage](./assets/homepage.png)

### 🛒 Product Page
![Product Page](./assets/product-page.png)

### 💳 Mpesa Checkout
![Mpesa Checkout](./assets/checkout.png)


### 💰 M-Pesa Integration
Aestivo integrates the Safaricom M-Pesa Daraja API for real-time mobile payments.
All transaction callbacks are securely logged and stored in the backend for accurate order tracking and analytics.

### 📷 Cloudinary Integration
Product images are uploaded and served via Cloudinary’s CDN to ensure fast and optimized content delivery across devices.

### 🧑‍💻 Developer Notes
Runs seamlessly on Linux / Ubuntu servers

Built with scalable architecture and clean code practices

Ideal for e-commerce learning, freelance portfolios, or production deployment

📫 Contact
Developer: Julius Gacheru
Email: juliusgacheru021@gmail.com
Location: Nairobi, Kenya
LinkedIn: linkedin.com/in/juliusgacheru
GitHub: github.com/banju-che/Aestivo
