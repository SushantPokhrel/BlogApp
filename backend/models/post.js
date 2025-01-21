const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  author: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  summary: { type: String, required: true },
  date: {
    type: String,
    required: true,
    default: () => new Date().toISOString().split("T")[0],
  },
  likes: { type: Number, required: false, default: 0 },
  commentCount: { type: Number, required: false, default: 0 },
  content: { type: String, required: true },
  img: { type: String, required: true }, // URL of the image
});

module.exports = mongoose.model("Post", postSchema);
