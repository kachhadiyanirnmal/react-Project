import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, deleteItem } from '../features/items/itemsSlice';

const ItemList = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items.items);
  const status = useSelector(state => state.items.status);
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchItems());
    }
  }, [status, dispatch]);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Items List</h1>
      <ul className="list-disc pl-5">
        {items.map(item => (
          <li key={item.id} className="mb-2">
            {item.name}
            <button
              onClick={() => dispatch(deleteItem(item.id))}
              className="ml-2 text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
