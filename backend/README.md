# 🚀 Blog App Backend

Backend service for the Full Stack Blog Application built using Node.js, Express.js, MongoDB, JWT Authentication, and Cloudinary.

This backend powers:

* User Authentication
* Role Based Authorization
* Article Management
* Admin Controls
* File Uploads
* Cloudinary Image Storage
* Comment System
* Secure API Handling

---

# 🛠️ Backend Tech Stack

| Technology    | Usage                          |
| ------------- | ------------------------------ |
| Node.js       | JavaScript Runtime             |
| Express.js    | Backend Framework              |
| MongoDB       | Database                       |
| Mongoose      | ODM for MongoDB                |
| JWT           | Authentication & Authorization |
| bcrypt        | Password Hashing               |
| Multer        | File Upload Middleware         |
| Cloudinary    | Cloud Image Storage            |
| cookie-parser | Cookie Management              |
| dotenv        | Environment Variables          |
| cors          | Cross Origin Requests          |

---

# 📁 Backend Folder Structure

```bash
backend/
│
├── APIs/
│   ├── AdminApi.js
│   ├── AuthorApi.js
│   ├── CommonApi.js
│   └── UserApi.js
│
├── config/
│   ├── cloudinary.js
│   ├── cloudinaryUpload.js
│   └── multer.js
│
├── middlewares/
│   ├── checkAuthor.js
│   ├── uploadFile.js
│   └── verifyToken.js
│
├── Models/
│   ├── ArticleModel.js
│   └── UserModel.js
│
├── services/
│   └── authService.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

---

# 🧠 Project Architecture

```bash
Client Request
      ↓
Express Route APIs
      ↓
Authentication Middleware
      ↓
Controllers / Services
      ↓
Mongoose Models
      ↓
MongoDB Database
      ↓
Response Sent Back
```

---

# ✨ Backend Features

## Authentication System

* User Registration
* User Login
* JWT Token Authentication
* Cookie Based Authentication
* Protected Routes
* Role Based Access

---

## Roles Supported

The application supports 3 user roles:

| Role   | Access                     |
| ------ | -------------------------- |
| USER   | Read articles and interact |
| AUTHOR | Create and manage articles |
| ADMIN  | Full system control        |

---

## Article Management

* Create Articles
* Update Articles
* Delete Articles
* Fetch Articles
* Add Comments
* Rating System
* Soft Delete Support

---

## File Upload System

* Image Upload Support
* Multer Middleware
* Cloudinary Integration
* Secure Upload Pipeline

---

# 📦 Package.json Dependencies

The backend uses the following packages:

```json
"dependencies": {
  "bcrypt": "^6.0.0",
  "cloudinary": "^2.9.0",
  "cookie-parser": "^1.4.7",
  "cookieparser": "^0.1.0",
  "cors": "^2.8.6",
  "dotenv": "^17.2.3",
  "express": "^5.2.1",
  "jsonwebtoken": "^9.0.3",
  "mongoose": "^9.1.5",
  "multer": "^2.1.1",
  "zustand": "^5.0.11"
}
```

---

# Important Packages Explanation

# express

Used for building REST APIs and handling routing.

Install:

```bash
npm install express
```

---

# mongoose

Used to connect and interact with MongoDB.

Install:

```bash
npm install mongoose
```

---

# bcrypt

Used for encrypting user passwords before storing in database.

Install:

```bash
npm install bcrypt
```

---

# jsonwebtoken

Used for generating and verifying JWT tokens.

Install:

```bash
npm install jsonwebtoken
```

---

# multer

Handles multipart/form-data and file uploads.

Install:

```bash
npm install multer
```

---

# cloudinary

Stores uploaded images securely on cloud.

Install:

```bash
npm install cloudinary
```

---

# dotenv

Loads environment variables from `.env` file.

Install:

```bash
npm install dotenv
```

---

# cors

Allows frontend and backend communication across domains.

Install:

```bash
npm install cors
```

---

# cookie-parser

Reads and parses cookies from incoming requests.

Install:

```bash
npm install cookie-parser
```

---

# 🗄️ Database Models

# 1. User Model

File:

```bash
Models/UserModel.js
```

This schema stores all registered user details.

## Fields Used

| Field           | Type    | Description           |
| --------------- | ------- | --------------------- |
| firstName       | String  | User first name       |
| lastName        | String  | User last name        |
| email           | String  | Unique user email     |
| password        | String  | Hashed password       |
| profileImageUrl | String  | User profile image    |
| followers       | Array   | Followers list        |
| role            | String  | USER / AUTHOR / ADMIN |
| isActive        | Boolean | User active status    |
| createdAt       | Date    | Auto generated        |
| updatedAt       | Date    | Auto generated        |

---

## User Schema Highlights

### Unique Email Validation

```js
email: {
  type: String,
  required: true,
  unique: true,
}
```

Ensures duplicate emails are not allowed.

---

### Role Based Access

```js
role: {
  type: String,
  enum: ["AUTHOR", "USER", "ADMIN"],
}
```

Restricts invalid roles.

---

### Followers Relationship

```js
followers: [{
  type: Schema.Types.ObjectId,
  ref: "user",
}]
```

Creates relationship between users.

---

# 2. Article Model

File:

```bash
Models/ArticleModel.js
```

This schema stores blog article data.

---

## Fields Used

| Field           | Type     | Description          |
| --------------- | -------- | -------------------- |
| author          | ObjectId | Reference to user    |
| title           | String   | Article title        |
| category        | String   | Article category     |
| content         | String   | Main article content |
| comments        | Array    | Embedded comments    |
| isArticleActive | Boolean  | Soft delete status   |
| createdAt       | Date     | Auto generated       |
| updatedAt       | Date     | Auto generated       |

---

# Embedded Comment Schema

The article model contains an embedded comment schema.

## Comment Fields

| Field   | Type     |
| ------- | -------- |
| user    | ObjectId |
| comment | String   |
| rating  | Number   |

---

## Rating Validation

```js
rating: {
  type: Number,
  min: 1,
  max: 5,
}
```

Allows ratings only between 1 and 5.

---

# 🔐 Authentication Flow

```bash
User Login/Register
        ↓
Password Hashing using bcrypt
        ↓
JWT Token Generation
        ↓
Token Stored in Cookie/Header
        ↓
Protected Route Verification
        ↓
Authorized Access
```

---

# verifyToken Middleware

File:

```bash
middlewares/verifyToken.js
```

This middleware secures protected routes.

## Responsibilities

* Checks JWT token
* Verifies authentication
* Validates user roles
* Protects APIs from unauthorized access

---

## Working Flow

```bash
Request Sent
      ↓
Extract Token
      ↓
Verify JWT
      ↓
Check User Role
      ↓
Grant / Deny Access
```

---

## Key Feature

The middleware supports both:

* Authorization Header Tokens
* Cookie Based Tokens

```js
if (req.headers.authorization) {
  token = req.headers.authorization.split(" ")[1];
}

if (!token && req.cookies?.token) {
  token = req.cookies.token;
}
```

---

# 🌐 APIs Used

# User APIs

File:

```bash
APIs/UserApi.js
```

Handles:

* Registration
* Login
* Profile Management
* User Operations

---

# Author APIs

File:

```bash
APIs/AuthorApi.js
```

Handles:

* Create Articles
* Edit Articles
* Delete Articles
* Author Specific Operations

---

# Admin APIs

File:

```bash
APIs/AdminApi.js
```

Handles:

* User Management
* Article Moderation
* Admin Controls

---

# Common APIs

File:

```bash
APIs/CommonApi.js
```

Handles:

* Public Routes
* Common Fetch Operations
* Shared Endpoints

---

# ☁️ Cloudinary Integration

Files:

```bash
config/cloudinary.js
config/cloudinaryUpload.js
```

Used for:

* Uploading images
* Cloud image hosting
* Optimized media delivery

---

# Multer Configuration

File:

```bash
config/multer.js
```

Used for:

* Parsing uploaded files
* Validating uploads
* Handling multipart form data

---

# ⚠️ Error Handling System

The backend contains centralized error handling.

## Handles

* Multer Errors
* Validation Errors
* Duplicate Data Errors
* JWT Errors
* MongoDB Errors
* Server Errors

---

## Duplicate Data Handling

```js
if (err.code === 11000) {
  const field = Object.keys(err.keyValue)[0];
}
```

Prevents duplicate entries like repeated emails.

---

# CORS Configuration

The backend currently allows:

```js
origin: [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://capstone-blog-app-frontend-deploy.vercel.app"
]
```

This enables secure frontend-backend communication.

---

# ⚙️ Installation Guide

# 1. Clone Repository

```bash
git clone https://github.com/your-username/CAPSTONE-Blog_App-fullstack.git
```

---

# 2. Move to Backend Folder

```bash
cd backend
```

---

# 3. Install Dependencies

```bash
npm install
```

---

# 4. Create Environment Variables

Create `.env` file inside backend directory.

---

# Required Environment Variables

```env
PORT=4000
DB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

---

# 5. Start Backend Server

```bash
npm start
```

---

# MongoDB Connection

Database connection is initialized inside:

```bash
server.js
```

---

## Connection Logic

```js
await connect(process.env.DB_URL);
```

---

# Backend Server Flow

```bash
Frontend Request
      ↓
Express Middleware
      ↓
Authentication Middleware
      ↓
API Route
      ↓
MongoDB Query
      ↓
JSON Response
```

---

# 🛡️ Security Features

* Password Hashing
* JWT Authentication
* Role Based Authorization
* Protected APIs
* Cookie Based Sessions
* Input Validation
* Environment Variable Protection

---

# 🚀 Backend Deployment

Recommended Platforms:

* Render
* Railway
* Cyclic
* VPS
* AWS EC2

---

# Render Deployment Configuration

## Build Command

```bash
npm install
```

## Start Command

```bash
npm start
```

---

# 🧩 Common Errors & Fixes

# MongoDB Connection Failed

## Possible Reasons

* Invalid MongoDB URI
* IP not whitelisted
* Internet issue

## Solution

* Verify `DB_URL`
* Check MongoDB Atlas access
* Restart backend server

---

# JWT Token Invalid

## Possible Reasons

* Wrong JWT secret
* Expired token

## Solution

* Verify `JWT_SECRET`
* Login again

---

# Cloudinary Upload Failure

## Possible Reasons

* Wrong Cloudinary credentials
* Invalid API key

## Solution

* Check Cloudinary environment variables

---

# 🔮 Future Improvements

* Refresh Token Authentication
* Redis Caching
* API Rate Limiting
* Swagger Documentation
* Docker Support
* Email Verification
* Password Reset System
* Notification System
* Real-time Features using Socket.io

---

# 👨‍💻 Developed By

Vineel Krishna

B.Tech Information Technology

---

# 📜 License

This project is developed for educational and learning purposes.
