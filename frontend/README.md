# 🎨 Blog App Frontend                                                                                                              

### [LIVE DEMO](https://capstone-blog-app-frontend-deploy.vercel.app/)                                                                                                                   

Frontend application for the Full Stack Blog Platform built using React.js, Vite, Tailwind CSS, Zustand, and Axios.

This frontend provides:

* Modern Responsive UI
* Authentication Pages
* Blog Reading Experience
* Author Dashboard
* Admin Controls
* Article Management
* Cloud Image Rendering
* Protected Frontend Routes

---

# ✨ Frontend Features

## Authentication System

* User Signup
* User Login
* JWT Authentication
* Persistent Sessions
* Protected Routes
* Role Based Navigation

---

## Blog Features

* View All Articles
* Read Full Blog Posts
* Search Blogs
* Category Filtering
* Comment System
* Rating System

---

## Author Features

* Create Articles
* Edit Articles
* Delete Articles
* Upload Images
* Manage Published Blogs

---

## Admin Features

* Manage Users
* Manage Articles
* Access Dashboard
* Content Moderation

---

## UI Features

* Fully Responsive Design
* Modern Layout
* Reusable Components
* Dynamic Routing
* Loading States
* Toast Notifications
* Clean User Experience

---

# 🛠️ Frontend Tech Stack

| Technology       | Usage            |
| ---------------- | ---------------- |
| React.js         | Frontend Library |
| Vite             | Build Tool       |
| React Router DOM | Routing          |
| Axios            | API Requests     |
| Tailwind CSS     | Styling          |
| Zustand          | State Management |
| React Hot Toast  | Notifications    |
| JWT Decode       | Token Handling   |

---

# 📁 Frontend Folder Structure

```bash
frontend/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   ├── store/
│   ├── services/
│   ├── routes/
│   ├── hooks/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

# 🧠 Frontend Architecture

```bash
User Interface
      ↓
React Components
      ↓
State Management (Zustand)
      ↓
Axios API Calls
      ↓
Backend APIs
      ↓
MongoDB Database
```

---

# 📦 Package.json Dependencies

```json
"dependencies": {
  "axios": "^1.x.x",
  "react": "^19.x.x",
  "react-dom": "^19.x.x",
  "react-router-dom": "^7.x.x",
  "react-hot-toast": "^2.x.x",
  "zustand": "^5.x.x",
  "jwt-decode": "^4.x.x"
}
```

---

# 📚 Important Packages Explanation

# react

Core frontend library used for building user interfaces.

Install:

```bash
npm install react react-dom
```

---

# vite

Fast frontend build tool for React applications.

Install:

```bash
npm create vite@latest
```

---

# react-router-dom

Handles frontend routing and navigation.

Install:

```bash
npm install react-router-dom
```

---

# axios

Used for sending HTTP requests to backend APIs.

Install:

```bash
npm install axios
```

---

# zustand

Lightweight global state management library.

Install:

```bash
npm install zustand
```

---

# react-hot-toast

Used for displaying success and error notifications.

Install:

```bash
npm install react-hot-toast
```

---

# tailwind css

Utility-first CSS framework for responsive UI.

Install:

```bash
npm install -D tailwindcss postcss autoprefixer
```

---

# 🌐 Routing System

The frontend uses React Router DOM for page navigation.

## Common Routes

| Route           | Description         |
| --------------- | ------------------- |
| /               | Home Page           |
| /login          | User Login          |
| /register       | User Registration   |
| /article/:id    | Single Article Page |
| /dashboard      | Dashboard           |
| /create-article | Create Article      |
| /admin          | Admin Panel         |

---

# 🔐 Authentication Flow

```bash
User Login/Register
        ↓
Frontend Form Validation
        ↓
Axios API Request
        ↓
Backend JWT Authentication
        ↓
JWT Token Stored
        ↓
Protected Route Access
```

---

# 🧩 State Management using Zustand

The frontend uses Zustand for lightweight and efficient state management.

## Used For

* Authentication State
* User Data
* Dashboard State
* Global UI State

---

## Example Store Structure

```js
import { create } from 'zustand'

const useAuthStore = create((set) => ({
  user: null,
  setUser: (userData) => set({ user: userData }),
}))
```

---

# 🌐 API Communication

Axios is used for backend communication.

## Example API Request

```js
const response = await axios.post(
  '/api/user/login',
  loginData,
  {
    withCredentials: true,
  }
)
```

---

# 🎨 Tailwind CSS Styling

The project uses Tailwind CSS for:

* Responsive Design
* Fast Styling
* Mobile Friendly UI
* Reusable Utility Classes

---

# 📱 Responsive Design

The frontend is optimized for:

* Mobile Devices
* Tablets
* Laptops
* Desktop Screens

---

# ☁️ Cloudinary Image Rendering

Uploaded article images are fetched directly from Cloudinary.

Benefits:

* Faster Image Delivery
* Optimized Media
* Secure Hosting
* Better Performance

---

# ⚙️ Installation Guide

# 1. Clone Repository

```bash
git clone https://github.com/your-username/CAPSTONE-Blog_App-fullstack.git
```

---

# 2. Navigate to Frontend Folder

```bash
cd frontend
```

---

# 3. Install Dependencies

```bash
npm install
```

---

# 4. Create Environment Variables

Create `.env` file inside frontend directory.

---

# Required Environment Variables

```env
VITE_API_URL=http://localhost:4000
```

---

# 5. Start Development Server

```bash
npm run dev
```

---

# 6. Build for Production

```bash
npm run build
```

---

# 🚀 Frontend Deployment

Recommended Platforms:

* Vercel
* Netlify
* Firebase Hosting
* GitHub Pages

---

# Vercel Deployment Steps

## Build Command

```bash
npm run build
```

## Output Directory

```bash
dist
```

---

# 🛡️ Frontend Security Features

* Protected Routes
* JWT Authentication
* Secure API Calls
* Environment Variable Protection
* Input Validation
* Role Based UI Access

---

# ⚠️ Common Frontend Errors & Fixes

# CORS Error

## Cause

Frontend URL not allowed in backend.

## Fix

Add frontend URL inside backend CORS configuration.

---

# API Not Working

## Cause

Incorrect backend URL.

## Fix

Verify:

```env
VITE_API_URL
```

---

# White Screen Error

## Cause

React rendering issue or route error.

## Fix

* Check browser console
* Verify imports
* Restart Vite server

---

# Build Failed Error

## Cause

Dependency conflicts or syntax issues.

## Fix

```bash
npm install
npm run build
```

---

# 🔮 Future Improvements

* Dark Mode
* Rich Text Editor
* AI Blog Suggestions
* Real-time Notifications
* Bookmark Feature
* Article Analytics
* SEO Optimization
* Progressive Web App Support
* Multi-language Support

---

# 👨‍💻 Developed By

Vineel Krishna

B.Tech Information Technology

President – Python Club, Anurag University

MSME Funded Project Developer

---

# 📜 License

This project is developed for educational and learning purposes.
