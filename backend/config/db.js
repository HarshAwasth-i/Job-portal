const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Harshawa@#123",
  database: "job_portal",
});

connection.connect((err) => {
  if (err) {
    console.log("❌ Database Connection Failed");
    console.log(err);
    return;
  }

  console.log("✅ MySQL Connected Successfully");
});

module.exports = connection;