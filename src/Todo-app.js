import React, { useState } from 'react';
import './App.css';

function TodoApp() {
  const [items, setItems] = useState([
    { id: 1, text: 'Eggs' },
    { id: 2, text: 'Milk' },
    { id: 3, text: 'Cheese' },
  ]);
  const [newItem, setNewItem] = useState('');
  const [editItem, setEditItem] = useState(null);
  const [editText, setEditText] = useState('');

  const handleAddItem = () => {
    if (newItem.trim()) {
      const newItemObject = { id: Date.now(), text: newItem };
      setItems([...items, newItemObject]);
      setNewItem('');
    }
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleEditItem = (id) => {
    const itemToEdit = items.find(item => item.id === id);
    setEditItem(id);
    setEditText(itemToEdit.text);
  };

  const handleSaveEdit = (id) => {
    setItems(items.map(item => (item.id === id ? { ...item, text: editText } : item)));
    setEditItem(null);
    setEditText('');
  };

  const handleCancelEdit = () => {
    setEditItem(null);
    setEditText('');
  };

  return (
    <div className="app">
      <h1>Grocery Shopping</h1>
      <ul className="todo-list">
        {items.map(item => (
          <li key={item.id} className="todo-item">
            {editItem === item.id ? (
              <>
                <input 
                  type="text" 
                  value={editText} 
                  onChange={(e) => setEditText(e.target.value)} 
                />
                <button onClick={() => handleSaveEdit(item.id)}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <span>{item.text}</span>
                <button onClick={() => handleEditItem(item.id)}>&#9998;</button>
                <button onClick={() => handleDeleteItem(item.id)}>&#128465;</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <div className="input-area">
        <input 
          type="text" 
          placeholder="Add something to your list" 
          value={newItem} 
          onChange={(e) => setNewItem(e.target.value)} 
        />
        <button onClick={handleAddItem}>Add</button>
      </div>
      <button className="delete-all" onClick={() => setItems([])}>Delete List</button>
    </div>
  );
}

export default TodoApp;
