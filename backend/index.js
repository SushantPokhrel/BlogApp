const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./connection");
const authRoutes = require("./routes/auth");
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
app.use("/auth", authRoutes);

app.listen(PORT, () => console.log("listening at port " + PORT));
