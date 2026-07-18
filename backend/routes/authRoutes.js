const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");

const {
  register,
  login,
  getProfile,
  uploadResume,
} = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.get("/profile/:id", getProfile);
router.post(
  "/upload-resume/:id",
  upload.single("resume"),
  uploadResume
);

module.exports = router;