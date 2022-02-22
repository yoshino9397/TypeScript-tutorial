import React from 'react'
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
  return (
  <form className="todos_single">
<span className="todos_single-text">
  {todo.todo}
</span>
<div>
  <span className="icon">
    <AiFillEdit/>
  </span>
  <span className="icon">
    <AiFillDelete/>
  </span>
  <span className="icon">
    <IoMdDoneAll/>
  </span>
</div>
  </form>
  )
}

export default SingleTodo