const Blog = require("../models/blog");

// *** to extract blog handelers from the routes ***** //

// to get blogs in homepage
const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("blogs/index", { title: "all Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

// to get blog details
const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("blogs/details", { blog: result, title: "Blog details" });
    })
    .catch((err) => {
      res.status(404).render("404", { title: "Blog not found" });
    });
};

// to get new blog form view
const blog_create_get = (req, res) => {
  res.render("blogs/create", { title: "Create new blog" });
};

// to post new blog
const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
};

// to get form to  update blog
const blog_update_form = (req, res) => {
  const id = req.params.id;

  Blog.findById(id)
    .then((result) => {
      res.render("blogs/update", { blog: result, title: "Blog update" });
    })
    .catch((err) => {
      res.status(404).render("404", { title: "Blog not found" });
    });
};

// to handel req to update blog
const blog_update = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndUpdate(id, req.body)
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
};

// to delete a blog
const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
  blog_update_form,
  blog_update,
};
