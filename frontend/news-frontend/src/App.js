// src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/news')
      .then(response => response.json())
      .then(data => setNews(data));
  }, []);

  return (
    <div className="App">
      <h1>Daftar Berita</h1>
      {news.map((item, index) => (
        <div key={index} className="news-item">
          <h2>{item.title}</h2>
          <p><strong>Kategori:</strong> {item.category}</p>
          <p>{item.summary}</p>
          <p><strong>Keywords:</strong> {item.keywords.join(', ')}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
