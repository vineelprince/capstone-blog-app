<div align="center">

# <img src="https://img.icons8.com/fluency/48/blog.png" width="35"/> InkFlow — Full Stack MERN Blogging Platform

### A modern, responsive, scalable, and production-ready blogging platform built using the **MERN Stack**

<img src="https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge&logo=mongodb" />
<img src="https://img.shields.io/badge/Express.js-Backend-black?style=for-the-badge&logo=express" />
<img src="https://img.shields.io/badge/React-Frontend-blue?style=for-the-badge&logo=react" />
<img src="https://img.shields.io/badge/Node.js-Runtime-green?style=for-the-badge&logo=node.js" />
<img src="https://img.shields.io/badge/JWT-Authentication-orange?style=for-the-badge&logo=jsonwebtokens" />
<img src="https://img.shields.io/badge/Cloudinary-Media-blue?style=for-the-badge&logo=cloudinary" />

<br/>
<br/>

### Capstone Project under SUNTEK ATP Program

[Live Demo](https://capstone-blog-app-frontend-deploy.vercel.app/) • [GitHub Repository](#)

</div>

---

# <img src="https://img.icons8.com/fluency/24/info.png"/> Project Overview

**InkFlow** is a full-stack blogging ecosystem that enables users to create, manage, publish, and interact with articles in a secure and scalable environment.

The platform combines:

- High-performance React frontend
- Secure JWT authentication
- Cloudinary cloud media storage
- MongoDB database architecture
- RESTful backend APIs
- Fully responsive design
- Scalable modular backend structure

---

# <img src="https://img.icons8.com/fluency/24/goal.png"/> Core Objectives

- Build scalable MERN architecture  
- Implement secure authentication workflows  
- Design modern responsive UI  
- Support multi-role authorization  
- Manage dynamic content efficiently  
- Simulate real-world production workflows  

---

# <img src="https://img.icons8.com/fluency/24/star.png"/> Key Features

## <img src="https://img.icons8.com/fluency/24/lock.png"/> Authentication & Security

- Secure user registration & login
- JWT-based authentication
- Protected API routes
- Cookie-based session handling
- Role-based access control
- Password hashing using bcrypt

---

## <img src="https://img.icons8.com/fluency/24/edit.png"/> Blog Management

- Create, edit & delete articles
- Dynamic blog rendering
- Rich article content support
- Cloudinary image uploads
- Author-specific article management

---

## <img src="https://img.icons8.com/fluency/24/user.png"/> User Features

- User profile management
- Personalized dashboard
- Earnings & statistics tracking
- Article history management

---

## <img src="https://img.icons8.com/fluency/24/admin-settings-male.png"/> Admin Features

- User moderation
- Content monitoring
- Dashboard analytics
- System management controls

---

## <img src="https://img.icons8.com/fluency/24/design.png"/> UI/UX Features

- Fully responsive layout
- Reusable React components
- Smooth navigation
- Mobile-first architecture
- Professional dashboard design

---

# <img src="https://img.icons8.com/fluency/24/maintenance.png"/> Complete Tech Stack

## <img src="https://img.icons8.com/fluency/24/source-code.png"/> Frontend

| Technology | Purpose |
|---|---|
| React.js | Frontend Library |
| Vite | Fast Build Tool |
| Axios | API Communication |
| Zustand | State Management |
| Tailwind CSS | Responsive Styling |
| React Router DOM | Routing |
| React Hot Toast | Notifications |

---

## <img src="https://img.icons8.com/fluency/24/server.png"/> Backend

| Technology | Purpose |
|---|---|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| MongoDB | NoSQL Database |
| Mongoose | MongoDB ODM |
| JWT | Authentication |
| bcrypt | Password Encryption |
| Multer | File Upload Handling |
| Cloudinary | Cloud Image Storage |

---

## <img src="https://img.icons8.com/fluency/24/cloud.png"/> Deployment

| Platform | Purpose |
|---|---|
| Vercel | Frontend Hosting |
| Render / Railway | Backend Hosting |
| MongoDB Atlas | Cloud Database |
| Cloudinary | Media Hosting |

---

# <img src="https://img.icons8.com/fluency/24/flow-chart.png"/> System Architecture

```text
                ┌──────────────────┐
                │     Frontend     │
                │ React + Vite UI  │
                └────────┬─────────┘
                         │
                         ▼
                ┌──────────────────┐
                │ Axios API Calls  │
                └────────┬─────────┘
                         │
                         ▼
                ┌──────────────────┐
                │ Express Backend  │
                │ REST APIs        │
                └────────┬─────────┘
                         │
         ┌───────────────┼────────────────┐
         ▼               ▼                ▼
 ┌────────────┐  ┌──────────────┐  ┌────────────┐
 │ JWT Auth   │  │ Cloudinary   │  │ Middleware │
 └────────────┘  └──────────────┘  └────────────┘
                         │
                         ▼
                ┌──────────────────┐
                │ MongoDB Atlas DB │
                └──────────────────┘
```

---

# <img src="https://img.icons8.com/fluency/24/database.png"/> Database ER Diagram

```text
┌────────────────────┐
│       USERS        │
├────────────────────┤
│ _id                │
│ firstName          │
│ lastName           │
│ email              │
│ password           │
│ role               │
│ profileImageUrl    │
│ followers[]        │
└─────────┬──────────┘
          │
          │ 1 : M
          ▼
┌────────────────────┐
│      ARTICLES      │
├────────────────────┤
│ _id                │
│ author             │
│ title              │
│ category           │
│ content            │
│ comments[]         │
│ isArticleActive    │
└─────────┬──────────┘
          │
          │ 1 : M
          ▼
┌────────────────────┐
│      COMMENTS      │
├────────────────────┤
│ user               │
│ comment            │
│ rating             │
└────────────────────┘
```

---

# <img src="https://img.icons8.com/fluency/24/key-security.png"/> Authentication Workflow

```text
        User Login/Register
                  │
                  ▼
       Frontend Form Validation
                  │
                  ▼
         Axios API Request
                  │
                  ▼
         Backend API Route
                  │
                  ▼
      Password Hash Verification
                  │
                  ▼
          JWT Token Generated
                  │
                  ▼
      Token Stored in Cookie/Header
                  │
                  ▼
         Protected Route Access
```

---

# <img src="https://img.icons8.com/fluency/24/image.png"/> Image Upload Workflow

```text
 User Uploads Image
          │
          ▼
 Frontend Form Submission
          │
          ▼
   Multer Middleware
          │
          ▼
 Cloudinary Upload API
          │
          ▼
 Cloudinary Image URL
          │
          ▼
 Stored in MongoDB
          │
          ▼
 Rendered in Frontend
```

---

# <img src="https://img.icons8.com/fluency/24/security-checked.png"/> Role-Based Access Control

| Role | Permissions |
|---|---|
| USER | Read Articles |
| AUTHOR | Create & Manage Articles |
| ADMIN | Full Platform Control |

---

# <img src="https://img.icons8.com/fluency/24/folder-invoices.png"/> Complete Project Structure

```bash
Blog_App-fullstack/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── store/
│   │   ├── services/
│   │   ├── routes/
│   │   ├── hooks/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── APIs/
│   │   ├── AdminApi.js
│   │   ├── AuthorApi.js
│   │   ├── CommonApi.js
│   │   └── UserApi.js
│   │
│   ├── Models/
│   │   ├── UserModel.js
│   │   └── ArticleModel.js
│   │
│   ├── middlewares/
│   │   ├── verifyToken.js
│   │   ├── checkAuthor.js
│   │   └── uploadFile.js
│   │
│   ├── services/
│   │   └── authService.js
│   │
│   ├── config/
│   │   ├── cloudinary.js
│   │   ├── multer.js
│   │   └── cloudinaryUpload.js
│   │
│   ├── server.js
│   │
│   └── package.json
│
├── README.md
├── vercel.json
└── .gitignore
```

---

# <img src="https://img.icons8.com/fluency/24/settings.png"/> Getting Started

## Prerequisites

Before running the project locally, ensure you have:

- Node.js (v16 or above)
- npm or yarn
- MongoDB Atlas account
- Cloudinary account

---

# <img src="https://img.icons8.com/fluency/24/installing-updates.png"/> Installation Guide

## Clone Repository

```bash
git clone https://github.com/vineelprince/capstone-blog-app.git
cd Blog_App-fullstack
```

---

## Backend Setup

```bash
cd backend
npm install
```

### Create `.env`

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
PORT=5000
NODE_ENV=development
```

---

## Frontend Setup

```bash
cd ../frontend
npm install
```

### Create `.env`

```env
VITE_API_URL=http://localhost:5000
```

---

# <img src="https://img.icons8.com/fluency/24/play.png"/> Running The Project

## Backend

```bash
cd backend
npm start
```

Backend runs on:

```bash
http://localhost:5000
```

---

## Frontend

```bash
cd frontend
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# <img src="https://img.icons8.com/fluency/24/api.png"/> API Modules

## User APIs

Handles:

- Registration
- Login
- Profile Management
- Authentication

---

## Author APIs

Handles:

- Article Creation
- Editing
- Deletion
- Dashboard Operations

---

## Admin APIs

Handles:

- User Moderation
- Content Management
- Analytics
- System Monitoring

---

## Common APIs

Handles:

- Public Routes
- Shared Operations
- Public Article Fetching

---

# <img src="https://img.icons8.com/fluency/24/cloud-network.png"/> Deployment Architecture

```text
Frontend (Vercel)
        │
        ▼
Backend APIs (Render/Railway)
        │
        ▼
MongoDB Atlas Database
        │
        ▼
Cloudinary Media Storage
```

---

# <img src="https://img.icons8.com/fluency/24/variables.png"/> Environment Variables

## Backend (.env)

```env
MONGODB_URI
JWT_SECRET
CLOUDINARY_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
PORT
NODE_ENV
```

---

## Frontend (.env)

```env
VITE_API_URL
```

---

# <img src="https://img.icons8.com/fluency/24/privacy.png"/> Security Features

- JWT Authentication
- Role-Based Authorization
- Password Hashing
- Protected APIs
- Secure Environment Variables
- Cookie-Based Sessions
- Secure Media Uploads
- Input Validation

---

# <img src="https://img.icons8.com/fluency/24/combo-chart.png"/> Scalability Features

The current architecture can scale into:

- Medium-like Publishing Platform
- Community Blogging Platform
- AI Content Platform
- Social Publishing Ecosystem
- Analytics Driven CMS

---

# <img src="https://img.icons8.com/fluency/24/future.png"/> Future Enhancements

- Dark Mode
- Like & Save System
- Real-time Comments
- Advanced Search
- Categories & Tags
- Progressive Web App
- AI Blog Recommendations
- Advanced Analytics
- Notifications System
- Multi-language Support

---

# <img src="https://img.icons8.com/fluency/24/learning.png"/> Learning Outcomes

This project strengthened practical knowledge in:

- MERN Stack Development  
- REST API Architecture  
- Authentication & Security  
- MongoDB Database Design  
- State Management  
- Deployment & Hosting  
- Cloud Integrations  
- Real-World Development Workflow  

---

# <img src="https://img.icons8.com/fluency/24/handshake.png"/> Acknowledgments

- SUNTEK ATP Program
- Mentors & Reviewers
- Open Source Community
- Cloudinary
- MongoDB Atlas
- React Ecosystem

---

# <img src="https://img.icons8.com/fluency/24/developer.png"/> Author

## Vineel Krishna

B.Tech Information Technology Student  

GitHub: [@vineelprince](https://github.com/vineelprince)

---

# <img src="https://img.icons8.com/fluency/24/document.png"/> License

This project is developed for educational and learning purposes.

---

# <img src="https://img.icons8.com/fluency/24/star.png"/> Support

If you found this project useful, give it a ⭐ on GitHub.

Your support motivates future development and open-source contributions.

---

<div align="center">

### “Good projects teach coding. Great projects teach problem solving.”

### Built with passion by Vineel Krishna

</div>
