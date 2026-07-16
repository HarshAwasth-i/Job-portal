const express = require("express");
const router = express.Router();

const {
  applyJob,
  getUserApplications,
} = require("../controllers/applicationController");

router.post("/", applyJob);

router.get("/user/:userId", getUserApplications);

module.exports = router;