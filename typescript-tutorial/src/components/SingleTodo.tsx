import React, { useState } from 'react'
import {Todo} from '../model'
import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { IoMdDoneAll } from 'react-icons/io';
import './styles.css'


interface Props{
  todo:Todo;
  todos:Todo[]
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>

}
const SingleTodo = ({todo,todos,setTodos}:Props) => {
const [edit, setEdit] = useState<boolean>(false)
const [editTodo, setEditTodo] = useState<string>(todo.todo)

const handleDone=(id:number) => {
setTodos(todos.map((todo)=>todo.id === id ? {...todo,isDone:!todo.isDone}:todo));
};
const handleDelete=(id:number) => {
setTodos(todos.filter((todo)=> todo.id !== id))
};
const handleEdit=(e: React.FormEvent,id:number) => {
  e.preventDefault();
  setTodos(
    todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
  );
  setEdit(false);
};
  

  return (
  <form className="todos_single">
{
edit ? (
<input  value={editTodo} onSubmit={(e) =>handleEdit(e,todo.id)} className="todos_single_text"/>
):(
  todo.isDone ?(
    <span className="todos_single-text">
{todo.todo}
</span>
  ):(
<span className="todos_single-text">
{todo.todo}
</span>
  )
)
}

<div>
  <span className="icon" onClick={()=>{
    if (!edit && !todo.isDone) {
      setEdit(!edit)
    }
  }}>
    <AiFillEdit/>
  </span>
  <span className="icon" onClick={()=>handleDelete(todo.id)}>
    <AiFillDelete/>
  </span>
  <span className="icon" onClick={()=>handleDone(todo.id)}>
    <IoMdDoneAll/>
  </span>
</div>
  </form>
  )
}

export default SingleTodo