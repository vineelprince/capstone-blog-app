import { createBrowserRouter, RouterProvider } from "react-router";

import RootLayout from "./components/RootLayout";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import AuthorProfile from "./components/AuthorProfile";
import ArticleByID from "./components/ArticleById";
import AuthorArticles from "./components/AuthorArticles";
import WriteArticle from "./components/WriteArticle";
import EditArticle from "./components/EditArticleForm";
import Earnings from "./components/Earnings";
import Stats from "./components/Stats";
import AdminDashboard from "./components/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";

function App() {

  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,

      children: [

        // HOME
        {
          index: true,
          element: <Home />,
        },

        // REGISTER
        {
          path: "register",
          element: <Register />,
        },

        // LOGIN
        {
          path: "login",
          element: <Login />,
        },

        // USER PROFILE
        {
          path: "user-profile",
          element: (
            <ProtectedRoute allowedRoles={["USER"]}>
              <UserProfile />
            </ProtectedRoute>
          ),
        },

        // AUTHOR PROFILE
        {
          path: "author-profile",
          element: (
            <ProtectedRoute allowedRoles={["AUTHOR"]}>
              <AuthorProfile />
            </ProtectedRoute>
          ),

          children: [
            {
              index: true,
              element: <AuthorArticles />,
            },

            {
              path: "articles",
              element: <AuthorArticles />,
            },

            {
              path: "write-article",
              element: <WriteArticle />,
            },

            {
              path: "earnings",
              element: <Earnings />,
            },

            {
              path: "stats",
              element: <Stats />,
            },
          ],
        },

        // ADMIN PROFILE
        {
  path: "admin-profile",
  element: (
    <ProtectedRoute allowedRoles={["ADMIN"]}>
      <AdminDashboard />
    </ProtectedRoute>
  ),
},

        // ARTICLE DETAILS
        {
          path: "article/:id",
          element: <ArticleByID />,
        },

        // EDIT ARTICLE
        {
          path: "edit-article",
          element: (
            <ProtectedRoute allowedRoles={["AUTHOR"]}>
              <EditArticle />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      <RouterProvider router={routerObj} />
    </>
  );
}

export default App;