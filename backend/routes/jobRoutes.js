const express = require("express");
const router = express.Router();

const {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");

router.get("/", getAllJobs);
router.post("/", createJob);
router.delete("/:id", deleteJob);
router.put("/:id", updateJob);
router.get("/:id", getJobById);

module.exports = router;