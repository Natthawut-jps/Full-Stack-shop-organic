# 🌿 Shop Organic - Full Stack E-Commerce

[![Docker](https://img.shields.io/badge/Docker-Ready-blue?style=for-the-badge&logo=docker)](https://www.docker.com)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=nodedotjs)](https://nodejs.org)

> ระบบร้านค้าออร์แกนิกแบบ Full-Stack ที่พัฒนาด้วย React, Node.js และ MariaDB พร้อมระบบจัดการสินค้า คำสั่งซื้อ และรายงานครบครัน

### 🔑 ข้อมูลทดสอบเข้าสู่ระบบ

| ฟิลด์ | ค่า |
|-------|------|
| **Email** | `example@gmail.com` |
| **Password** | `Np@00000000` |

---

## 📋 สารบัญ

- [เทคโนโลยีที่ใช้](#-เทคโนโลยีที่ใช้)
- [ฟีเจอร์หลัก](#-ฟีเจอร์หลัก)
- [โครงสร้างโปรเจค](#-โครงสร้างโปรเจค)
- [เริ่มต้นใช้งาน](#-เริ่มต้นใช้งาน)
  - [วิธีที่ 1: ใช้ Docker (แนะนำ)](#วิธีที่-1-ใช้-docker-แนะนำ)
  - [วิธีที่ 2: Manual Setup](#วิธีที่-2-manual-setup)
- [การเข้าถึง](#-การเข้าถึง)
- [ความต้องการของระบบ](#-ความต้องการของระบบ)
- [License](#-license)

---

## 🛠️ เทคโนโลยีที่ใช้

### Frontend
| เทคโนโลยี | รายละเอียด |
|-----------|-----------|
| **React 18** | UI Library |
| **TypeScript** | ภาษาแบบ Static Typing |
| **Vite** | Build Tool |
| **Tailwind CSS** | CSS Framework |
| **Material-UI (MUI)** | Component Library |
| **React Router** | Routing |
| **Axios** | HTTP Client |
| **React Cookie** | Cookie Management |

### Backend
| เทคโนโลยี | รายละเอียด |
|-----------|-----------|
| **Node.js 20+** | Runtime |
| **Express.js** | Web Framework |
| **Sequelize** | ORM |
| **MariaDB/MySQL** | Database |
| **JWT** | Authentication |
| **Passport** | Authentication Middleware |
| **Bcrypt** | Password Hashing |
| **Nodemailer** | Email Service |
| **Multer** | File Upload |
| **PDFKit** | PDF Generation |
| **ExcelJS** | Excel Export |

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Nginx** - Reverse Proxy (Frontend)

---

## ✨ ฟีเจอร์หลัก

- 🔐 **ระบบสมาชิก**
  - สมัครสมาชิก / เข้าสู่ระบบ
  - Google OAuth Login
  - JWT Authentication

- 🛍️ **ระบบร้านค้า**
  - แสดงรายการสินค้าออร์แกนิก
  - ระบบตะกร้าสินค้า
  - จัดการคำสั่งซื้อ

- 🖼️ **ระบบจัดการไฟล์**
  - อัปโหลดรูปภาพสินค้า
  - Resize รูปภาพอัตโนมัติ

---

## 📁 โครงสร้างโปรเจค

```
Full-Stack-shop-organic/
├── 📂 frontend/          # React + TypeScript Frontend
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   └── package.json
│
├── 📂 backend/           # Node.js + Express Backend
│   ├── router/           # API Routes
│   ├── model/            # Database Models
│   ├── app.js            # Entry point
│   ├── Dockerfile
│   └── package.json
│
├── 📄 docker-compose.yml # Docker orchestration
├── 📄 shop_organic.sql   # Database schema & seed
└── 📄 README.md          # This file
```

---

## 🚀 เริ่มต้นใช้งาน

### ความต้องการเบื้องต้น

ก่อนเริ่มต้น ต้องติดตั้งโปรแกรมต่อไปนี้:

- [Git](https://git-scm.com/downloads) - Version Control
- [Docker Desktop](https://www.docker.com) - Container Platform
- [Node.js 20+](https://nodejs.org) (สำหรับการพัฒนา)

---

### วิธีที่ 1: ใช้ Docker (แนะนำ)

1. **Clone โปรเจค**

```bash
git clone https://github.com/Natthawut-jps/Full-Stack-shop-organic.git
cd Full-Stack-shop-organic
```

2. **รัน Docker Compose**

```bash
docker compose up -d
```

3. **รอให้ระบบเริ่มต้น** (ประมาณ 1-2 นาที)

4. **เข้าถึงแอปพลิเคชัน**

เปิดเบราว์เซอร์ที่ [http://localhost](http://localhost)

5. **หยุดการทำงาน**

```bash
docker compose down
```

---

### วิธีที่ 2: Manual Setup

#### 1. ตั้งค่า Database

ติดตั้ง MariaDB หรือ MySQL และสร้าง database:

```sql
CREATE DATABASE shop_organic;
```

Import ไฟล์ `shop_organic.sql`

#### 2. ตั้งค่า Backend

```bash
cd backend
cp .env.local .env   # แก้ไขค่าตามการตั้งค่าของคุณ
npm install
npm run dev
```

Backend จะรันที่ `http://localhost:5000` (ตามค่า default)

#### 3. ตั้งค่า Frontend

```bash
cd frontend
cp .env.local .env
npm install
npm run dev
```

Frontend จะรันที่ `http://localhost:5173`

---

## 🔗 การเข้าถึง

### Docker Mode
| Service | URL |
|---------|-----|
| Frontend | http://localhost |
| Backend API | http://localhost/api |
| Database | localhost:3306 |

### Development Mode
| Service | URL |
|---------|-----|
| Frontend | http://localhost:5173 |
| Backend API | http://localhost:3001 |
| Database | localhost:3306 |

---

## 💻 ความต้องการของระบบ

| รายการ | ค่าขั้นต่ำ | ค่าแนะนำ |
|---------|-----------|---------|
| Node.js | 20.x | 20.x LTS |
| RAM | 4 GB | 8 GB |
| Disk | 2 GB | 5 GB |
| Docker | 24.x | Latest |

---

## 📝 Environment Variables

### Backend (.env)
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_NAME=shop_organic
JWT_SECRET=your_jwt_secret
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:3001
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

---

## 🤝 Contributing

หากต้องการมีส่วนร่วมในโปรเจคนี้:

1. Fork โปรเจค
2. สร้าง Branch ใหม่ (`git checkout -b feature/amazing-feature`)
3. Commit การเปลี่ยนแปลง (`git commit -m 'Add amazing feature'`)
4. Push ไปยัง Branch (`git push origin feature/amazing-feature`)
5. เปิด Pull Request

---

## 📄 License

โปรเจคนี้อยู่ภายใต้ [MIT License](LICENSE)

---

## 👨‍💻 ผู้พัฒนา

**Natthawut-jps**

- GitHub: [@Natthawut-jps](https://github.com/Natthawut-jps)

---

<p align="center">
  Made with ❤️ for organic shopping experience
</p>