import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/items/itemsSlice';

const AddItem = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem({ name }));
    setName('');
  };

  return (
    <form onSubmit={onSubmit} className="container mx-auto mb-4">
      <h2 className="text-2xl font-bold mb-2">Add Item</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded mb-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add Item
      </button>
    </form>
  );
};

export default AddItem;
