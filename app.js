const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
require("dotenv").config();
const port = process.env.PORT || 3000;

const apiKey = process.env.API_KEY;

//connect to MangoDB
const dbURI = `mongodb+srv://stof:${apiKey}@blog-node.xmm976o.mongodb.net/node-tuts?retryWrites=true&w=majority`;

// the second argument in connect () is to stop deprecation warning
mongoose.set("strictQuery", false);
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(port))
  .catch((err) => console.log(err));

//register view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// ***** Routes ***** //
app.get("/", (req, res) => {
  res.redirect("/blogs");
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// blog routes
app.use("/blogs", blogRoutes);

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
