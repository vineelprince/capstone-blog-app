import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { BASE_URL } from "../config/apiConfig";

function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/user-api/articles`,
          {
            withCredentials: true,
          }
        );

        setArticles(res.data.payload || []);
      } catch (err) {
        console.log("Failed to fetch articles", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const openArticle = (article) => {
    navigate(`/article/${article._id}`, {
      state: article,
    });
  };

  return (
    <div className="bg-gray-50 text-gray-800">

      {/* HERO SECTION */}
      <div className="py-28 px-6 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight text-gray-900">
          Write freely. Share openly.
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          A simple and powerful platform to publish your ideas and connect with readers.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/author-profile/write-article")}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 active:scale-95 transition"
          >
            Start Writing
          </button>

          <button
            onClick={() => navigate("/user-profile")}
            className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Explore Blogs
          </button>
        </div>
      </div>

      {/* FEATURES */}
      <div className="grid md:grid-cols-3 gap-6 px-6 sm:px-20 mb-20">
        <div className="bg-white border rounded-xl p-8 hover:shadow-md transition duration-200">
          <h3 className="text-xl font-semibold mb-3">Simple Editor</h3>
          <p className="text-gray-600">
            Focus on writing without distractions.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-8 hover:shadow-md transition duration-200">
          <h3 className="text-xl font-semibold mb-3">Community</h3>
          <p className="text-gray-600">
            Discover and follow great authors.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-8 hover:shadow-md transition duration-200">
          <h3 className="text-xl font-semibold mb-3">Growth</h3>
          <p className="text-gray-600">
            Build your presence with consistent writing.
          </p>
        </div>
      </div>

      {/* LATEST ARTICLES */}
      <div className="px-6 sm:px-20 pb-20">
        <h2 className="text-3xl font-bold mb-10 text-gray-900">
          Latest Articles
        </h2>

        {loading ? (
          <p className="text-gray-500">Loading articles...</p>
        ) : articles.length === 0 ? (
          <p className="text-gray-500">No articles published yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(0, 6).map((article) => (
              <div
                key={article._id}
                onClick={() => openArticle(article)}
                className="bg-white border rounded-2xl p-6 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition duration-200"
              >
                {/* Category */}
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-3">
                  {article.category}
                </p>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 line-clamp-2">
                  {article.title}
                </h3>

                {/* Content */}
                <p className="text-gray-600 text-sm leading-6 mb-6 line-clamp-4">
                  {article.content}
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-4">
                  <span>
                    {article.author?.firstName || "Author"}
                  </span>

                  <span>
                    {new Date(article.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA SECTION */}
      <div className="bg-black text-white py-20 text-center px-6">
        <h2 className="text-4xl font-bold mb-4">
          Start sharing your ideas today.
        </h2>

        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Create articles, grow your audience, and become part of a thriving writing community.
        </p>

        <button
          onClick={() => navigate("/register")}
          className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Home;