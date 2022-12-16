const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// the Schema is what will define the structure of the document that will be stored later in the data collection in MongoDB
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// to create a model that wraps the Schema and provides an interface to communicate with the DB collection
// the 1st argument is the singular name of the collection in our DB which is "blog"
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
