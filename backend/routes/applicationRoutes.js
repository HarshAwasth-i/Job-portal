const express = require("express");
const router = express.Router();

const {
  applyJob,
  getUserApplications,
  getApplicantsByJob,
} = require("../controllers/applicationController");

router.post("/", applyJob);

router.get("/user/:userId", getUserApplications);

router.get("/job/:jobId", getApplicantsByJob);
module.exports = router;