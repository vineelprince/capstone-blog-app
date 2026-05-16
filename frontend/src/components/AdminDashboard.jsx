import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config/apiConfig";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaNewspaper,
  FaUserCheck,
  FaTrash,
  FaSearch,
} from "react-icons/fa";
import toast from "react-hot-toast";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("ALL");

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

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

  // BLOCK / UNBLOCK
  const toggleBlock = async (user) => {
    try {
      // prevent self block
      if (user._id === currentUser?._id) {
        toast.error("You cannot block yourself");
        return;
      }

      // prevent blocking another admin
      if (user.role === "ADMIN") {
        toast.error("Admins cannot be blocked");
        return;
      }

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

      toast.success(
        user.isActive
          ? "User blocked"
          : "User unblocked"
      );

      fetchUsers();

    } catch (err) {
      console.log(err);
      toast.error("Action failed");
    }
  };

  // DELETE ARTICLE
  const deleteArticle = async (id) => {
    try {
      await axios.delete(
        `${BASE_URL}/admin-api/articles/${id}`,
        {
          withCredentials: true,
        }
      );

      toast.success("Article deleted");

      setArticles(
        articles.filter((a) => a._id !== id)
      );

    } catch (err) {
      console.log(err);
      toast.error("Delete failed");
    }
  };

  // FILTER USERS
  const filteredUsers = users.filter((user) => {

    const matchesSearch =
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesRole =
      roleFilter === "ALL"
        ? true
        : user.role === roleFilter;

    return matchesSearch && matchesRole;
  });

  return (
    <div className="min-h-screen bg-[#f4f7fb] flex">

      {/* SIDEBAR */}
      <div className="w-[260px] bg-[#111827] text-white min-h-screen p-6 hidden md:flex flex-col shadow-2xl">

        <h1 className="text-3xl font-bold mb-12 tracking-wide">
          Admin Panel
        </h1>

        <div className="space-y-4">

          <button className="w-full text-left px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all duration-300">
            Dashboard
          </button>

          <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-800 transition-all duration-300">
            Users
          </button>

          <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-800 transition-all duration-300">
            Articles
          </button>

          <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-800 transition-all duration-300">
            Analytics
          </button>

        </div>

        <div className="mt-auto text-sm text-gray-400 border-t border-gray-700 pt-4">
          MERN Blog Admin
        </div>

      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-8 overflow-y-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >

          <h1 className="text-5xl font-bold text-gray-800">
            Welcome Back, Admin 👋
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Manage your platform professionally.
          </p>

        </motion.div>

        {/* STATS */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-12">

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-6 text-white shadow-lg"
          >
            <FaUsers className="text-3xl mb-4" />

            <h2 className="text-lg">
              Total Users
            </h2>

            <p className="text-4xl font-bold mt-3">
              {users.length}
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-r from-green-500 to-green-700 rounded-2xl p-6 text-white shadow-lg"
          >
            <FaUserCheck className="text-3xl mb-4" />

            <h2 className="text-lg">
              Active Users
            </h2>

            <p className="text-4xl font-bold mt-3">
              {users.filter((u) => u.isActive).length}
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl p-6 text-white shadow-lg"
          >
            <FaNewspaper className="text-3xl mb-4" />

            <h2 className="text-lg">
              Articles
            </h2>

            <p className="text-4xl font-bold mt-3">
              {articles.length}
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-r from-red-500 to-red-700 rounded-2xl p-6 text-white shadow-lg"
          >
            <h2 className="text-lg">
              Authors
            </h2>

            <p className="text-4xl font-bold mt-3">
              {
                users.filter(
                  (u) => u.role === "AUTHOR"
                ).length
              }
            </p>
          </motion.div>

        </div>

        {/* USER MANAGEMENT */}
        <div className="bg-white rounded-3xl shadow-md p-8 mb-12">

          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">

            <h2 className="text-3xl font-bold text-gray-800">
              User Management
            </h2>

            <div className="flex flex-col md:flex-row gap-4">

              <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3">
                <FaSearch className="text-gray-400 mr-3" />

                <input
                  type="text"
                  placeholder="Search users..."
                  className="bg-transparent outline-none"
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                />
              </div>

              <select
                className="border border-gray-300 rounded-xl px-4 py-3 outline-none"
                value={roleFilter}
                onChange={(e) =>
                  setRoleFilter(e.target.value)
                }
              >
                <option value="ALL">
                  All Roles
                </option>

                <option value="USER">
                  USER
                </option>

                <option value="AUTHOR">
                  AUTHOR
                </option>

                <option value="ADMIN">
                  ADMIN
                </option>

              </select>

            </div>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>
                <tr className="border-b text-left text-gray-500">

                  <th className="py-4 font-semibold">
                    User
                  </th>

                  <th className="font-semibold">
                    Role
                  </th>

                  <th className="font-semibold">
                    Status
                  </th>

                  <th className="font-semibold">
                    Action
                  </th>

                </tr>
              </thead>

              <tbody>

                {filteredUsers.map((user) => (

                  <tr
                    key={user._id}
                    className="border-b hover:bg-gray-50 transition-all duration-300"
                  >

                    <td className="py-5">

                      <div>

                        <p className="font-semibold text-gray-800">
                          {user.firstName}{" "}
                          {user.lastName}
                        </p>

                        <p className="text-sm text-gray-500">
                          {user.email}
                        </p>

                      </div>

                    </td>

                    <td>

                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                        {user.role}
                      </span>

                    </td>

                    <td>

                      <span
                        className={`px-3 py-1 rounded-full text-white text-sm ${
                          user.isActive
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      >
                        {user.isActive
                          ? "Active"
                          : "Blocked"}
                      </span>

                    </td>

                    <td>

                      <button
                        onClick={() =>
                          toggleBlock(user)
                        }
                        className={`px-5 py-2 rounded-xl text-white font-medium transition-all duration-300 ${
                          user.isActive
                            ? "bg-red-500 hover:bg-red-600"
                            : "bg-green-500 hover:bg-green-600"
                        }`}
                      >
                        {user.isActive
                          ? "Block"
                          : "Unblock"}
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* ARTICLES */}
        <div className="bg-white rounded-3xl shadow-md p-8">

          <div className="flex justify-between items-center mb-8">

            <h2 className="text-3xl font-bold text-gray-800">
              Articles Management
            </h2>

            <p className="text-gray-500">
              Total Articles: {articles.length}
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-6">

            {articles.map((article) => (

              <motion.div
                key={article._id}
                whileHover={{ y: -5 }}
                className="border rounded-3xl p-6 hover:shadow-xl transition-all duration-300 bg-gray-50"
              >

                <div className="flex justify-between items-center mb-5">

                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {article.category}
                  </span>

                  <button
                    onClick={() =>
                      deleteArticle(article._id)
                    }
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <FaTrash size={18} />
                  </button>

                </div>

                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  {article.title}
                </h3>

                <p className="text-gray-600 line-clamp-4 leading-relaxed">
                  {article.content}
                </p>

                <div className="mt-6 flex items-center justify-between">

                  <div>

                    <p className="text-sm text-gray-400">
                      Published By
                    </p>

                    <p className="font-semibold text-gray-700">
                      {article.author?.firstName}{" "}
                      {article.author?.lastName}
                    </p>

                  </div>

                  <a
                    href={`/article/${article._id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition-all duration-300 text-sm"
                  >
                    View Article
                  </a>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;