<div align="center">

# 🚀 InkFlow — Full Stack MERN Blogging Platform

A modern, responsive, and scalable blogging platform built with the **MERN Stack** (MongoDB, Express, React, Node.js).

**Capstone Project under SUNTEK ATP Program**

[Live Demo](https://capstone-blog-app-frontend-deploy.vercel.app/) | [GitHub Repository](#)

</div>












</div>
---

## 📌 Project Overview

**InkFlow** is a full-stack blogging application that empowers users to create, manage, and share their articles in a secure and intuitive environment. Built with industry-standard practices, the platform combines a modern frontend with a robust backend API.

### ✨ What You Can Do

✅ Create and publish blog posts  
✅ Edit and delete your articles  
✅ Securely authenticate with JWT  
✅ Manage author profiles  
✅ Track earnings and statistics  
✅ Admin dashboard for content management  
✅ Responsive design for all devices

---

## 🎯 Key Features

### 🔐 **Authentication & Security**
- Secure user registration and login
- JWT-based authentication
- Protected routes with token verification
- Session management
- Role-based access control (User, Author, Admin)

### 📝 **Blog Management**
- Create, read, update, and delete articles
- Rich text editor for blog content
- Image upload with Cloudinary integration
- Dynamic content rendering
- Draft and publish functionality

### 👤 **User Profiles**
- User profile customization
- Author dashboard with statistics
- Earnings tracking for contributors
- Author-specific article management

### 🎨 **Modern User Interface**
- Fully responsive design (mobile, tablet, desktop)
- Professional and clean layout
- Smooth animations and transitions
- Optimized component architecture
- Intuitive navigation

### 💼 **Admin Dashboard**
- Content moderation capabilities
- User management
- Statistics and analytics
- System monitoring

---

## 🛠️ Tech Stack

### **Frontend**
| Technology | Purpose |
|-----------|---------|
| **React.js** | UI framework and component management |
| **Vite** | Build tool and development server |
| **CSS/Responsive Design** | Styling and layout |
| **Axios** | HTTP client for API calls |

### **Backend**
| Technology | Purpose |
|-----------|---------|
| **Node.js** | JavaScript runtime |
| **Express.js** | REST API framework |
| **MongoDB** | NoSQL database |
| **JWT** | Authentication and authorization |
| **Cloudinary** | Image hosting and management |
| **Multer** | File upload handling |

### **Deployment**
| Platform | Purpose |
|----------|---------|
| **Vercel** | Frontend deployment |
| **Backend Server** | API hosting |

---

## 📂 Project Structure

```
Blog_App-fullstack/
├── frontend/                    # React + Vite frontend
│   ├── src/
│   │   ├── components/         # React components
│   │   ├── assets/             # Images and media
│   │   ├── config/             # API configuration
│   │   ├── store/              # State management
│   │   ├── styles/             # Global styles
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   └── package.json
│
├── backend/                     # Node.js + Express backend
│   ├── APIs/                    # Route handlers
│   │   ├── AdminApi.js
│   │   ├── AuthorApi.js
│   │   ├── CommonApi.js
│   │   └── UserApi.js
│   ├── Models/                  # MongoDB schemas
│   │   ├── ArticleModel.js
│   │   └── UserModel.js
│   ├── middlewares/             # Express middlewares
│   │   ├── verifyToken.js
│   │   ├── checkAuthor.js
│   │   └── uploadFile.js
│   ├── services/                # Business logic
│   │   └── authService.js
│   ├── config/                  # Configuration files
│   │   ├── cloudinary.js
│   │   ├── cloudinaryUpload.js
│   │   └── multer.js
│   ├── server.js                # Entry point
│   └── package.json
│
├── README.md
├── vercel.json                  # Vercel deployment config
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)
- Cloudinary account (for image hosting)

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/vineelprince/capstone-blog-app.git
cd Blog_App-fullstack
```

#### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
PORT=5000
NODE_ENV=development
```

#### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

Create a `.env` file in the frontend directory:
```env
VITE_API_URL=http://localhost:5000
```

---

## ▶️ Running the Application

### Backend
```bash
cd backend
npm start
```
The API will run on `http://localhost:5000`

### Frontend
```bash
cd frontend
npm run dev
```
The frontend will run on `http://localhost:5173`

---

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Articles
- `GET /api/articles` - Get all articles
- `GET /api/articles/:id` - Get article by ID
- `POST /api/articles` - Create new article (Author only)
- `PUT /api/articles/:id` - Update article (Author only)
- `DELETE /api/articles/:id` - Delete article (Author only)

### Authors
- `GET /api/authors` - Get all authors
- `GET /api/authors/:id` - Get author details
- `GET /api/authors/:id/articles` - Get author's articles

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile
- `GET /api/users/:id/earnings` - Get earnings statistics

### Admin
- `GET /api/admin/stats` - Get dashboard statistics
- `GET /api/admin/users` - Manage users
- `GET /api/admin/articles` - Manage articles

---

## 🔑 Environment Variables

### Backend (.env)
```env
MONGODB_URI        # MongoDB connection string
JWT_SECRET         # Secret key for JWT signing
CLOUDINARY_NAME    # Cloudinary cloud name
CLOUDINARY_API_KEY # Cloudinary API key
CLOUDINARY_API_SECRET # Cloudinary API secret
PORT               # Server port (default: 5000)
NODE_ENV           # Environment (development/production)
```

### Frontend (.env)
```env
VITE_API_URL       # Backend API base URL
```

---

## 📦 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy with a single click

### Backend
Deploy to your preferred hosting platform (Heroku, Railway, AWS, etc.)

---

## 🎯 Future Enhancements

- 🌙 Dark mode support
- ❤️ Like and comment system
- 🔍 Advanced search and filters
- 🏷️ Blog categories and tags
- 📱 Progressive Web App (PWA) support
- 🧠 AI-powered blog recommendations
- 📊 Enhanced admin analytics dashboard
- 🔔 Email notifications

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📚 Learning Outcomes

This project helped strengthen knowledge in:

✔️ Full Stack MERN Development  
✔️ REST API Architecture  
✔️ Authentication & Security (JWT)  
✔️ Database Design (MongoDB)  
✔️ Deployment & Hosting  
✔️ Team Collaboration  
✔️ Real-World Development Workflow

---

## 👨‍💻 My Contribution

**Primary Focus:** Backend Development & API Integration

### Responsibilities
- Developed REST APIs for all core features
- Implemented JWT-based authentication system
- Integrated MongoDB database and data models
- Built middleware for security and file uploads
- Managed frontend-backend API integration
- Configured server deployment

---

## 🙏 Acknowledgments

- **SUNTEK ATP Program** for the opportunity
- **Mentors & Reviewers** for guidance and feedback
- **Project Team Members** for collaboration
- **Open Source Community** for amazing libraries and tools

---

## 👤 Author

**Vineel Krishna**

- 🎓 B.Tech Information Technology Student
- 🚀 Full Stack MERN Developer
- 🏛️ President — Python Club, Anurag University
- 💡 MSME Funded Project Developer

GitHub: [@vineelprince](https://github.com/vineelprince)

---

## 📜 License

This project is developed for educational and learning purposes.

---

## ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub. Your support motivates us to create better projects!

> "Good projects teach coding. Great projects teach problem solving." 🚀

---

<div align="center">

**Made with ❤️ by Vineel Krishna**

</div>
