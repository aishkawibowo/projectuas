const express = require('express');
const router = express.Router();
const cors = require('cors');

router.use(cors()); // Tambahkan middleware CORS di sini

// Example of another route that would need CORS enabled
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM beritalist';
  db.query(sql, (err, results) => {
      if (err) {
          res.status(500).json({ error: 'Internal Server Error' });
          return;
      }
      res.json(results);
  });
});

router.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM beritalist WHERE id = ?';
  db.query(sql, [id], (err, results) => {
    if (err) {
        res.status(500).json({ error: 'Internal Server Error' });
        return;
    }
    res.json({ message: 'Item deleted successfully' });
  });
});

module.exports = router;
