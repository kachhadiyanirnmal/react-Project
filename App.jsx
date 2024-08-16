import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';

const App = () => {
  return (
    <Router>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/add" element={<AddItem />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
