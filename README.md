🚀 InkFlow — Full Stack MERN Blogging Platform

A modern, scalable, and responsive blogging platform built with the MERN Stack, focused on seamless content creation, secure authentication, and a clean user experience.

🌐 Live Demo: BlogSphere Live Website

<div align="center">












</div>
✨ Project Overview

BlogSphere is a full-stack blogging application developed as a Capstone Project under the SUNTEK ATP Program.

The platform enables users to:

✅ Create Blogs
✅ Edit & Delete Posts
✅ Read Dynamic Content
✅ Securely Authenticate Users
✅ Manage User-Specific Blogs
✅ Experience a Clean & Responsive Interface

The application follows industry-standard MERN architecture with RESTful APIs and cloud deployment.

🎯 Key Features
🔐 Authentication System
Secure Login & Registration
JWT-Based Authentication
Protected Routes
📝 Blog Management
Create New Blogs
Update Existing Blogs
Delete Blogs
Dynamic Blog Rendering
🎨 Modern UI
Fully Responsive Design
Professional Layout
Clean User Experience
Optimized Components
⚡ Backend Functionalities
REST API Architecture
MongoDB Integration
Express Middleware Handling
Secure Environment Variables
🛠️ Tech Stack
Technology	Purpose
React.js	Frontend UI
Node.js	Backend Runtime
Express.js	API Framework
MongoDB	Database
JWT	Authentication
Axios	API Requests
React Router	Navigation
Vercel	Frontend Deployment
Render	Backend Deployment
📂 Folder Structure
BLOG-APP/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── config/
│   └── server.js
│
├── .gitignore
├── README.md
└── package.json
⚙️ Installation Guide
1️⃣ Clone the Repository
git clone https://github.com/your-username/your-repository-name.git
2️⃣ Navigate into the Project
cd BLOG-APP
3️⃣ Install Frontend Dependencies
cd frontend
npm install
4️⃣ Install Backend Dependencies
cd backend
npm install
5️⃣ Setup Environment Variables

Create a .env file inside the backend folder.

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
6️⃣ Run the Backend Server
npm start

OR

nodemon server.js
7️⃣ Run the Frontend
cd frontend
npm run dev
🚀 Deployment Guide
Frontend Deployment — Vercel
Step 1:

Push your project to GitHub.

Step 2:

Open:
Vercel Official Website

Step 3:
Import Repository
Select Frontend Folder
Add Environment Variables
Deploy
Backend Deployment — Render
Step 1:

Open:
Render Official Website

Step 2:
Create New Web Service
Connect GitHub Repository
Add Build Command
npm install
Add Start Command
node server.js
Add Environment Variables
Deploy Backend
🔥 API Endpoints
Method	Endpoint	Description
POST	/register	Register User
POST	/login	Login User
GET	/blogs	Fetch Blogs
POST	/create	Create Blog
PUT	/update/:id	Update Blog
DELETE	/delete/:id	Delete Blog
📸 Project Preview
🏠 Home Page

Add Screenshot Here

🔐 Login Page

Add Screenshot Here

✍️ Create Blog Page

Add Screenshot Here

📖 Blog Details Page

Add Screenshot Here

👨‍💻 My Contribution

In this Capstone Project, my primary contributions were focused on backend development and API integration.

Responsibilities:
Developed REST APIs
Implemented Authentication System
Integrated MongoDB Database
Managed Backend Logic
Connected Frontend & Backend APIs
Handled Server Deployment
📈 Future Enhancements
🌙 Dark Mode
❤️ Like & Comment System
🔍 Advanced Search
🏷️ Blog Categories & Tags
📱 Mobile Optimization
🧠 AI-Powered Blog Suggestions
📊 Admin Dashboard
🧠 Learning Outcomes

This project helped me strengthen my knowledge in:

Full Stack MERN Development
API Architecture
Authentication & Security
Database Design
Deployment & Hosting
Team Collaboration
Real-World Project Workflow
🤝 Acknowledgements

Special thanks to:

SUNTEK ATP Program
Mentors & Reviewers
Project Team Members
Open Source Community
👤 Author
VINEEL KRISHNA

🎓 B.Tech Information Technology Student
🚀 Full Stack Developer
🏛️ President — Python Club, Anurag University
💡 MSME Funded Project Developer

⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

It motivates developers more than debugging at 2 AM.
And trust me... that says a lot. 😄

💻 Run Locally
# Clone Repository
git clone <repo-link>

# Frontend Setup
cd frontend
npm install
npm run dev

# Backend Setup
cd backend
npm install
npm start
📜 License

This project is developed for educational and learning purposes.
