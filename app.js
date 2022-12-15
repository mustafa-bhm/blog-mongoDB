const express = require("express");
const app = express();
const morgan = require("morgan");

//register view engine
app.set("view engine", "ejs");

/// listening for requests
app.listen(3000);

// middleware & static files
app.use(express.static("public"));
app.use(morgan("dev"));

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
