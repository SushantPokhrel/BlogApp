const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const USER = require("../models/user");
const router = express.Router();

// Middleware to parse cookies

// Secret for signing JWT
const JWT_SECRET = process.env.Secret_Key; // Replace with a secure secret key
router.post("/signup", async (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !email || !password)
    return res.status(400).json({ message: "Must provide credentials" });
  try {
    // password hashing
    const hashedPassword = await bcrypt.hash(password, 10);

    const User = new USER({
      username,
      password: hashedPassword,
      email,
    });
    const user = User.save();
    return res.status(201).json({ message: "user created successfully" });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "user signup failed" });
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Must provide credentials" });
  }

  try {
    // Find user by email
    const user = await USER.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "user doesn't exist" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email, username: user.username },
      process.env.Secret_Key,
      { expiresIn: "1h" }
    );

    // Send token in cookies securely
    res.cookie("token", token, {
      secure: process.env.NODE_ENV === "development", // Ensure secure cookie in production
      sameSite: "Strict", // Prevents cross-site request forgery
      maxAge: 1 * 60 * 60 * 1000,
    });

    return res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
