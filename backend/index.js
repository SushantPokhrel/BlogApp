const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");
const cookieParser = require("cookie-parser");
const connectDB = require("./connection");
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");
dotenv.config();

const app = express();
connectDB();

const PORT = process.env.PORT || 8001;

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file);
    cb(null, "uploads/"); // Specify upload directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
  },
});

// File filter to allow only image types
const fileFilter = (req, file, cb) => {
  // Check MIME type
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true); // Accept the file
  } else {
    cb(new Error("Only image files are allowed!"), false); // Reject the file
  }
};

// Multer upload middleware with file filter
const upload = multer({
  storage,
  fileFilter,
});

// Routes
app.use("/auth", authRoutes);
app.use("/post", upload.single("image"), postRoutes);

app.listen(PORT, () => console.log("Listening at port " + PORT));
