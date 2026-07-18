const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../config/db");

const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    db.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      async (err, result) => {
        if (err) {
          return res.status(500).json(err);
        }

        if (result.length > 0) {
          return res.status(400).json({
            message: "User already exists",
          });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        db.query(
          "INSERT INTO users(name,email,password,role) VALUES(?,?,?,?)",
          [
            name,
            email,
            hashedPassword,
            role || "candidate",
          ],
          (err) => {
            if (err) {
              return res.status(500).json(err);
            }

            res.status(201).json({
              message: "Registration Successful",
            });
          }
        );
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    db.query(
  "SELECT * FROM users WHERE email = ?",
  [email],
  async (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (result.length === 0) {
      return res.status(400).json({
        message: "User does not exist",
      });
    }

  const isMatch = await bcrypt.compare(
  password,
  result[0].password
);

if (!isMatch) {
  return res.status(400).json({
    message: "Invalid Password",
  });
}

const token = jwt.sign(
  {
    id: result[0].id,
    email: result[0].email,
    role: result[0].role,
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "7d",
  }
);

res.status(200).json({
  message: "Login Successful",
  token,
  user: {
    id: result[0].id,
    name: result[0].name,
    email: result[0].email,
    role: result[0].role,
  },
});

  }
);

  } catch (error) {
    res.status(500).json(error);
  }
};
const getProfile = (req, res) => {
  const { id } = req.params;
const query =
  "SELECT id, name, email, role, resume FROM users WHERE id = ?";

  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (result.length === 0) {
      return res
        .status(404)
        .json({ message: "User not found" });
    }

    res.json(result[0]);
  });
};

const uploadResume = (req, res) => {
  const { id } = req.params;

  if (!req.file) {
    return res.status(400).json({
      message: "No file uploaded",
    });
  }

  const query =
    "UPDATE users SET resume = ? WHERE id = ?";

  db.query(
    query,
    [req.file.filename, id],
    (err) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Resume uploaded successfully",
        filename: req.file.filename,
      });
    }
  );
};

module.exports = {
  register,
  login,
  getProfile,
  uploadResume,
};