import React, { useState } from 'react';
import './AppReact.css';
import InputField from './components/InputField'
import { Todo } from "./model";

const AppReact:React.FC=()=>{
const [todo, setTodo] = useState<string>('');
const [todos, setTodos] = useState<Todo[]>([]);

const handleAdd = (e:React.FormEvent)=>{
e.preventDefault();

if (todo) {
  setTodos([...todos,{id:Date.now(),todo,isDone:false}]);
  setTodo('')
}
}


  return (
    <div className="AppReact">
    <span className="heading">
Todo List
    </span>
    <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    {/* <TodoList/> */}
    {todos.map((t)=>(<li>{t.todo}</li>))}
    </div>
  );
}


export default AppReact;