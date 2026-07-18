const db = require("../config/db");

const applyJob = (req, res) => {
  const { user_id, job_id } = req.body;

  if (!user_id || !job_id) {
    return res.status(400).json({
      message: "User ID and Job ID are required",
    });
  }

  // Check if already applied
  db.query(
    "SELECT * FROM applications WHERE user_id = ? AND job_id = ?",
    [user_id, job_id],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      if (result.length > 0) {
        return res.status(400).json({
          message: "You have already applied for this job",
        });
      }

      db.query(
        "INSERT INTO applications (user_id, job_id) VALUES (?, ?)",
        [user_id, job_id],
        (err) => {
          if (err) {
            return res.status(500).json(err);
          }

          res.status(201).json({
            message: "Application Submitted Successfully",
          });
        }
      );
    }
  );
};

const getUserApplications = (req, res) => {
  const { userId } = req.params;

  db.query(
    `SELECT
      applications.id,
      applications.status,
      applications.applied_at,
      jobs.title,
      jobs.company,
      jobs.location,
      jobs.salary
    FROM applications
    JOIN jobs ON applications.job_id = jobs.id
    WHERE applications.user_id = ?`,
    [userId],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(200).json(result);
    }
  );
};

const getApplicantsByJob = (req, res) => {
  const { jobId } = req.params;

  db.query(
    `SELECT
      applications.id,
      applications.status,
      applications.applied_at,
      users.name,
      users.email
    FROM applications
    JOIN users
      ON applications.user_id = users.id
    WHERE applications.job_id = ?`,
    [jobId],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(200).json(result);
    }
  );
};

module.exports = {
  applyJob,
  getUserApplications,
  getApplicantsByJob,
};