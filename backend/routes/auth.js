const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const USER = require("../models/user");
const router = express.Router();

// Middleware to parse cookies

// Secret for signing JWT
const JWT_SECRET = process.env.Secret_Key; // Replace with a secure secret key

// Signup route
router.post("/signup", async (req, res) => {
  try {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const { username, email, password } = req.body;

    if (!regex.test(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new USER({ username, email, password: hashedPassword });

    await user.save();
    console.log("ran 1", JWT_SECRET);
    // Generate JWT
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: "1h", // Token validity
    });
    console.log("ran2");
    // Store token in cookies
    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Secure in production
      sameSite: "strict",
      maxAge: 3600000, // 1 hour
    });

    return res.status(201).json({ username: user.username, id: user._id });
  } catch (e) {
    console.log("this ran");
    res.status(500).send("Error creating user");
  }
});

// Login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await USER.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: "1h",
    });

    // Store token in cookies
    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 3600000, // 1 hour
    });

    return res.status(200).json({ message: "Login successful" });
  } catch (e) {
    res.status(500).send("Error logging in");
  }
});

// Middleware to verify JWT
const authenticate = (req, res, next) => {
  const token = req.cookies.auth_token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach user info to the request
    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid or expired token" });
  }
};

// Protected route example
router.get("/protected", authenticate, (req, res) => {
  res.status(200).json({ message: `Welcome, user ${req.user.id}` });
});

module.exports = router;
