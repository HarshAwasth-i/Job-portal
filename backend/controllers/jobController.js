const db = require("../config/db");

const getAllJobs = (req, res) => {
  db.query(
    "SELECT * FROM jobs ORDER BY created_at DESC",
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(200).json(result);
    }
  );
};

// 👇 ADD THIS FUNCTION HERE
const createJob = (req, res) => {
  const {
    title,
    company,
    location,
    salary,
    job_type,
    experience,
    description,
    skills,
    recruiter_id,
  } = req.body;

  if (
    !title ||
    !company ||
    !location ||
    !job_type ||
    !description ||
    !recruiter_id
  ) {
    return res.status(400).json({
      message: "Please fill all required fields",
    });
  }

  db.query(
    `INSERT INTO jobs
    (title, company, location, salary, job_type, experience, description, skills, recruiter_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      title,
      company,
      location,
      salary,
      job_type,
      experience,
      description,
      skills,
      recruiter_id,
    ],
    (err) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(201).json({
        message: "Job Created Successfully",
      });
    }
  );
};

module.exports = {
  getAllJobs,
  createJob,
};