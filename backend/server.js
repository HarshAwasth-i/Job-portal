const jobRoutes = require("./routes/jobRoutes");
const authRoutes = require("./routes/authRoutes");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);

app.get("/", (req, res) => {
  res.send("Job Portal Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});