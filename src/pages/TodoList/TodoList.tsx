import React, { useState } from 'react';
import { TextField, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

interface TodoItem {
  id: number;
  value: string;
}

let countId = 0;

const TodoList: React.FC = () => {
  const [list, setList] = useState<TodoItem[]>([{ id: 0, value: '' }]);
  const [itemFilter, setItemFilter] = useState('');

  const handleChange = (value: string, id: TodoItem['id']) => {
    setList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, value } : item)),
    );
  };

  const handleDelete = (id: TodoItem['id']) => {
    setList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAdd = (index: number) => {
    const newTodo = { id: countId + 1, value: '' };
    countId += 1;
    setList((prev) => [
      ...prev.slice(0, index + 1),
      newTodo,
      ...prev.slice(index + 1),
    ]);
  };

  const handleFilter = (value: string) => {
    if (value.length === 0) {
      return list;
    }
    return list.filter((item) =>
      item.value.toLowerCase().includes(value.toLowerCase()),
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: 'gray',
        position: 'absolute',
        top: '0',
        bottom: '0',
        right: '0',
        left: '0',
      }}
    >
      <TextField
        value={itemFilter}
        onChange={(e) => setItemFilter(e.target.value)}
        color="primary"
        label="Filtrar por título"
      />
      {handleFilter(itemFilter).map((item, index) => (
        <div key={item.id} style={{display: "flex", marginTop: "1em", backgroundColor: "white"}}>
          <TextField
            value={item.value}
            onChange={(e) => handleChange(e.currentTarget.value, item.id)}
          />
          <IconButton onClick={() => handleAdd(index)}>
            <AddIcon />
          </IconButton>
          {list.length > 1 && (
            <IconButton onClick={() => handleDelete(item.id)}>
              <DeleteIcon />
            </IconButton>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
