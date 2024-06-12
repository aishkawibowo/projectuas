import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from './Item';
import './App.css';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items', error);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Summary</th>
            <th>Keywords</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <Item key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
