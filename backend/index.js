const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Import path module
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'beritadb'
});

const app = express();

// Middleware
app.use(cors()); // Tambahkan middleware CORS di sini
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

// Import routes
const beritalist = require('./routes/server');
app.use('/beritalist', beritalist);

// Middleware to handle favicon requests
app.get('/favicon.ico', (req, res) => {
    res.status(204).end(); // No content response for favicon.ico
});

// Middleware to handle root endpoint
app.get('/', (req, res) => {
  const sql = 'SELECT * FROM beritalist';
  db.query(sql, (err, results) => {
      if (err) {
          res.status(500).json({ error: 'Internal Server Error' });
          return;
      }
      res.json(results);
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
