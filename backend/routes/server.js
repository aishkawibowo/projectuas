const express = require('express');
const router = express.Router();
const db = require('../index');

// Route untuk mendapatkan semua berita
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM berita';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});

// Route untuk mendapatkan jenis berita unik
router.get('/jenisberita', (req, res) => {
  const sql = 'SELECT DISTINCT jenis_berita FROM berita';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});

// Route untuk mendapatkan berita berdasarkan jenis berita
router.get('/beritabyjenis/:jenis', (req, res) => {
  const jenis = req.params.jenis;
  const sql = 'SELECT * FROM berita WHERE jenis_berita = ?';
  db.query(sql, [jenis], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});
// Route untuk mendapatkan berita berdasarkan ID
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'SELECT * FROM berita WHERE id_berita = ?';
  db.query(sql, [id], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Item not found' });
      return;
    }
    res.json(results[0]); // Mengirim objek berita pertama dalam array
  });
});
module.exports = router;
