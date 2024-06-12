import React from 'react';
import './App.css';

const Item = ({ item }) => {
  return (
    <tr>
      <td>{item.title}</td>
      <td>{item.category}</td>
      <td>{item.summary}</td>
      <td>{Array.isArray(item.keywords) ? item.keywords.join(', ') : item.keywords}</td>
    </tr>
  );
};

export default Item;
