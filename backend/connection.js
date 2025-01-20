const mongoose = require("mongoose");
function connectDB() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("mongodb connected"))
    .catch((e) => console.log(e));
}
module.exports = connectDB