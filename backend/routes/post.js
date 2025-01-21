const express = require("express");
const POST = require("../models/post");
const router = express.Router();

// POST route to create a new blog post
router.post("/blog", async (req, res) => {
  try {
    const { author, title, summary, content, img } = req.body;
    const post = new POST({
      author: author,
      title: title,
      summary: summary,
      content: content,
      img: img,
    });
    const savedPost = await post.save();
    console.log(savedPost);
    res.status(200).json({ message: "posting..." });
  } catch (e) {
    res.status(500).send("Error posting your blog.");
  }
});

// GET route to retrieve all blog posts
router.get("/blogs", async (req, res) => {
  try {
    const posts = await POST.find({});
   return res.status(200).json(posts); // Return all documents as a JSON array
  } catch (e) {
    res.status(500).send("Error fetching blogs.");
  }
});

module.exports = router;
