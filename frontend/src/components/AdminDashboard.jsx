import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config/apiConfig";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchArticles();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/admin-api/users`,
        {
          withCredentials: true,
        }
      );

      setUsers(res.data.payload);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchArticles = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/admin-api/articles`,
        {
          withCredentials: true,
        }
      );

      setArticles(res.data.payload);
    } catch (err) {
      console.log(err);
    }
  };

  const toggleBlock = async (user) => {
    try {
      const endpoint = user.isActive
        ? "block"
        : "unblock";

      await axios.put(
        `${BASE_URL}/admin-api/users/${endpoint}/${user._id}`,
        {},
        {
          withCredentials: true,
        }
      );

      fetchUsers();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="py-8 space-y-12">

      {/* HEADER */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">
          Admin Dashboard
        </h1>

        <p className="text-gray-600 mt-2">
          Manage users, articles, and platform activity.
        </p>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h3 className="text-gray-500 text-sm mb-2">
            Total Users
          </h3>

          <p className="text-3xl font-bold">
            {users.length}
          </p>
        </div>

        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h3 className="text-gray-500 text-sm mb-2">
            Total Articles
          </h3>

          <p className="text-3xl font-bold">
            {articles.length}
          </p>
        </div>

        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h3 className="text-gray-500 text-sm mb-2">
            Active Users
          </h3>

          <p className="text-3xl font-bold">
            {users.filter((u) => u.isActive).length}
          </p>
        </div>
      </div>

      {/* USERS SECTION */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">
          Users Management
        </h2>

        <div className="space-y-4">
          {users.map((user) => (
            <div
              key={user._id}
              className="bg-white border rounded-xl p-5 flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold text-lg">
                  {user.firstName} {user.lastName}
                </h3>

                <p className="text-gray-500 text-sm">
                  {user.email}
                </p>

                <p className="text-sm mt-1">
                  Role:
                  <span className="font-medium ml-1">
                    {user.role}
                  </span>
                </p>
              </div>

              <button
                onClick={() => toggleBlock(user)}
                className={`px-4 py-2 rounded-lg text-white ${
                  user.isActive
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-green-500 hover:bg-green-600"
                }`}
              >
                {user.isActive ? "Block" : "Unblock"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ARTICLES SECTION */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">
          Articles
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <div
              key={article._id}
              className="bg-white border rounded-xl p-6"
            >
              <p className="text-sm text-gray-500 mb-2">
                {article.category}
              </p>

              <h3 className="text-xl font-semibold mb-3">
                {article.title}
              </h3>

              <p className="text-gray-600 text-sm line-clamp-4">
                {article.content}
              </p>

              <div className="mt-4 text-sm text-gray-500">
                By {article.author?.firstName}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;