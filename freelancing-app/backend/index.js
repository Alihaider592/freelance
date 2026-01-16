
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected via Mongoose ✅"))
  .catch((err) => console.error("MongoDB connection error ❌", err));

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
