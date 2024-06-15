const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'javawebmedia_webci4'
});

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


// Import routes
const berita = require('./routes/server');
app.use('/berita', berita);

// Middleware to handle favicon requests
app.get('/favicon.ico', (req, res) => {
  res.status(204).end();
});

// Middleware to handle root endpoint
app.get('/', (req, res) => {
  const sql = 'SELECT id_berita, judul_berita, jenis_berita, ringkasan, keywords, gambar FROM berita';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});
// Endpoint untuk mendapatkan jenis berita 
app.get('/jenisberita', (req, res) => {
  const sql = 'SELECT id_berita, judul_berita, jenis_berita, ringkasan, keywords, gambar FROM berita where jenis_berita = "Berita"';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});
app.get('/jenislayanan', (req, res) => {
  const sql = 'SELECT id_berita, judul_berita, jenis_berita, ringkasan, keywords, gambar FROM berita where jenis_berita = "Layanan"';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});
app.get('/jenisprofil', (req, res) => {
  const sql = 'SELECT id_berita, judul_berita, jenis_berita, ringkasan, keywords, gambar FROM berita where jenis_berita = "Profil"';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});

app.get('/images', (req, res) => {
  const sql = 'SELECT gambar FROM berita';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});
app.get('/item', (req, res) => {
  const sql = 'SELECT DISTINCT jenis_berita FROM berita';
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
module.exports = db;
