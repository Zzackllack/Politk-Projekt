const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001; // Use port 3001 for the API server

app.use(cors());
app.use(bodyParser.json());

// Decode the password
const dbPassword = decodeURIComponent(process.env.DB_PASSWORD);

// Create a connection to the database
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: dbPassword,
  database: process.env.DB_NAME,
  port: 3306, // Ensure the correct port is used
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database");
});

// API endpoint to get leaderboard entries
app.get("/api/leaderboard", (req, res) => {
  db.query("SELECT * FROM leaderboard ORDER BY score DESC", (err, results) => {
    if (err) {
      console.error("Error fetching leaderboard:", err);
      res.status(500).send("Error fetching leaderboard");
      return;
    }
    res.json(results);
  });
});

// API endpoint to add a new leaderboard entry
app.post("/api/leaderboard", (req, res) => {
  const { name, score } = req.body;
  db.query(
    "INSERT INTO leaderboard (name, score) VALUES (?, ?)",
    [name, score],
    (err, results) => {
      if (err) {
        console.error("Error adding leaderboard entry:", err);
        res.status(500).send("Error adding leaderboard entry");
        return;
      }
      res.status(201).send("Leaderboard entry added");
    }
  );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
