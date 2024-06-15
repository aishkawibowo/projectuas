import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from './Item';
import './App.css';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const url = 'http://localhost:5000';
        const response = await axios.get(url);
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="ItemListContainer">
      <h2>List Berita</h2>
      <div className="ItemList">
        {items.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
