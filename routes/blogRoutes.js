const express = require("express");
const Blog = require("../models/blog");
const blogController = require("../controllers/blogController");
const router = express.Router();

/// Blogs routes
router.get("/", blogController.blog_index);

// to create new blog
router.post("/", blogController.blog_create_post);

// to get the form to create new blog
router.get("/create", blogController.blog_create_get);

router.get("/:id", blogController.blog_details);

// to delete a blog
router.delete("/:id", blogController.blog_delete);

module.exports = router;
