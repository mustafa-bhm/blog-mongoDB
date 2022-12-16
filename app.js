const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
require("dotenv").config();

const apiKey = process.env.API_KEY;

//connect to MangoDB
const dbURI = `mongodb+srv://stof:${apiKey}@blog-node.xmm976o.mongodb.net/node-tuts?retryWrites=true&w=majority`;

// the second argument in connect () is to stop deprecation warning
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//register view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));
app.use(morgan("dev"));

// ***** Routes ***** //
app.get("/", (req, res) => {
  res.redirect("/blogs");
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

/// Blogs routes
app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "all Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create new blog" });
});

/// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

//************/ mongoose and mongo sandbox routes // ***************
// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "new blog 2",
//     snippet: "about my blog",
//     body: "more info about this blog",
//   });
//   // to save the above object of blog to database
//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
// // to retrive all blogs from the db collection
// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
// // to find a single blog
// app.get("/single-blog", (req, res) => {
//   Blog.findById("639c8cad5e7e47c195021cdf")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
//************************************************/
