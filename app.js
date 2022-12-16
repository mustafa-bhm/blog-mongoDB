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

// mongoose and mongo sandbox routes
app.get("/add-blog", (req, res) => {
  const blog = new Blog();
});

// homepage
app.get("/", (req, res) => {
  const blogs = [
    {
      title: "This is blog number 1",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "This is blog number 2",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "This is blog number 3",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { title: "Home", blogs: blogs });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create new blog" });
});

/// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
