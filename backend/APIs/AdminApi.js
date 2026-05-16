import express from "express";
import { authenticate } from "../services/authService.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import { ArticleModel } from "../Models/ArticleModel.js";
import { UserTypeModel } from "../Models/UserModel.js";

// role based verification
const checkAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== "ADMIN") {
    return res.status(403).json({
      message: "Access denied: Admin only",
    });
  }

  next();
};

export const adminRoute = express.Router();


// ==========================
// ADMIN LOGIN
// ==========================
adminRoute.post("/authenticate", async (req, res, next) => {
  try {
    const result = await authenticate(req.body);

    res.status(200).json({
      message: "Admin login success",
      payload: result,
    });
  } catch (err) {
    next(err);
  }
});


// ==========================
// GET ALL USERS
// ==========================
adminRoute.get(
  "/users",
  verifyToken(["ADMIN"]),
  checkAdmin,
  async (req, res) => {
    try {
      const users = await UserTypeModel.find().select("-password");

      res.status(200).json({
        message: "Users fetched successfully",
        payload: users,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  }
);


// ==========================
// GET ALL ARTICLES
// ==========================
adminRoute.get(
  "/articles",
  verifyToken(["ADMIN"]),
  checkAdmin,
  async (req, res) => {
    try {
      const articles = await ArticleModel.find()
        .populate("author", "firstName lastName email");

      res.status(200).json({
        message: "Articles fetched successfully",
        payload: articles,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  }
);


// ==========================
// GET ARTICLES BY AUTHOR
// ==========================
adminRoute.get(
  "/articles/author/:authorId",
  verifyToken(["ADMIN"]),
  checkAdmin,
  async (req, res) => {
    try {
      const authorId = req.params.authorId;

      const articles = await ArticleModel.find({
        author: authorId,
      }).populate("author", "firstName lastName");

      res.status(200).json({
        message: "Author articles fetched successfully",
        payload: articles,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  }
);


// ==========================
// DELETE ARTICLE
// ==========================
adminRoute.delete(
  "/articles/:articleId",
  verifyToken(["ADMIN"]),
  checkAdmin,
  async (req, res) => {
    try {

      const articleId = req.params.articleId;

      const deletedArticle =
        await ArticleModel.findByIdAndDelete(articleId);

      if (!deletedArticle) {
        return res.status(404).json({
          message: "Article not found",
        });
      }

      res.status(200).json({
        message: "Article deleted successfully",
      });

    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  }
);


// ==========================
// BLOCK USER
// ==========================
adminRoute.put(
  "/users/block/:userId",
  verifyToken(["ADMIN"]),
  checkAdmin,
  async (req, res) => {
    try {

      const userId = req.params.userId;

      // prevent self block
      if (req.user.userId === userId) {
        return res.status(400).json({
          message: "You cannot block yourself",
        });
      }

      const user =
        await UserTypeModel.findById(userId);

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      // prevent blocking admins
      if (user.role === "ADMIN") {
        return res.status(403).json({
          message: "Admins cannot be blocked",
        });
      }

      user.isActive = false;

      await user.save();

      res.status(200).json({
        message: "User blocked successfully",
        payload: user,
      });

    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  }
);


// ==========================
// UNBLOCK USER
// ==========================
adminRoute.put(
  "/users/unblock/:userId",
  verifyToken(["ADMIN"]),
  checkAdmin,
  async (req, res) => {
    try {

      const userId = req.params.userId;

      const user =
        await UserTypeModel.findById(userId);

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      user.isActive = true;

      await user.save();

      res.status(200).json({
        message: "User unblocked successfully",
        payload: user,
      });

    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  }
);


// ==========================
// ADMIN ANALYTICS
// ==========================
adminRoute.get(
  "/analytics",
  verifyToken(["ADMIN"]),
  checkAdmin,
  async (req, res) => {
    try {

      const totalUsers =
        await UserTypeModel.countDocuments();

      const totalArticles =
        await ArticleModel.countDocuments();

      const activeUsers =
        await UserTypeModel.countDocuments({
          isActive: true,
        });

      const blockedUsers =
        await UserTypeModel.countDocuments({
          isActive: false,
        });

      res.status(200).json({
        payload: {
          totalUsers,
          totalArticles,
          activeUsers,
          blockedUsers,
        },
      });

    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  }
);