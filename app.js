// app.js
const express = require("express");
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// POST /execute endpoint
app.post("/execute", (req, res) => {
  const { command } = req.body;
  // Execute command on the database
  res.json({ result: "Command executed" });
});

// POST /query endpoint
app.post("/query", (req, res) => {
  const { query } = req.body;
  // Query the database
  res.json({ result: "Query result" });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
