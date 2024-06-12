// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const news = [
  {
    title: 'Berita 1',
    category: 'Kategori 1',
    summary: 'Ringkasan Berita 1',
    keywords: ['keyword1', 'keyword2']
  },
  {
    title: 'Berita 2',
    category: 'Kategori 2',
    summary: 'Ringkasan Berita 2',
    keywords: ['keyword3', 'keyword4']
  }
];

app.get('/news', (req, res) => {
  res.json(news);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});