const express = require("express");
const blogController = require("../controllers/blogController");
const router = express.Router();

/// Blogs routes
router.get("/", blogController.blog_index);

// to create new blog
router.post("/", blogController.blog_create_post);

// to get the form to create new blog
router.get("/create", blogController.blog_create_get);

// to get the form to update blog
router.get("/update/:id", blogController.blog_update_form);

// to update blog
router.post("/update/:id", blogController.blog_update);

router.get("/:id", blogController.blog_details);

// to delete a blog
router.delete("/:id", blogController.blog_delete);

module.exports = router;
