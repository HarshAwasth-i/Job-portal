const db = require("../config/db");

// Get All Jobs
const getAllJobs = (req, res) => {
  const { search, jobType, location } = req.query;

  let query = "SELECT * FROM jobs WHERE 1=1";
  let values = [];

  // Search
  if (search) {
    query += `
      AND (
        title LIKE ?
        OR company LIKE ?
        OR location LIKE ?
        OR skills LIKE ?
      )
    `;

    values.push(
      `%${search}%`,
      `%${search}%`,
      `%${search}%`,
      `%${search}%`
    );
  }

  // Job Type Filter
  if (jobType) {
    query += " AND job_type = ?";
    values.push(jobType);
  }

  // Location Filter
if (location) {
  query += " AND location LIKE ?";
  values.push(`%${location}%`);
}

  query += " ORDER BY created_at DESC";

  db.query(query, values, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.status(200).json(result);
  });
};
// Get Single Job By ID
const getJobById = (req, res) => {
  const { id } = req.params;

  db.query(
    "SELECT * FROM jobs WHERE id = ?",
    [id],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      if (result.length === 0) {
        return res.status(404).json({
          message: "Job not found",
        });
      }

      res.status(200).json(result[0]);
    }
  );
};

// Create Job
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

// Update Job
const updateJob = (req, res) => {
  const { id } = req.params;

  const {
    title,
    company,
    location,
    salary,
    job_type,
    experience,
    description,
    skills,
  } = req.body;

  db.query(
    `UPDATE jobs
     SET
       title = ?,
       company = ?,
       location = ?,
       salary = ?,
       job_type = ?,
       experience = ?,
       description = ?,
       skills = ?
     WHERE id = ?`,
    [
      title,
      company,
      location,
      salary,
      job_type,
      experience,
      description,
      skills,
      id,
    ],
    (err) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(200).json({
        message: "Job Updated Successfully",
      });
    }
  );
};

// Delete Job
const deleteJob = (req, res) => {
  const { id } = req.params;

  db.query(
    "DELETE FROM jobs WHERE id = ?",
    [id],
    (err) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(200).json({
        message: "Job Deleted Successfully",
      });
    }
  );
};

module.exports = {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
};