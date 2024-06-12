import React from 'react';
import ItemList from './ItemList';
import './App.css';

const App = () => {
  return (
    <div className="App-header"> 
      <h1>Daftar Berita Terkini di Indonesia</h1>
      <div className="ItemListContainer">
        <ItemList />
      </div>
    </div>
  );
};

export default App;
