const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const USER = require("../models/user");
const router = express.Router();
router.post("/signup", async (req, res) => {
  try {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const { username, email, password } = req.body;
    if (!regex.test(email))
      return res.status(400).json({
        message: "invalid email",
      });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new USER({
      username: username,
      email: email,
      password: hashedPassword,
    });
    await user.save();
    return res.status(201).json({ username: user.username, id: user._id });
  } catch (e) {
    res.status(500).send("Error creating user");
  }
});
module.exports = router;
