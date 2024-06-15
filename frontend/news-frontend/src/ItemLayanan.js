import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const ItemLayanan = () => { // Rename to ItemLayanan instead of ItemListJenis
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const url = 'http://localhost:5000/jenislayanan';
        const response = await axios.get(url);
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="ItemListJenisContainer">
      <h2>List Berita</h2>
      <div className="ItemListJenis">
        {items.map(item => (
          <div className="Item" key={item.id}>
            <h3>{item.judul_berita}</h3>
            <p><strong>Category:</strong> {item.jenis_berita}</p>
            <p><strong>Summary:</strong> {item.ringkasan}</p>
            <p><strong>Keywords:</strong> {item.keywords}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemLayanan;
