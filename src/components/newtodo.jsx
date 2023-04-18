import React from 'react'
import { useState } from 'react';
export default function Newtodo() {
  

    const [todos , setTodos] = useState([])
    const [inputValue , setInputValue]= useState('')
    const [searchTerm,setSearchTerm]  = useState('')
    const [editingIndex,setEditingIndex] = useState(-1)
    const [editValue,setEditValue] = useState('')

      function handleInputChange(e) {
        
          setInputValue(e.target.value);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        if (!inputValue) return;
        setTodos([...todos, { text: inputValue}]);
        setInputValue('');
      };
    
      const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };
    
    //   const handleComplete = (index) => {
    //     const newTodos = [...todos];
    //     newTodos[index].completed = !newTodos[index].completed;
    //     setTodos(newTodos);
    //   };
    
      const handleEdit = (index) => {
        setEditingIndex(index);
        setEditValue(todos[index].text);
      };
    
      const handleUpdate = (event) => {
        event.preventDefault();
        if (!editValue) return;
        const newTodos = [...todos];
        newTodos[editingIndex].text = editValue;
        setTodos(newTodos);
        setEditingIndex(-1);
        setEditValue('');
      };
    
      const handleCancelEdit = () => {
        setEditingIndex(-1);
        setEditValue('');
      };
    
      const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
      };
    
      const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchTerm.toLowerCase()));
    
      return (
        <div>
          <h1>Todo App</h1>
          <form onSubmit={handleSubmit} className="container d-flex mx-2 mt-5 ">
            <input
              type="text"
              placeholder="Add todo..."
              value={inputValue}
              onChange={handleInputChange}
              className="form-control pt-2 mx-5 d-flex"
            />
            <button type="submit" className='btn btn-primary'>Add</button>
          </form>
          <div className='container d-flex'>
            <input 
              type="text"
              placeholder="Search todo..."
              value={searchTerm}
              onChange={handleSearchTermChange}
              className="form-control "
            />
          </div>
          <ul>
            {filteredTodos.map((todo, index) => (
              <li key={index} className="container">
                {editingIndex === index ? (
                  <form onSubmit={handleUpdate}>
                    <input
                      type="text"
                      value={editValue}
                      className="form-control"
                      onChange={(event) => setEditValue(event.target.value)
                      
                      }
                    />
                    <button type="submit " className='btn btn-success'>Save</button>
                    <button type="button" onClick={handleCancelEdit}
                    className='btn btn-warning'>Cancel</button>
                  </form>
                ) : (
                  <>
                    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
                    {/* <button onClick={() => handleComplete(index)}>{todo.completed ? 'Incomplete' : 'Complete'}</button> */}
                    <button onClick={() => handleEdit(index)} className='btn btn-warning mx-3'>Edit</button>
                    <button onClick={() => handleDelete(index)} className='btn btn-danger'>Delete</button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      );
                }
