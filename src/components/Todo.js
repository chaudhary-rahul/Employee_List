import React, { useState } from 'react'

export default function Todo() {
    const [input , setInput] = useState("");
    const [todos , setTodos] = useState([]);
    const [editingIndex,setEditingIndex] = useState(-1)
    const [edit , setEdit] = useState('')
    const handleinput =(e)=>{
        setInput(e.target.value);
    }
    const handlesubmit=(event)=>{
        event.preventDefault();
        if(!input) return;
        if(editingIndex==-1){
            setTodos([...todos,{text:input}])
        }
       
        setInput('')
    }
    const handleEdit=(index)=>{
            setEditingIndex(index)
            setEdit(todos[index].text)
    }
  return (
    <div className='container '>
       <form className='form form-control' onSubmit={handlesubmit}>
            <input
            className='form-control'
            type={"text"}
              placeholder='enter item to be added'
                value={input}
                onChange={handleinput}
            />
            <button className='btn btn-primary'> add</button>
       </form>
     <div className='container d-block'>
     <ul >
        {todos.map((todo,index)=>(
            <li key={index} className="container"><h3>{todo.text}</h3></li>
        ))}
     </ul>
     </div>
      
    </div>
  )
}
